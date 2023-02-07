---
title: PATh’s Support for Research Computing and the CC* Program
date: 2021-08-12 12:00:00 -0600
categories: NSF Campus Cyberinfrastructure (CC*)
layout: table-of-contents
table_of_contents:
  - name: 2023 CC* Proposals
    href: "#proposal"
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

<div class="p-3 my-4 bg-white-offset fs-5 rounded shadow">
    <h3 class="mt-0 text-center pb-3">We are here to help with your <a href="https://www.nsf.gov/publications/pub_summ.jsp?ods_key=nsf23526&org=NSF">CC* Proposal (NSF 23-526)!</a></h3>
    <p class="text-center">
        Campuses with awards from the
        <a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504748">NSF Campus Cyberinfrastructure (CC*)</a>
        Program play an important role in supporting Open Science. To date, 25 CC* campuses contribute to the processing and storage capacity of the
        <a href="{{ '/services/open_science_pool/' | relative_url }}">Open Science Pool (OSPool)</a> that is 
        harnessed weekly by more than 2M jobs.
    </p>
    <p class="mb-0 d-flex justify-content-center pt-3">
        <a class="btn btn-primary text-decoration-underline fs-5" href="mailto:cc-star-proposals@osg-htc.org">Email Us</a>
        <a class="btn btn-primary text-decoration-underline ms-1 fs-5" href="#let-osg-help-with-your-cc-proposal">How We Can Help</a>
    </p>
</div>

Enhancing the capacity of Research Computing of US campuses through local deployment and cross campus sharing is
fully aligned with the vision of our NSF funded project - [Partnership to Advance Throughput Computing (PATh)](https://path-cc.io).
Our project is committed to support CC* projects from proposal, through deployment, to operation.

## [Proposal](https://www.nsf.gov/pubs/2023/nsf23526/nsf23526.htm)

<div class="border p-3 mt-3 mb-3 pb-0 rounded bg-light" markdown="1">

Proposals in response to the 2023 CC* program solicitation ([NSF 23-526](https://www.nsf.gov/pubs/2023/nsf23526/nsf23526.htm))
are due on March 1, 2023. Please contact us at [cc-star-proposals@osg-htc.org](mailto:cc-star-proposals@osg-htc.org)
(the earlier the better!) with any questions
or requests you may have regarding the involvement of [PATh](https://path-cc.io) in your proposed project. Our technology and services are
readily available to support a spectrum of CC* projects.

The [NSF 23-526](https://www.nsf.gov/pubs/2023/nsf23526/nsf23526.htm) solicitation explicitly mentions the OSG services
we provide as a means to meet requirements for the following areas:

__(4) Campus Computing and the Computing Continuum__

NSF recommends reaching out to [PATh](https://path-cc.io) for "technical direction/expertise during their proposal
development" and suggests working with the OSG to contribute its "minimum of 20% shared time on the cluster" to the
[OSPool](/services/open_science_pool).

__(5) Regional Computing awards__

NSF strongly encourages joining PATh, and suggests working with the OSG to contribute its "minimum of 20% shared time on the cluster" to the
[OSPool](/services/open_science_pool).

__(6) Data Storage awards__

NSF solely mentions the OSG's [Open Science Data Federation](https://osg-htc.org/services/osdf.html) as a federated data sharing fabric to share
its required "20% of the disk/storage space on the proposed storage system."

</div>

## Let the PATh team help with your proposal

The National Science Foundation Campus Cyberinfrastructure (CC*) program
([NSF 23-526](https://www.nsf.gov/pubs/2023/nsf23526/nsf23526.htm)) invests in coordinated campus
and regional-level cyberinfrastructure improvements and innovation.

[PATh](https://path-cc.io) has experience offering consulting to CC* projects during the proposal phase for the
following aspects of the proposed project:

- Sharing data with authorized users via the [Open Science Data Federation (OSDF)](/services/osdf.html)
- Bringing the power of high throughput computing via the [OSPool](/services/open_science_pool.html) to your researchers
- Meeting CC*-required resource sharing as specified in <a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504748" target="_blank">(NSF 23-526)</a>, and other options for integrating with the OSG Consortium
- Providing connections to help with data storage systems for shared inter-campus or intra-campus resources
    - We have collected [community data storage systems](/organization/osdf/example_data_origin.html) for your consideration
- Building regional computing networks
- Developing science gateways to utilize high throughput computing via the [OSPool](/services/open_science_pool.html)

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
via the [OSPool](/services/open_science_pool.html) (April 2021 - March 2022). These contributions supported more than 230 
research groups, campuses, multi-campus collaborations, and gateways, and in fields of 
study ranging from the medicine to economics, and from genomics to physics. Every month,
OSG services help additional campuses to support open science by sharing their resources 
via the OSPool.

#### Data Storage


As of March 2022, the [Open Science Data Federation](/services/osdf.html) integrates 10 data origins, making data 
accessible via 20 caches, 6 of which are strategically located in the R&E network backbone.
The CC* solicitation of 2022 (NSF 22-582) encourages responses that would add data origins 
or caches at campuses.
