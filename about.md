---
layout: page
title: About
description: AI Engineer at MoMo, based in Ho Chi Minh City.
permalink: /about/
---

I specialize in multi-agent systems, LLMs, agentic voice and production AI infrastructure.
My background is in Mechatronics Engineering at HCMUTE, and I moved into AI in 2022.

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
