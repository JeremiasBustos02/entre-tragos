---
name: frontend-ui
description: Alta ingeniería de UI/UX premium para interfaces nocturnas, sofisticadas y de conversión.
---

# Skill de Interfases Premium (Tailwind Avanzado)

## 1. Filosofía Visual: "Nightlife Elitista & High-End"
El diseño debe evocar la atmósfera de un bar de alta gama a la noche: misterioso, elegante, cálido y exclusivo. Evitar layouts planos, grises aburridos o contrastes crudos de texto blanco puro sobre fondo negro puro.

## 2. Reglas Técnicas de Tailwind para Elevar el Diseño

### A. Paleta Estricta y Contraste Jerárquico
* **Fondos:** El fondo base es `bg-bg`. Las secciones secundarias o contenedores deben usar `bg-surface` o `bg-elevated`.
* **Texto Muted es Mandatorio:** El error principal del diseño amateur es usar texto brillante en todos lados. Las descripciones, etiquetas secundarias y textos de apoyo DEBEN usar `text-text-muted` (u opacidades como `text-text/60`). El blanco brillante (`text-text`) queda reservado ÚNICAMENTE para títulos y palabras clave.

### B. Técnicas de Profundidad (Efecto "Glow" y Luces de Barra)
Para que la interfaz no se vea pobre o plana, debés aplicar capas de iluminación sutiles:
* **Bordes Premium:** Las tarjetas y componentes deben usar bordes sutiles: `border border-border-subtle` o `border-text/10`.
* **Gradientes de Fondo de Tarjeta:** En lugar de fondos planos, las tarjetas premium usan gradientes muy tenues: `bg-gradient-to-b from-surface to-bg/40`.
* **Luces de Fondo (Ambience):** Para emular las luces de una barra premium, usá elementos absolutos con desenfoque extremo detrás del contenido. Ejemplo: `<div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />`.

### C. Tarjetas Interactivas con Transiciones Orgánicas
Las tarjetas de servicios o características deben sentirse vivas al tacto:
* **Hover State Obligatorio:** Al hacer hover, una tarjeta debe mutar suavemente: `transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft`.
* **Efecto Reflejo (Shimmer/Glow):** Podés agregar un borde superior sutil que brille con el color `accent` solo al hacer hover.

### D. Botones con Identidad
* El botón `primary` debe ser una joya visual: `bg-accent text-bg font-bold tracking-wide transition-all duration-300 hover:bg-accent-hover active:scale-95 shadow-glow hover:shadow-[0_0_25px_rgba(209,165,107,0.35)]`.

## 3. Comportamiento en Mobile
* Mobile-first estricto: Nunca uses grillas de muchas columnas en móvil. Usá espaciados generosos (`py-16` a `py-24` en secciones) para que el contenido respire y se sienta premium, no amontonado.