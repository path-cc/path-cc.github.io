---
layout: table-of-contents
title: "Research Facilitation"
intro_image:
intro_image_absolute: true
intro_image_hide_on_mobile: false
table_of_contents:
    - name: What We Do
    - name: Regular Support
    - name: Training
    - name: Other Events
---

{% include get/team.liquid %}
<div class="row pb-5">
    {% assign base_image_path = "/staff-list/" %}
    {% assign promoted_teams = team | where: "is_facilitator", 1 | sort: "weight" %}
    {% for member in promoted_teams %}
    <div class="col-12 col-md-6 mb-2">
        <div class="h-100 team team-summary team-summary-large">
            <div class="team-image">
                <img alt="{{ member.name }}" class="img-fluid mb-2" src="{{ base_image_path | append: member.image | relative_url }}" />
            </div>
            <div class="team-meta">
                {% if member.website %}
                <a href="{{ member.website }}">
                {% endif %}
                <h2 class="team-name">{{ member.name }}</h2>
                {% if member.website %}
                </a>
                {% endif %}
                <p class="team-institution">{{ member.institution }}</p>
                <!--<p class="team-description">{{ member.path.title | default: member.title }}</p>-->
            </div>
        </div>
    </div>
    {% endfor %}
</div>


<h2 id="what-we-do">What We Do</h2>

<p>To help researchers effectively utilize computing resources, our
Research Computing Facilitators (RCFs) not only guide the implementation of 
computational work on PATh-supported compute capacity, but can also
point researchers to other national services related to
research computing and data needs. </p>

<h5 class="mx-auto"><a class="btn  btn-outline-primary text-decoration-none" href="/contact/">Talk to Us</a></h5>


<br>

<h3 id="regular-support">Regular Support</h3>

<p>We are available to answer questions via an email “ticket” system. We
aim to provide a first response (although not necessarily a solution!)
within 1-2 business days.</p>

<p>In addition to email, we host drop-in “office hours” online twice a
week. No appointment is needed, just show up during the available times!
Contact us for the zoom link. </p>

<p>All of these details are on our Get Help page. </p>

<h5 class="mx-auto"><a class="btn  btn-outline-primary text-decoration-none" href="https://portal.osg-htc.org/documentation/support_and_training/support/getting-help-from-RCFs/">Get Help</a></h5>

<br>

<h3 id="training">Training</h3>

<p>The Facilitation Team offers monthly training sessions for the HTC
community. Upcoming training events are announced via the OSPool users email
list and are listed on our monthly training page. The Team also organizes 
and hosts an annual in-person summer school, the OSG School. </p>

<h5 class="mx-auto"><a class="btn  btn-outline-primary text-decoration-none" href="https://portal.osg-htc.org/documentation/support_and_training/training/osgusertraining/">Monthly Training</a></h5>

<h5 class="mx-auto"><a class="btn  btn-outline-primary text-decoration-none" href="https://osg-htc.org/community/school.html">Annual OSG School</a></h5>

<br>

<h3 id="other-events">Other Events</h3>

<p>Are you hosting an event where the audience might benefit from our services? 
We are happy to give guest presentations or trainings for your organization 
or event. Let us know at support@osg-htc.org</p>