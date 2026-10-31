---
layout: page
title: About
description: AI Engineer at MoMo, based in Ho Chi Minh City.
permalink: /about/
---

I specialize in multi-agent systems, LLMs, real-time voice agents and production AI infrastructure.
I started building AI in 2021, alongside my Mechatronics Engineering degree at HCMUTE, and
have worked as an AI Engineer since 2022. Mechatronics gave me a hardware and embedded-systems
side that still shows: Assistant Core runs on ESP32 devices and smartwatches as well as in apps.

## Experience

{% include entry-list.html entries=site.data.experience.roles %}

## Education

{% include entry-list.html entries=site.data.experience.education %}

## Community

{% include entry-list.html entries=site.data.experience.community %}

## Skills & stack

<dl class="skills">
  {%- for skill in site.data.experience.skills %}
  <div class="skills__row">
    <dt>{{ skill.area }}</dt>
    <dd>{{ skill.items }}</dd>
  </div>
  {%- endfor %}
</dl>

## What I'm building

Outside of work I build [Assistant Core](https://assistantcore.com){:target="_blank" rel="noopener"},
a platform for deploying one AI assistant configuration everywhere: web, mobile widgets,
IoT devices, wearables and embedded surfaces. [See what it does]({{ '/#building' | relative_url }}).

## How I work

I care about **shipping real products**, not prototypes. My instinct is to go from zero to
production as fast as possible, then iterate on real user feedback. I tend to think in systems:
how components connect, where failures propagate, what the user actually experiences end to end.
I'm most energized when I can own a problem fully, from architecture to deployment.

## Get in touch

Reach out on [LinkedIn](https://www.linkedin.com/in/vectornguyen76){:target="_blank" rel="noopener"}
or by [email](mailto:{{ site.author.email }}) to collaborate.
