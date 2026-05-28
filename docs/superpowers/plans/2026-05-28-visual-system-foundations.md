# Visual System Foundations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build visual foundations (tokens, globals, animations, theme mirror), remove Vite defaults, and set a single global entrypoint.
**Architecture:** CSS variables are the visual source of truth; `globals.css` imports `variables.css` + `animations.css`; `theme.ts` mirrors key tokens for TS usage; Vite defaults removed; `main.tsx` imports only `globals.css`.
**Tech Stack:** React 19, TypeScript 6, Vite 8, CSS.

---

## File Structure

- Modify: `src/styles/variables.css`
- Modify: `src/styles/globals.css`
- Modify: `src/styles/animations.css`
- Modify: `src/constants/theme.ts`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`
- Delete: `src/index.css`, `src/App.css`

---

## Workflow

- No automatic commits per task.
- After each task: stop, show diff/summary, wait for user approval before continuing.
- User handles all commits manually.

---

### Task 1: Tokens (`src/styles/variables.css`)

**Files:**
- Modify: `src/styles/variables.css`

- [ ] **Step 1: Replace file content**

```css
/* Tokens represent global design decisions, not component styles. */
:root {
  --font-heading: "Fraunces", "Cormorant Garamond", serif;
  --font-body: "Manrope", "Source Sans 3", sans-serif;

  --text-h1: clamp(2.75rem, 6vw, 4.75rem);
  --text-h2: clamp(2rem, 4.5vw, 3.25rem);
  --text-h3: clamp(1.5rem, 3vw, 2.25rem);
  --text-h4: clamp(1.25rem, 2.4vw, 1.75rem);
  --text-body: clamp(1rem, 1.1vw, 1.125rem);
  --text-small: clamp(0.875rem, 0.9vw, 0.95rem);

  --lh-heading: 1.15;
  --lh-body: 1.6;

  --color-bg: #0b0a0d;
  --color-surface: #131116;
  --color-elevated: #1b1820;
  --color-text: #f6f1ea;
  --color-text-muted: #c4bcb1;
  --color-accent: #d1a56b;
  --color-accent-hover: #e1b77d;
  --color-border-subtle: rgba(246, 241, 234, 0.12);
  --color-focus-ring: rgba(209, 165, 107, 0.65);
  --color-disabled: rgba(246, 241, 234, 0.45);

  --overlay-soft: 0.2;
  --overlay-medium: 0.45;
  --overlay-strong: 0.65;

  --space-xs: clamp(0.5rem, 1vw, 0.75rem);
  --space-sm: clamp(0.75rem, 1.5vw, 1rem);
  --space-md: clamp(1rem, 2vw, 1.5rem);
  --space-lg: clamp(1.5rem, 3vw, 2.5rem);

  --section-pad: clamp(3.5rem, 8vw, 7rem);
  --section-pad-tight: clamp(2.5rem, 6vw, 5rem);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;

  --shadow-sm: 0 8px 24px rgba(5, 4, 8, 0.32);
  --shadow-md: 0 18px 48px rgba(5, 4, 8, 0.4);

  --container-max: 72rem;
  --container-narrow: 58rem;
  --container-pad: clamp(1.25rem, 4vw, 2.5rem);

  --blur-sm: 6px;
  --blur-md: 12px;
  --blur-lg: 24px;

  --duration-xs: 120ms;
  --duration-sm: 180ms;
  --duration-md: 280ms;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --opacity-disabled: 0.6;

  --z-base: 0;
  --z-header: 10;
  --z-overlay: 40;
  --z-modal: 60;
  --z-toast: 80;
}
```

---

### Task 2: Globals (`src/styles/globals.css`)

**Files:**
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Replace file content**

```css
/* Fonts are loaded via index.html or self-hosted later; no @import here. */
@import "./variables.css";
@import "./animations.css";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color-scheme: dark;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100svh;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
  scrollbar-width: thin;
  scrollbar-color: var(--color-border-subtle) transparent;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
  color: inherit;
  letter-spacing: inherit;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 500;
  line-height: var(--lh-heading);
  color: var(--color-text);
}

h1 {
  font-size: var(--text-h1);
}

h2 {
  font-size: var(--text-h2);
}

h3 {
  font-size: var(--text-h3);
}

h4 {
  font-size: var(--text-h4);
}

p {
  margin: 0;
}

small {
  font-size: var(--text-small);
}

:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 3px;
}

::selection {
  background: rgba(209, 165, 107, 0.25);
  color: var(--color-text);
}

*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--color-border-subtle);
  border-radius: 999px;
  border: 3px solid transparent;
  background-clip: content-box;
}

#root {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}
```

---

### Task 3: Animations (`src/styles/animations.css`)

**Files:**
- Modify: `src/styles/animations.css`

- [ ] **Step 1: Replace file content**

```css
/* Global helper animations only. Complex sequences belong in motion/react. */
/* Use shimmer only for rare highlights; avoid loops. */

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes soft-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-fade-in {
  animation: fade-in var(--duration-md) var(--ease-out) both;
}

.animate-fade-up {
  animation: fade-up var(--duration-md) var(--ease-out) both;
}

.animate-float {
  animation: soft-float 7s var(--ease-in-out) infinite;
}

.animate-shimmer {
  background-size: 200% 100%;
  animation: shimmer 2.6s var(--ease-in-out) 1;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .animate-fade-in,
  .animate-fade-up,
  .animate-float,
  .animate-shimmer {
    animation: none !important;
  }
}
```

---

### Task 4: Theme Mirror (`src/constants/theme.ts`)

**Files:**
- Modify: `src/constants/theme.ts`

- [ ] **Step 1: Replace file content**

```ts
export const theme = {
  colors: {
    bg: 'var(--color-bg)',
    surface: 'var(--color-surface)',
    elevated: 'var(--color-elevated)',
    text: 'var(--color-text)',
    textMuted: 'var(--color-text-muted)',
    accent: 'var(--color-accent)',
    accentHover: 'var(--color-accent-hover)',
    borderSubtle: 'var(--color-border-subtle)',
    focusRing: 'var(--color-focus-ring)',
    overlay: 'var(--overlay-medium)',
  },
  spacing: {
    section: 'var(--section-pad)',
    sectionTight: 'var(--section-pad-tight)',
    containerPad: 'var(--container-pad)',
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
  },
  shadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
  },
  duration: {
    xs: 'var(--duration-xs)',
    sm: 'var(--duration-sm)',
    md: 'var(--duration-md)',
  },
  easing: {
    out: 'var(--ease-out)',
    inOut: 'var(--ease-in-out)',
  },
  container: {
    max: 'var(--container-max)',
    narrow: 'var(--container-narrow)',
  },
} as const

export type Theme = typeof theme
```

---

### Task 5: Vite CSS Cleanup (delete legacy files)

**Files:**
- Delete: `src/index.css`
- Delete: `src/App.css`

- [ ] **Step 1: Confirm no imports remain (after Task 6 Step 1–2)**

Run: `rg "index\\.css|App\\.css" src`
Expected: no matches.

- [ ] **Step 2: Delete legacy files**

```bash
git rm src/index.css src/App.css
```

---

### Task 6: Update Imports + Verification

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Update `src/main.tsx`**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 2: Remove `App.css` import in `src/App.tsx` (no JSX changes)**

```tsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
```

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: PASS.

- [ ] **Step 4: Visual checks (dev server)**

Run: `npm run dev`

Checks:
- Background uses `--color-bg`.
- Headings use serif, body uses sans.
- Selection tint is subtle.
- `:focus-visible` visible when tabbing through links/buttons.
- Responsive check at ~375px width (spacing and text remain legible).
- Reduced motion: emulate `prefers-reduced-motion: reduce` and confirm animations are disabled + `scroll-behavior` becomes `auto`.
