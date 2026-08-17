---
title: Support for CC* Campuses
date: 2021-08-12 12:00:00 -0600
categories: NSF Campus Cyberinfrastructure (CC*)
excerpt: |
  Campuses that hold a National Science Foundation Campus Cyberinfrastructure (CC*) award play an important role in supporting open science.

  PATh and the OSG Consortium support CC* campuses through the deployment and operation of their computing and data storage systems.
layout: table-of-contents
table_of_contents:
  - name: Support for CC* Campuses
    href: "#support-for-cc-campuses"
    children:
    - name: Deployment
      href: "#deployment"
    - name: Operation
      href: "#operation"
  - name: CC* Impact on Open Science
    href: "#cc-campus-impact-on-open-science"
    children:
    - name: Computing
      href: "#computing"
    - name: Data Storage
      href: "#data-storage"
head_extension: |
    <link rel="canonical" href="https://osg-htc.org/campus-cyberinfrastructure.html" />
weight: 3
---

Enhancing the capacity of Research Computing of US campuses through local deployment and cross campus sharing is
fully aligned with the vision of our NSF funded project - [Partnership to Advance Throughput Computing (PATh)](https://path-cc.io).
Our project is committed to supporting CC* projects through deployment and operation.

## Support for CC* Campuses

Campuses that hold a CC* award can draw on the OSG Consortium and [PATh](https://path-cc.io) throughout the life of
their award. Our teams have experience with each of the following aspects of a CC* project:

- Sharing data with authorized users via the [Open Science Data Federation (OSDF)](https://osg-htc.org/services/osdf.html)
- Bringing the power of high throughput computing via the [OSPool](https://osg-htc.org/services/open_science_pool.html) to your researchers
- Meeting the resource sharing commitments in your award, and other options for integrating with the OSG Consortium
- Providing connections to help with data storage systems for shared inter-campus or intra-campus resources
    - We have collected [community data storage systems](https://osg-htc.org/organization/osdf/example_data_origin.html) for your consideration
- Building [regional computing networks](https://osg-htc.org/spotlights/gpargo-cc-star.html)
- Developing science gateways to utilize high throughput computing via the [OSPool](https://osg-htc.org/services/open_science_pool.html)

Please do not hesitate to contact us at
[support@osg-htc.org](mailto:support@osg-htc.org) with
questions about any of the above.

### Deployment

Our experienced and friendly team of engineers and facilitators is dedicated to supporting system engineers and
campus research groups. This team provides networking, computing and data storage consulting,
providing expertise and guidance.

These teams support your award to ensure smooth integration and onboarding into the OSPool or OSDF.
The facilitation team also provides extensive support to researchers with regular training, weekly office hours,
documentation, videos and more.

Please contact us at [help@osg-htc.org](mailto:help@osg-htc.org) to schedule a consultation to discuss deployment
of OSG resources at your campus.

### Operation

After your campus has integrated with the OSPool or OSDF, our team offers continued support to make the best use of
computational resources at your campus. This includes troubleshooting of OSG services as well as providing accounting 
data for the research projects and kinds of research making use of your resources. Also, our CC* liaison will meet with 
you periodically to see how things are going and what we can do to better support you.

Our staff remains available to assist you with meeting your goals as your research computing needs evolve. If you or
your researchers have any questions or issues, please contact us at [support@osg-htc.org](mailto:support@osg-htc.org).

#### OSG supported Colleges and Universities contributing via the CC* program:

<iframe width="100%" height="500px" frameBorder="0" style="margin-bottom:1em; margin-top:1em" src="https://map.osg-htc.org/map/iframe?view=CCStar#38.61687,-97.86621|4|hybrid"></iframe>

<div class="accordion pb-3" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        All CC* Institutions
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul>
          {% assign cc_star_sites = site.data.cc_star | sort: "name" %} 
          {% for cc_star_site in cc_star_sites %}
            <li><a href="{{ cc_star_site.href }}">{{ cc_star_site.name }}</a></li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>

## CC* Campus impact on Open Science

The OSG Consortium has worked with CC* campuses for many years.
These campuses have made significant contributions in support of science, both on their
own campus and for the entire country.

### Computing

Campuses contribute core hours to researchers
via the [OSPool](https://osg-htc.org/services/open_science_pool.html), a compute resource accessible to any
researcher affiliated with a US academic institution. These contributions support more than 230
research groups, campuses, multi-campus collaborations, and gateways, and in fields of
study ranging from the medicine to economics, and from genomics to physics.

### Data Storage

The [Open Science Data Federation](https://osg-htc.org/services/osdf.html) integrates data origins, making data
accessible via caches, of which many are strategically located in the R&E network backbone.
CC* awards for data storage require interoperability with a national and federated data sharing fabric such as PATh/OSDF.

