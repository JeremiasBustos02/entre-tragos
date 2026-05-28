# AGENTS.md — Reglas de Producción Estrictas

## 1. Workflow de Git & Commits
* **PROHIBIDO los commits automáticos.** El usuario maneja los commits manualmente.
* **Skill de Git (Git Management):** Cada vez que completes una tarea técnica, debés detenerte, mostrar el `git status` o el resumen de archivos modificados mediante texto y esperar la aprobación explícita del usuario.
* **Scope:** Solo debés modificar archivos que pertenezcan a la feature o tarea actual. No toques configuraciones globales sin permiso.

## 2. Arquitectura de Estilos (Tailwind Híbrido)
* **Stack Principal:** Usamos **Tailwind CSS v3** de forma directa en los archivos `.tsx`.
* **Variables del Sistema:** Debés usar EXCLUSIVAMENTE los tokens personalizados definidos en `tailwind.config.js` (`bg-bg`, `text-text`, `text-accent`, `bg-surface`, `bg-elevated`, `shadow-glow`). PROHIBIDO inventar colores hexadecimales sueltos en el código si ya existen en la configuración.
* **Archivos CSS Específicos:** Podés crear archivos `.css` estándar (ej: `Hero.css`, `Services.css`) únicamente para: keyframes de animación muy complejos, gradientes interactivos, `clip-path` avanzados o pseudo-elementos (`::before`). IMPORTALOS directamente en el `.tsx`.
* **PROHIBIDO el uso de CSS Modules (`.module.css`).**

## 3. Filosofía de Código y React
* TypeScript estricto. **PROHIBIDO el uso de `any`**. Tipar explícitamente todas las Props y Retornos.
* Componentes modulares y limpios (idealmente menores a 150 líneas).
* Separación de Contenido: No hardcodear textos largos dentro de los componentes JSX. Todo el contenido literario (títulos, descripciones, copys) debe vivir en archivos dedicados dentro de `/data` (ej: `src/data/services.ts`).