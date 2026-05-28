---
name: react-architecture
description: React scalable architecture skill
---

# React Architecture Skill

## Goal

Maintain scalable and maintainable React architecture.

---

# Component Structure

* Keep components modular.
* Avoid giant monolithic components.
* Prefer composition over duplication.
* Extract repeated UI patterns.
* Separate layout from logic.

---

# File Organization

* Shared UI -> components/ui
* Sections -> components/sections
* Layout -> components/layout
* Hooks -> hooks
* Static content -> data
* Utilities -> utils

---

# TypeScript

* Use strict typing.
* Never use any.
* Explicitly type props.
* Reuse shared types.

---

# React Rules

* Functional components only.
* Keep JSX clean and readable.
* Avoid deeply nested markup.
* Extract reusable hooks when needed.

---

# State Management

* Keep state local whenever possible.
* Avoid unnecessary abstractions.
* Avoid prop drilling when avoidable.

---

# Performance

* Avoid unnecessary re-renders.
* Memoize only when needed.
* Lazy load heavy sections when appropriate.

# Additional Architecture Rules

## UI Primitives

Always reuse base UI components whenever possible.

Shared primitives should include:

* Button
* Container
* Section
* SectionTitle
* Card

Avoid creating slightly different duplicated components.

---

## Layout Consistency

Maintain consistent:

* spacing
* border radius
* typography scale
* section padding
* container widths

---

## Content Separation

Do not hardcode large text content directly inside components.

Move reusable content into `/data`.

---

## Motion Architecture

Centralize reusable animation variants inside `/lib/motion.ts`.

Avoid duplicating motion configurations across components.

---

## Styling Rules

Avoid massive Tailwind className blocks.

Extract repeated patterns into reusable utilities or components.

---

## Sections

Landing sections should remain isolated and self-contained.

Each section should:

* own its layout
* remain reusable
* avoid leaking styles

---

## Responsiveness

Responsive behavior must be intentional.

Avoid patching layouts with random breakpoint fixes.
