---
name: frontend-ui
description: Premium high-end frontend UI/UX engineering with dark mode focus.
---

# Frontend UI & Design System Skill

## UI Philosophy: High-End Dark SaaS
Buscamos una estética sofisticada, nocturna y minimalista inspirada en la coctelería y eventos premium. No queremos un diseño plano ni aburrido, pero tampoco un cyberpunk neón chillón.

## Reglas de Diseño con Tailwind CSS

### 1. Manejo de Capas y Profundidad (Depths)
Para evitar que el diseño se vea plano ("pobre"), usá la jerarquía de contenedores del proyecto:
* **Fondo de la App:** `bg-bg` (#0b0a0d).
* **Tarjetas y Secciones Secundarias:** `bg-surface` o `bg-elevated` con bordes sutiles (`border border-border-subtle`).
* **Efecto de Luces (Glow):** Implementar sutiles resplandores o gradientes radiales oscuros de fondo usando `bg-gradient-to-tr` combinados con opacidades bajas (`/5`, `/10`) para simular la iluminación tenue de una barra premium.

### 2. Tarjetas Premium (Premium Cards)
Las tarjetas no deben ser cajas grises simples. Deben estructurarse así:
* Fondo sutil: `bg-surface/50 backdrop-blur-md`
* Bordes elegantes: `border border-border-subtle`
* Efecto Hover: Al hacer hover, aplicar una transición suave (`transition-all duration-300`) que aumente la opacidad del borde, eleve ligeramente la caja (`-translate-y-1`) y active un leve `shadow-glow`.

### 3. Tipografía y Textos
* **Headings (Títulos):** Siempre usar la fuente elegante (`font-heading`). Usar tracking ancho o sutil según amerite.
* **Contraste:** El texto principal usa `text-text`. Las descripciones secundarias DEBEN usar `text-text-muted` para generar contraste jerárquico. Si todo el texto brilla por igual, el diseño se ve amateur.

### 4. Botones y CTAs Interactivos
* Los botones principales deben tener la clase `shadow-glow` y transiciones refinadas de escala al hacer click (`active:scale-95`).