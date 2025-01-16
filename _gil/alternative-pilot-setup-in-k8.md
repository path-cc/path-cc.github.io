---
title: An alternative pilot setup in Kubernetes
date: 2024-12-19
layout: markdown
excerpt: |
    The existing OSPool pilot setup on Kubernetes in the NRP relies on nested containerization, which
    is not supported on the majority of Kubernetes deployments and has security drawbacks, too. This
    document proposes an alternative pilot setup that only uses Kubernetes-native mechanisms to
    make it usable on most Kubernetes-managed resources.
    In order to implement this new pilot setup, HTCondor will need to become Kubernetes aware. This
    document provides pointers to the envisioned Kubernetes mechanisms to be used by various
    HTCondor processes, as well as a couple simplified pilot-like Kubernetes examples that exercise
    most of those mechanisms.
---

Dec 19th, 2024 

- Igor Sfiligoi - University of California San Diego
- Jaime Frey - University of Wisconsin-Madison
- Yunjin (Grace) Zhu - University of California San Diego

## Executive summary 

The existing OSPool pilot setup on Kubernetes in the NRP relies on nested containerization, which is not supported on the majority of Kubernetes deployments and has security drawbacks, too. This document proposes an alternative pilot setup that only uses Kubernetes-native mechanisms to make it usable on most Kubernetes-managed resources. In order to implement this new pilot setup, HTCondor will need to become Kubernetes aware. This document provides pointers to the envisioned Kubernetes mechanisms to be used by various HTCondor processes, as well as a couple simplified pilot-like Kubernetes examples that exercise most of those mechanisms. 

## Traditional OSPool pilot setup 

Pilot-based dHTC is based on two fundamental principles:

1) _Clear separation of the provisioning and job scheduling phases._ The provisioning phase requests compute resources from the resource providers on behalf of a generic service user, i.e. the “pilot”. Only once the pilot is granted those resources and the management processes start is an actual user payload selected and fetched to the compute resource. A single pilot may also serve several independent users during its lifetime. This is often referred to as _“late binding”_.

2) _No elevated permissions expected._ In order to minimize security risks for the resource providers, the pilot’s management processes only have access to standard user permissions. 

The later principle has important security implications when dHTC is used in open environments. Without system-level protection mechanisms, a user job could compromise the pilot infrastructure, preventing dHTC setups to be shared between multiple user communities. 

The security solution adopted in OSG to protect the pilot processes from the user jobs is based on containerization mechanisms. By launching the user job’s processes inside a container environment, they become unaware of any resources living outside that domain. As an added benefit, each user job can provide its own container image, relaxing the host configuration requirements, which further improves the dHTC appeal for both users and resource providers. 

Containerization as a mean to improve usability has indeed become standard practice in most batch system deployments, typically through the use of apptainer. Those containerization capabilities are normally available to all the users of the host system, so the OSG pilots can use them without requiring any elevated privileges. 

## Original Kubernetes-based pilot setup 

The OSpool pilots in NRP Kubernetes cluster have been originally deployed with minimal changes. Indeed, HTCondor is unaware of any differences, still using singularity for launching the user job inside a user-defined container.

That said, Kubernetes is natively container-based, so the pilot itself already starts inside a container. The invocation of singularity inside the Kubernetes-managed container thus results in nested containerization. Unfortunately, nested containerization is not generally supported in Kubernetes clusters without elevated privileges. 

The NRP does provide unprivileged nested containerization, but with some limitations. For the purpose of the pilot setup, the major limit is the inability to use a separate PID namespace when running the user job. The apptainer installation in the NRP pilot setup thus never provides that capability, severely reducing the security protection offered by the nested containerization layer. In conclusion, the current setup is suboptimal on NRP, and cannot be deployed on most other Kubernetes clusters. 

## Proposed new Kubernetes-based pilot setup lifecycle 

In order to avoid nested containerization, the proposed pilot setup uses native Kubernetes containerization mechanisms, instead. A high-level overview of how the proposed setup would work is detailed below. 

Pod containing the following starts in Kubernetes

- Sidecar container using “htcondor image”, properly configured, starts master as root It has a service credential that allows it to query and modify pods/containers Requests minimal resources
- Regular container, with dummy image, with forced UID of “nobody” [[1]](#1), wait for startup command on shared ephemeral volume (do nothing until sidecar creates such startup command) Requests resources that will be used by the user job
- There is a shared ephemeral volume between all the containers Request space that is enough for the user job
- Enable PID sharing [[2]](#2) between the containers 


In the sidecar: 
1. Master starts the startd 
2. Startd is eventually matched and gets a user job that has a container associated with it 
3. Starter process begins execution 
   1. Tells k8s to change the image of the regular container [[3]](#3) to the one provided by the user
   2. Stages all the necessary files in the shared volume
   3. Creates necessary startup command
   4. Waits for the regular container image to be updated/loaded (not instantaneous) 
4. Starter can now see all the processes in the regular container and can act on them E.g. monitoring, sending signals, etc. It can also see all the changes on the shared volume By using a dedicated UID (nobody), it can clearly see what belongs to the regular container
5. To monitor additional resources (e.g. GPUs), an ephemeral container may be a viable solution [[4]](#4)
6. Once the regular container terminates, the starter can query k8s [[5]](#5) for the exit status (It had access to the shared volume at all times, too)

In the regular container
- The user job runs fully unprivileged
- If CHIRP is needed, it can communicate with the sidecar container using IP over localhost
- The user job can see the sidecar processes, but has no privileges over it (e.g. cannot send signals) **Note:** The above should work for single slot setups. Generalization to partitionable-slot operation would need additional research. 


<a id="1" href="#1">[1]</a> [https://kubernetes.io/docs/tasks/configure-pod-container/security-context/](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) <br>
<a id="2" href="#2">[2]</a> [https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/](https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/) <br>
<a id="3" href="#3">[3]</a> [https://kubernetes.io/docs/reference/kubectl/generated/kubectl_set/kubectl_set_image/](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_set/kubectl_set_image/) <br>
<a id="4" href="#4">[4]</a> [https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/](https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/) <br>
<a id="5" href="#5">[5]</a> [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get) <br>

## Example simplified Kubernetes-native pilot-like setup 

Note: In order to improve readability, we include all code and Kubernetes yaml files as pointers to an external github repository. 

The sidecar container needs namespaced Kubernetes credentials in order to query and influence the job container. An example yaml file used to create such credentials is available at [https://github.com/sfiligoi/tnrp-net-tests/blob/master/gil-k8s-pilots-native/serviceAccount.yaml ](https://github.com/sfiligoi/tnrp-net-tests/blob/master/gil-k8s-pilots-native/serviceAccount.yaml)

The example pilot-like pod definition available at [https://github.com/sfiligoi/tnrp-net-tests/blob/master/gil-k8s-pilots-native/example-pilot-1.yaml](https://github.com/sfiligoi/tnrp-net-tests/blob/master/gil-k8s-pilots-native/example-pilot-1.yaml) exercises most of the needed Kubernetes mechanisms, by instructing the sidecar container to change the job container image used at runtime, monitoring and signaling processes between containers, as well as retrieving the exit status of the user job. 

A second pilot-like pod that exercises dynamic workloads and file passing between main and sidecar container is available at [https://github.com/sfiligoi/tnrp-net-tests/blob/master/gil-k8s-pilots-native/example-pilot-2.yaml](https://github.com/sfiligoi/tnrp-net-tests/blob/master/gil-k8s-pilots-native/example-pilot-2.yaml)