export interface HeroContent {
  heading: string
  subtitle: string
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary: {
    label: string
    href: string
  }
}

export const heroContent: HeroContent = {
  heading: 'El Brindis que tu Evento Merece',
  subtitle: 'Coctelería premium para momentos que merecen ser celebrados.',
  ctaPrimary: {
    label: 'Cotizar Evento',
    href: '#contact',
  },
  ctaSecondary: {
    label: 'Ver Servicios',
    href: '#services',
  },
}
