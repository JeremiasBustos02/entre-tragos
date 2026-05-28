import { motion } from 'framer-motion'
import { heroContent } from '../../data/hero'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1920&q=80'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.18,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 20 },
  },
}

const glowPulse = {
  animate: {
    opacity: [0.5, 1, 0.6],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut' as const,
    },
  },
}

export function Hero() {
  const { heading, subtitle, ctaPrimary, ctaSecondary } = heroContent

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"
        {...glowPulse}
      />
      <motion.div
        className="absolute bottom-1/3 -right-32 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"
        {...glowPulse}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg/90" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-text leading-tight tracking-tight mb-6"
          variants={itemVariants}
        >
          {heading}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-text/60 max-w-2xl mx-auto lg:mx-0 mb-10"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          variants={itemVariants}
        >
          <a
            href={ctaPrimary.href}
            className="bg-accent text-bg px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent-hover transition-all duration-500 active:scale-95 shadow-glow"
          >
            {ctaPrimary.label}
          </a>

          <a
            href={ctaSecondary.href}
            className="border border-border-subtle text-text px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-500 active:scale-95"
          >
            {ctaSecondary.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
