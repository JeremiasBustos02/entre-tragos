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
