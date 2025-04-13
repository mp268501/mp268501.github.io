---
title: "Influences"
layout: page
---
<h1>Influences</h1>

<ul>
  {% for influence in site.influences %}
    <li>
      <a href="{{ influence.url }}">{{ influence.title }}</a>
    </li>
  {% endfor %}
</ul>