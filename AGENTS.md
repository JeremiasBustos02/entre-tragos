# AGENTS.md

# Project Context

This project is a premium landing page for a mobile bar service focused on social events.

The website must feel:

* festive
* elegant
* modern
* warm
* social
* premium but approachable

The goal is high conversion and emotional impact.

Users should immediately imagine the atmosphere of the event.

Avoid corporate or startup-like aesthetics.

---

# Core Philosophy

* Prioritize simplicity and readability.
* Avoid overengineering.
* Prefer clean scalable architecture.
* Components must remain modular and reusable.
* Maintain clear separation between logic, layout, and content.
* Prioritize user experience over technical complexity.

---

# Frontend Rules

* Use strict TypeScript.
* Never use `any`.
* Explicitly type all props.
* Prefer composition over duplication.
* Avoid giant components.
* Components should ideally remain below ~150 lines.
* Extract repeated logic into hooks.
* Keep JSX clean and readable.
* Avoid deeply nested markup.

---

# Architecture

## Folder Structure

* Shared reusable UI -> `components/ui`
* Landing sections -> `components/sections`
* Layout components -> `components/layout`
* Static content -> `data`
* Utility functions -> `utils`
* Shared types -> `types`
* Global constants -> `constants`

## Content Separation

Do not hardcode large text content inside components.

Move reusable content into `/data`.

---

# Design System

## Visual Direction

The UI should feel:

* premium
* elegant
* nightlife-inspired
* cinematic
* modern
* immersive

Avoid:

* childish visuals
* excessive gradients
* flashy neon cyberpunk aesthetics
* generic SaaS layouts
* overcrowded sections

## Layout

* Use generous whitespace.
* Maintain strong visual hierarchy.
* Use modern spacing.
* Mobile-first design is mandatory.
* Sections should breathe visually.

## Components

* Prefer reusable UI primitives.
* Keep cards and sections visually consistent.
* Use subtle hover states.
* Use smooth transitions only when necessary.

---

# Animations

* Use subtle animations only.
* Prioritize smoothness and elegance.
* Avoid excessive motion.
* Avoid distracting entrance animations.
* Animations should enhance premium perception.

Use motion/react responsibly.

---

# SEO

* Use semantic HTML structure.
* Only one `h1` per page.
* Use accessible markup.
* Optimize images.
* Prioritize Lighthouse performance.
* Ensure responsive behavior across devices.

---

# Accessibility

* All interactive elements must be accessible.
* Buttons must have proper labels.
* Maintain sufficient contrast.
* Keyboard navigation should work correctly.

---

# Performance

* Lazy load heavy assets when appropriate.
* Avoid unnecessary re-renders.
* Optimize images and videos.
* Keep bundle size minimal.
* Avoid unnecessary dependencies.

---

# Code Style

## Naming

* PascalCase for components
* camelCase for variables and functions
* kebab-case for CSS files

## React

* Functional components only
* Prefer named exports when appropriate
* Keep hooks isolated and reusable

---

# Styling

* Use Tailwind utility classes cleanly.
* Avoid massive className blocks.
* Extract reusable patterns when needed.
* Avoid inline styles unless absolutely necessary.

---

# Forbidden Patterns

Avoid:

* massive monolithic components
* duplicated layouts
* inline hardcoded content everywhere
* unnecessary wrappers
* overcomplicated abstractions
* excessive visual effects
* random inconsistent spacing
* generic AI-looking layouts

---

# Expected Outcome

The final website should feel handcrafted, modern, elegant, emotional, and conversion-oriented.
