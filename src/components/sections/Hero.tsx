import { heroContent } from '../../data/hero'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1920&q=80'

export function Hero() {
  const { heading, subtitle, ctaPrimary, ctaSecondary } = heroContent

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg/80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-text leading-tight mb-6 animate-fade-in">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-up">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up">
          <a
            href={ctaPrimary.href}
            className="bg-accent text-bg px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent-hover transition-all duration-300 shadow-glow"
          >
            {ctaPrimary.label}
          </a>

          <a
            href={ctaSecondary.href}
            className="border border-border-subtle text-text px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300"
          >
            {ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
