---
title: "GSAP Animations: From Good to Extraordinary"
excerpt: "Master GSAP ScrollTrigger and create animations that elevate user experience without overwhelming."
author: "Marcus Thompson"
date: 2024-01-10
category: "development"
heroImage: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200"
tags: ["gsap", "animation", "javascript"]
featured: true
readTime: 12
---

GSAP (GreenSock Animation Platform) is the gold standard for web animation. Here's how to use it effectively.

## Why GSAP?

Unlike CSS animations, GSAP provides precise control, excellent performance, and a powerful sequencing system through its Timeline feature.

## The Basics

```javascript
gsap.from('.element', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'power4.out'
});
```

## ScrollTrigger Magic

ScrollTrigger transforms static pages into dynamic experiences:

```javascript
gsap.from('.section', {
  scrollTrigger: {
    trigger: '.section',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 1
  },
  y: 100,
  opacity: 0
});
```

## Best Practices

1. **Use appropriate easing** - `power4.out` for entrances, `power2.inOut` for persistent animations
2. **Be conservative** - Not everything needs to animate
3. **Test on devices** - Performance matters on mobile
4. **Respect user preferences** - Check for `prefers-reduced-motion`

## The AIVORIC Approach

We use GSAP sparingly but strategically. Every animation serves a purpose—guiding attention, creating delight, or reinforcing hierarchy.
