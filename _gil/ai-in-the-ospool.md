---
title: AI in the OSPool with emphasis on PelicanFS Python bindings
layout: sub-page
date: 2025-4-29
excerpt: |
  AI workloads are becoming more important in the scientific research domain, so properly supporting this use-case is becoming increasingly important in the OSPool, too. As with many other compute workloads, the data handling part of AI workloads requires heightened attention on the HTC-oriented OSPool resources. Since the OSPool does not offer a shared file system, the Pelican software stack is the recommended way of handling data. To make access to the Pelican-managed resources easier, the PelicanFS Python bindings have been developed, allowing for transparent access to such data from typical AI workloads, e.g. the PyTorch-based ones.

---

<style>
pre {
    border-radius: 5px;
    background: #f3f3f3;
    padding: 5px 10px;
}
</style>

**by Igor Sfiligoi - University of California San Diego, as of April 29th, 2025**


AI workloads are becoming more important in the scientific research domain, so properly supporting this use-case is becoming increasingly important in the OSPool, too. As with many other compute workloads, the data handling part of AI workloads requires heightened attention on the HTC-oriented OSPool resources. Since the OSPool does not offer a shared file system, the Pelican software stack is the recommended way of handling data. To make access to the Pelican-managed resources easier, the PelicanFS Python bindings have been developed, allowing for transparent access to such data from typical AI workloads, e.g. the PyTorch-based ones.

# Executive summary

In this document we report on the evaluation of the feasibility of running AI workloads on OSPool resources, with an emphasis of using the PelicanFS Python bindings for data access. We observe that

-   The PelicanFS technical implementation is adequate for public data, but lacks first-class support for private data.

-   There is a lack of proper documentation on how to deal with large numbers of small files, which is prevalent in AI workloads.

-   There is currently a lack of documentation of how to use PelicanFS inside the OSPool.

-   All the available documentation focuses on AI training, while the OSPool HTC nature seems more appropriate for AI inference workloads.


More details on the observations and the related recommendations are available below.

# Itemized observations and recommendations

## Observation 1:

PelicanFS Python bindings are easy to install with pip, right inside the job.

```
pip install pelicanfs
python3 …
```


## Observation 2:

Easy to use for public data

```
from pelicanfs.core import PelicanFileSystem
pelfs = PelicanFileSystem("pelican://osg-htc.org")
hello_world = pelfs.cat('/ospool/uc-shared/public/OSG-Staff/isfiligoi/test1.txt')
print(hello_world)
```


Clear example in

[https://github.com/PelicanPlatform/pelicanfs](https://github.com/PelicanPlatform/pelicanfs)

But that git area is not linked from the OSPool documentation, nor does it have HTCondor-related examples.



### Recommendation for 1+2:

Provide some kind of pelicanfs-related documentation in the OSPool documentation area.

Possibly related to [https://portal.osg-htc.org/documentation/software_examples/ai/tutorial-pytorch/](https://portal.osg-htc.org/documentation/software_examples/ai/tutorial-pytorch/)

## Observation 3:

Does not have native support for credential handling.

Trying to access private data, e.g.

```
hello_world = pelfs.cat('/ospool/ap21/data/isfiligoi/test1.txt')
```

fails with

```
No working cache found
pelicanfs.exceptions.NoAvailableSource
```


### Workaround for 3:

Explicitly load the credential and pass it to pelicanfs:

```
import json

scitokens_file_path = …
with open(scitokens_file_path, 'r') as file:
    data = json.load(file)
access_token = data['access_token']
auth_token = f"Bearer {access_token}"
pelfs = PelicanFileSystem("pelican://osg-htc.org", headers={'Authorization': auth_token})
hello_world = pelfs.cat('/ospool/ap21/data/isfiligoi/test1.txt')
print(hello_world)
```


Note that the exact location of the token is not completely deterministic.  
This worked in April 2025, but was slightly different on March 2025.

```
import json

# Get the directory path from the _CONDOR_CREDS environment variable
condor_creds_dir = os.getenv('_CONDOR_CREDS')
scitokens_file_path = os.path.join(condor_creds_dir, 'ap.use')
```


### Recommendation for 3:

The command line tool

```
pelican object get pelican://osg-htc.org/ospool/ap21/data/isfiligoi/test1.txt test1.txt
```

has baked-in support for auto-discovery of the appropriate credential to use.

**The PelicanFS library should have an easy option that mimics that (ideally as the default behaviour).**




## Observation 4:

There is no clear documentation on how to deal with many small files, which we know OSDF does not handle well. No clear guidance about using tar or zip files.

It may be obvious for a python/fsspec expert to use one of the helper classes, e.g.

[https://filesystem-spec.readthedocs.io/en/latest/_modules/fsspec/implementations/tar.html](https://filesystem-spec.readthedocs.io/en/latest/_modules/fsspec/implementations/tar.html)

but I doubt a science user will have that knowledge.

There is an example in the tutorial Github area:

[https://github.com/PelicanPlatform/PelicanPytorchTutorial/blob/main/benchmark/Benchmark1.ipynb](https://github.com/PelicanPlatform/PelicanPytorchTutorial/blob/main/benchmark/Benchmark1.ipynb)

but it is buried deep inside the code, and would not be an obvious place to look.



### Recommendation for 4:

Add explicit guidelines and top-level examples on how to deal with large numbers of small files. Possibly in [https://portal.osg-htc.org/documentation/software_examples/ai/tutorial-pytorch/](https://portal.osg-htc.org/documentation/software_examples/ai/tutorial-pytorch/)




## Observation 5:

There is a reasonable amount of AI/ML training documentation (even though it does not include any PelicanFS integration). However, all the AI examples I can find are exclusively based on training. Given the HTC nature of the OSPool, inference seems a much more natural fit for it. Especially since modern, large scale AI training requires true HPC resources, beyond what the OSPool provides.



### Recommendation for 5:

Add AI-inference focused examples in the OSPool documentation.

Also, given the much larger availability of CPUs, compared to GPUs, some CPU-based inference examples would likely be beneficial.