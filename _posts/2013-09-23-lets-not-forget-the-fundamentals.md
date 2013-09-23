---
layout: post
title: Let's not forget the fundamentals
category: Web
---

Everyday on Twitter, I get swamped with tweets about new web technology, new techniques, how to build flashy layouts etc. While it's great that there are so many exciting things happening, I find that fundamentals like accessibility, performance and progressive enhancements often get forgotten and lost. In fact, they are things we should always be considering. Yes, to do a superb job in these areas can require a bit of work, but there are definitely a lot of simple things we can do to make a difference:

* Consider semantics and use the [correct HTML tags](http://www.karlgroves.com/2013/05/14/links-are-not-buttons-neither-are-divs-and-spans/)
* Use [ARIA landmark roles](http://blog.paciellogroup.com/2013/02/using-wai-aria-landmarks-2013/)
* Consider what content the screen readers will read out: will you need to hide content offscreen so what gets read out will make more sense to screen reader users?
* Have a fallback for when JavaScript is disabled. Admittedly not all no-JavaScript fallback solutions are easy to implement, but simple things like ensuring content is displayed when JavaScript is disabled can be done quite easily
* Consider page weight especially if you have a lot of images. Even more so if you need to serve high-res images for retina screens

Let's keep pushing the web forward, but also let's not forget the fundamentals.

---------------------------------------

Related readings:

* [Progressive enhancement is still important](http://jakearchibald.com/2013/progressive-enhancement-still-important/)
* [Design and Development: The Yin and Yang of Web Accessibility](http://simplyaccessible.com/article/both/)
