# Visual System Foundations — Design Spec

> **Objetivo:** Crear un sistema visual premium, nocturno y elegante, mobile‑first, simple y escalable. Base consistente para toda la landing.

**Alcance:**
- Reemplazar completamente estilos default de Vite.
- Centralizar la base visual en `src/styles/variables.css`, `src/styles/globals.css`, `src/styles/animations.css` y `src/constants/theme.ts`.
- `globals.css` como único entrypoint global, importando internamente variables + animations.

**No‑objetivos:**
- No crear sistema de utilidades globales.
- No introducir tooling de generación de tokens.
- No animaciones pesadas ni cyberpunk / neon.

---

## Arquitectura de archivos

### `src/styles/variables.css`

Solo `:root` + tokens.

> **Comentario al inicio:** "Los tokens deben representar decisiones de diseño globales y no estilos específicos de secciones o componentes."

**Tokens previstos:**

- **Color:** `--color-bg`, `--color-surface`, `--color-elevated`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-hover`, `--color-border-subtle`, `--color-focus-ring`, `--overlay-soft/medium/strong`.
- **Tipografía:** `--font-heading` (serif), `--font-body` (sans), `--text-h1..h4` (clamp), `--text-body`, `--text-small`, `--lh-heading`, `--lh-body`.
- **Spacing:** escala corta + `--space-xs/sm/md/lg`, `--section-pad`, `--section-pad-tight` (clamp).
- **Radii:** `--radius-sm/md/lg/xl`.
- **Sombras:** `--shadow-sm`, `--shadow-md` (muy suaves).
- **Containers:** `--container-max`, `--container-narrow`, `--container-pad`.
- **Blur:** `--blur-sm/md/lg`.
- **Transitions:** `--duration-xs/sm/md`, `--ease-out`, `--ease-in-out`.
- **Disabled:** `--color-disabled`, `--opacity-disabled`.

### `src/styles/globals.css`

- Importa `variables.css` + `animations.css`.
- Reset mínimo + defaults de `html/body`.
- `html` con `color-scheme: dark`, `scroll-behavior: smooth`.
- `body` con `overflow-x: clip`, fondo/texto por tokens, `text-rendering`, `-webkit-font-smoothing`.
- Tipografía base semántica (sin resets agresivos).
- `:focus-visible` accesible sin remover outline global.
- `::selection` elegante.
- Scrollbar sutil (sin "showcase UI").
- `#root` con `min-height: 100svh`, `display: flex`, `flex-direction: column`.

### `src/styles/animations.css`

> **Comentario al inicio:** "Animaciones CSS globales mínimas; composiciones complejas se manejan con motion/react cuando haga falta."

- Keyframes mínimos: `fade-in`, `fade-up`, `soft-float`, `shimmer` (muy sutil, sin loops agresivos).
- Clases reusables con tokens de duración/easing.
- `prefers-reduced-motion` para desactivar.

### `src/constants/theme.ts`

Mirror parcial de tokens clave (no replicar todo `variables.css`):

```ts
colors: {
  bg, surface, elevated, text, textMuted,
  accent, accentHover, borderSubtle, focusRing, overlay
}
spacing: { section, sectionTight, containerPad }
radius: { sm, md, lg, xl }
shadow: { sm, md }
duration: { xs, sm, md }
easing: { out, inOut }
container: { max, narrow }
```

### Imports

- `src/main.tsx` solo importa `src/styles/globals.css`.
- `globals.css` importa internamente `variables.css` y `animations.css`.

---

## Criterios de calidad

- Visual premium nocturno, cálido, cinematográfico.
- Spacing corto, coherente.
- Tipografía con serif en headings y sans en body.
- Animaciones sutiles y discretas.
- Código simple, sin sobreingeniería.
- Mobile‑first desde el inicio (clamp() en tamaños clave).
- Accesibilidad desde la base (focus-visible, reduced-motion, selection).
