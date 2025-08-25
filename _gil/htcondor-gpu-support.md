---
title: HTCondor support of GPUs beyond NVIDIA
layout: markdown
date: 2025-08-15
excerpt: |
  HTCondor AMD GPU support is currently broken, as it would not recognize the GPUs present on the SDSC Cosmos system. The problem seems to be in the initial GPU discovery phase.

  Moreover, the standard containerization tool used by HTCondor to launch user jobs, namely Apptainer, also does not work correctly with AMD GPUs, and needs to be fixed before the OSPool can effectively use resources providing AMD GPUs.
---

*By Igor Sfiligoi - University of California San Diego*
*Aug 15th, 2025*

The GPU computing landscape has long been dominated by NVIDIA hardware, which can be used through the CUDA interface. HTCondor, which underpins the compute scheduling in the OSPool, has thus developed support for NVIDIA GPUs long ago, and many users are actively using this functionality for production uses.

While NVIDIA still dominates the GPU landscape, AMD has recently introduced compelling GPU models that are starting to be deployed at several resource providers of interest to the OSPool. HTCondor does have experimental support for AMD GPUs, which rely on the ROCm interface, and this activity was initiated to validate it on deployed resources.

## Executive Summary

HTCondor AMD GPU support is currently broken, as it would not recognize the GPUs present on the SDSC Cosmos system. The problem seems to be in the initial GPU discovery phase.

Moreover, the standard containerization tool used by HTCondor to launch user jobs, namely Apptainer, also does not work correctly with AMD GPUs, and needs to be fixed before the OSPool can effectively use resources providing AMD GPUs.

## Observations and Recommendations

### Observation #1

HTCondor does not properly detect the AMD GPUs in SDSC Cosmos. 

The root cause seems to be the crash of `condor_gpu_discovery`:
```
/usr/libexec/condor/condor_gpu_discovery -config -extra
/opt/rh/gcc-toolset-14/root/usr/include/c++/14/bits/stl_vector.h:1130: constexpr std::vector<_Tp, _Alloc>::reference std::vector<_Tp, _Alloc>::operator[](size_type) [with _Tp = _cl_device_id*; _Alloc = std::allocator<_cl_device_id*>; reference = _cl_device_id*&; size_type = long unsigned int]: Assertion '__n < this->size()' failed.
Aborted
```

**Recommendation:**

The HTCondor team should fix the `condor_gpu_discovery` tool.

---

### Observation #2

Apptainer blindly imports the AMD ROCm libraries and tools inside the container

But that does not work, unless the OS inside and outside the container are the same, which is often not the case.

In this particular test, the OS on SDSC Cosmos was SLES 15, while the OS in the container was AlmaLinux9.

```
singularity shell --rocm …
> /usr/libexec/condor/condor_gpu_discovery -diag -hip
diag: clearing environment before device enumeration
Can't open library 'libamdhip64.so.6': '/lib64/libstdc++.so.6: version `GLIBCXX_3.4.30' not found (required by /.singularity.d/libs/libamd_comgr.so.2)'
```

I got the same result using SingularityPro.

**Recommendation:**

The Apptainer team should fix the handling of the `--rocm` option.

---

### Observation #3

Container images that include the ROCm stack work correctly in Apptainer only if process isolation is not enabled. Unfortunately, pilot systems require this functionality.

```
singularity shell <rocm-enabled image>
> /usr/libexec/condor/condor_gpu_discovery -diag -hip
diag: clearing environment before device enumeration
diag: hip_Init()
diag: hipDevice count: 4 
DetectedGPUs="GPU0, GPU1, GPU2, GPU3"

singularity shell --contain <rocm-enabled image>
>  /usr/libexec/condor/condor_gpu_discovery -diag -hip
diag: clearing environment before device enumeration
diag: hip_Init()
diag: hipDevice count: 0 
DetectedGPUs=0
```

**Recommendation:**

The Apptainer team should investigate how to fix this. It may be dealt with as part of fixing the `--rocm` option.
