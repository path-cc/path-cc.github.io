---
title: PATh’s Support for Research Computing and the CC* Program
date: 2021-08-12 12:00:00 -0600
categories: NSF Campus Cyberinfrastructure (CC*)
layout: table-of-contents
table_of_contents:
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

#### Final Deadline Passed: September 11th, 2023



Enhancing the capacity of Research Computing of US campuses through local deployment and cross campus sharing is
fully aligned with the vision of our NSF funded project - [Partnership to Advance Throughput Computing (PATh)](https://path-cc.io).
Our project is committed to support CC* projects from proposal, through deployment, to operation.



## Let the PATh team help with your proposal

The National Science Foundation Campus Cyberinfrastructure (CC*) program
([NSF 23-526](https://www.nsf.gov/pubs/2023/nsf23526/nsf23526.htm)) invests in coordinated campus
and regional-level cyberinfrastructure improvements and innovation.

[PATh](https://path-cc.io) has experience offering consulting to CC* projects during the proposal phase for the
following aspects of the proposed project:

- Sharing data with authorized users via the [Open Science Data Federation (OSDF)](https://osg-htc.org/services/osdf.html)
- Bringing the power of high throughput computing via the [OSPool](https://osg-htc.org/services/open_science_pool.html) to your researchers
- Meeting CC*-required resource sharing as specified in <a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504748" target="_blank">(NSF 23-526)</a>, and other options for integrating with the OSG Consortium
- Providing connections to help with data storage systems for shared inter-campus or intra-campus resources
    - We have collected [community data storage systems](https://osg-htc.org/organization/osdf/example_data_origin.html) for your consideration
- Building regional computing networks
- Developing science gateways to utilize high throughput computing via the [OSPool](https://osg-htc.org/services/open_science_pool.html)

Please do not hesitate (or wait too long) to contact us at
[cc-star-proposals@osg-htc.org](mailto:cc-star-proposals@osg-htc.org) with
questions or requests for letters of support regarding your CC* proposed project.

## Deployment

Our experienced and friendly team of engineers and facilitators is dedicated to supporting system engineers and
campus research groups. This team provides networking, computing and data storage consulting in support of
proposals, providing expertise and guidance.

Post award, these teams continue their support to ensure smooth integration and onboarding into the OSPool or OSDF.
The facilitation team also provides extensive support to researchers with regular training, weekly office hours,
documentation, videos and more.

Please contact us at [help@osg-htc.org](mailto:help@osg-htc.org) to schedule a consultation to discuss deployment
of OSG resources at your campus.

## Operation

After your campus has integrated with the OSPool or OSDF, our team offers continued support to make the best use of
computational resources at your campus. This includes troubleshooting of OSG services as well as providing accounting 
data for the research projects and kinds of research making use of your resources. Also, our CC* liaison will meet with 
you periodically to see how things are going and what we can do to better support you.

Our staff remains available to assist you with meeting your goals as your research computing needs evolve. If you or
your researchers have any questions or issues, please contact us at [support@osg-htc.org](mailto:support@osg-htc.org).

### OSG supported Colleges and Universities contributing via the CC* program:

<iframe width="100%" height="500px" frameBorder="0" style="margin-bottom:1em; margin-top:1em" src="https://map.opensciencegrid.org/map/iframe?view=CCStar#38.61687,-97.86621|4|hybrid"></iframe>

{% assign cc_star_sites = site.data.cc_star | sort: "name" %}
{% for cc_star_site in cc_star_sites %}
- <a href="{{ cc_star_site.href }}" target="_blank">{{ cc_star_site.name }}</a>{% endfor %}

### CC* Campus impact on Open Science


The OSG Consortium has been working with CC* campuses pre and post award for several years. 
These campuses have made significant contributions in support of science, both on their 
own campus and for the entire country.

#### Computing


In the last year, twenty-two campuses contributed over 235 million core hours to researchers 
via the [OSPool](https://osg-htc.org/services/open_science_pool.html) (April 2021 - March 2022). These contributions supported more than 230 
research groups, campuses, multi-campus collaborations, and gateways, and in fields of 
study ranging from the medicine to economics, and from genomics to physics. Every month,
OSG services help additional campuses to support open science by sharing their resources 
via the OSPool.

#### Data Storage


As of March 2022, the [Open Science Data Federation](https://osg-htc.org/services/osdf.html) integrates 10 data origins, making data 
accessible via 20 caches, 6 of which are strategically located in the R&E network backbone.
The CC* solicitation of 2022 (NSF 22-582) encourages responses that would add data origins 
or caches at campuses.
