---
name: frontend-ui
description: Premium frontend UI and UX skill
---

# Frontend UI Skill

## Goal

Create premium modern interfaces with excellent visual hierarchy and responsive UX.

## UI Philosophy

* Prioritize elegance and clarity.
* Interfaces should feel handcrafted.
* Focus on emotional visual impact.
* Maintain a premium but approachable aesthetic.
* Avoid generic AI-looking layouts.

## Layout Rules

* Use generous whitespace.
* Maintain clean spacing between sections.
* Prefer asymmetrical but balanced layouts.
* Avoid overcrowded sections.
* Mobile-first design is mandatory.

## Visual Style

The interface should feel:

* modern
* elegant
* cinematic
* nightlife-inspired
* immersive

Avoid:

* childish visuals
* excessive gradients
* overly colorful palettes
* generic SaaS aesthetics
* flashy effects

## Components

* Reuse UI primitives whenever possible.
* Maintain consistent border radius and spacing.
* Prefer subtle shadows.
* Keep hover states smooth and minimal.

## Typography

* Strong visual hierarchy.
* Large impactful headings.
* Readable body text.
* Avoid overly long paragraphs.

## Animations

* Use motion sparingly.
* Prioritize smoothness over quantity.
* Avoid distracting animations.
* Entrance animations should feel subtle and premium.

Use motion/react responsibly.

## Responsive Design

* All sections must work perfectly on mobile.
* Avoid desktop-only layouts.
* Ensure comfortable spacing on smaller screens.

## Accessibility

* Maintain sufficient contrast.
* Ensure interactive elements are accessible.
* Use semantic HTML whenever possible.

---

# IMPORTANT

## STYLING ARCHITECTURE (HYBRID APPROACH)

* Primary: Use Tailwind CSS utility classes for layout, spacing, typography, and colors directly in .tsx files.

* Secondary: You CAN create specific standard .css files (e.g., Hero.css) ONLY for complex styling that Tailwind handles poorly. This includes: complex keyframe animations, advanced clip-path, intricate gradients, or heavy use of pseudo-elements (::before/::after).

*  Rule: DO NOT use CSS Modules (.module.css). Import specific CSS files directly into the component (e.g., import './Hero.css';).

*  Always use our Tailwind config tokens (like var(--color-bg)) inside those custom CSS files to maintain consistency.