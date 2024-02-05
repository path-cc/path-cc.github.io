---
title: PATh’s Support for Research Computing and the CC* Program
date: 2021-08-12 12:00:00 -0600
categories: NSF Campus Cyberinfrastructure (CC*)
layout: table-of-contents
table_of_contents:
  - name: 2024 CC* Proposals
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

{% assign now = "now" | date: "%s" %}
{% if now < "1713830399" %}
<p class="fs-5 pt-2 pb-1 text-primary">
<b>Upcoming Deadlines: April 22nd and October 15th, 2024</b>
</p>
{% endif %}

{% assign now = "now" | date: "%s" %}
{% if now < "1729036799" and now > "1729036799" %}
<p class="fs-5 pt-2 pb-1 text-primary">
<b>Upcoming Deadline: October 15th, 2024</b>
</p>
{% endif %}

{% assign now = "now" | date: "%s" %}
{% if now < "1729036799" %}
  <div class="p-3 my-4 bg-white-offset rounded shadow">
      <h3 class="mt-0 fw-bold text-center">We are here to help with your <a href="https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc/nsf24-530/solicitation">CC* Proposal (NSF 24-530)!</a></h3>
      <p class="text-center">
          Campuses with awards from the
          <a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504748">NSF Campus Cyberinfrastructure (CC*)</a>
          Program play an important role in supporting Open Science. To date, 37 CC* campuses contribute to the processing and storage capacity of the
          <a href="https://osg-htc.org/services/open_science_pool.html">Open Science Pool (OSPool)</a> that is
          harnessed weekly by more than 3M jobs.
      </p>
      <p class="mb-0 d-flex justify-content-center pt-3">
          <a class="btn btn-outline-dark" href="mailto:cc-star-proposals@osg-htc.org">Contact Us</a>
          <a class="btn btn-outline-dark ms-1" href="/services/research-computing/#let-the-path-team-help-with-your-proposal">How We Can Help</a>
      </p>
  </div>
{% endif %}

Enhancing the capacity of Research Computing of US campuses through local deployment and cross campus sharing is
fully aligned with the vision of our NSF funded project - [Partnership to Advance Throughput Computing (PATh)](https://path-cc.io).
Our project is committed to support CC* projects from proposal, through deployment, to operation.

{% assign now = "now" | date: "%s" %}
{% if now < "1729036799" %}


{: .fs-5 }
Enhancing the capacity of Research Computing of US campuses through local deployment and cross campus sharing is
fully aligned with the vision of our NSF funded project - [Partnership to Advance Throughput Computing (PATh)](https://path-cc.io).
Our project is committed to support CC* projects from proposal, through deployment, to operation.


## [Proposal](https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc/nsf24-530/solicitation)

<div class="border p-3 mt-3 mb-3 pb-0 rounded bg-light" markdown="1">

{: .fs-5 }
Proposals in response to the 2024 CC* program solicitation
([NSF 24-530](https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc/nsf24-530/solicitation)) are due on
22 April 2024 and 15 October 2024.
Please contact us at [cc-star-proposals@osg-htc.org](mailto:cc-star-proposals@osg-htc.org)
(the earlier the better!) with any questions or requests
you may have regarding the involvement of [PATh](https://path-cc.io) in your proposed project.
Our technology and services are readily available to support a spectrum of CC* projects.

{: .fs-5 }
The
[NSF 24-530](https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc/nsf24-530/solicitation)
solicitation explicitly mentions the OSG services we provide as a means to meet requirements for the following areas:

{: .fs-5 }
__(2) Computing and the Computing Continuum for the Campus or Region__

{: .fs-5 }

NSF notes that for "All Area (2) proposals should commit to a minimum of 20% shared time and describe their approach to making the computing resource available as a shared resource external to the state/region and the institution(s) being primarily served. Proposals are strongly encouraged to address this requirement by joining the [Partnerships to Advance Throughput Computing (PATh)](https://path-cc.io) campus federation and adopting an appropriate subset of PATh services to make the resource available to researchers on a national scale. Proposals are encouraged to include a letter of collaboration from the selected platform and describe how they will track and report on meeting the 20% extramural usage goal each year. Institutions in need of technical direction/expertise during their proposal development are encouraged to engage the NSF-funded PATh project at: [https://path-cc.io](https://path-cc.io)."

{: .fs-5 }
__(4) Data Storage and Digital Archives for the Campus or Region__

{: .fs-5 }
NSF states that "All Area (4) proposals are required to have interoperability with a national and federated data sharing fabric such as PATh/OSDF(see: [http://www.osg-htc.org/about/osdf)](http://www.opensciencegrid.org/about/osdf). At least 20% of the disk/storage space on the proposed storage system should be made available as part of the chosen federated data sharing fabric."

{: .fs-5 }


</div>

{% endif %}

## Let the PATh team help with your proposal

The National Science Foundation Campus Cyberinfrastructure (CC*) program
([NSF 24-530](https://new.nsf.gov/funding/opportunities/campus-cyberinfrastructure-cc/nsf24-530/solicitation)) invests in coordinated campus
and regional-level cyberinfrastructure improvements and innovation.

[PATh](https://path-cc.io) has experience offering consulting to CC* projects during the proposal phase for the
following aspects of the proposed project:

- Sharing data with authorized users via the [Open Science Data Federation (OSDF)](https://osg-htc.org/services/osdf.html)
- Bringing the power of high throughput computing via the [OSPool](https://osg-htc.org/services/open_science_pool.html) to your researchers
- Meeting CC*-required resource sharing as specified in <a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504748" target="_blank">(NSF 24-530)</a>, and other options for integrating with the OSG Consortium
- Providing connections to help with data storage systems for shared inter-campus or intra-campus resources
    - We have collected [community data storage systems](https://osg-htc.org/organization/osdf/example_data_origin.html) for your consideration
- Building [regional computing networks](https://osg-htc.org/spotlights/gpargo-cc-star.html)
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

Campuses contribute core hours to researchers
via the [OSPool](/services/open_science_pool.html), a compute resource accessible to any
researcher affiliated with a US academic institution. These contributions support more than 230
research groups, campuses, multi-campus collaborations, and gateways, and in fields of
study ranging from the medicine to economics, and from genomics to physics.

#### Data Storage

The [Open Science Data Federation](/services/osdf.html) integrates data origins, making data
accessible via caches, of which many are strategically located in the R&E network backbone.
The CC* solicitation of 2024 (NSF 24-530) requires interoperability with a national and federated data sharing fabric such as PATh/OSDFs.

