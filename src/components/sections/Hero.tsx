import { motion } from 'framer-motion'
import { heroContent } from '../../data/hero'
import { useEffect, useRef } from 'react'

const HERO_VIDEO =
  'https://cdn.coverr.co/videos/coverr-pouring-a-cocktail-5173/1080p.mp4'

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

export function Hero() {
  const { heading, subtitle } = heroContent
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("El autoplay fue bloqueado o el video está cargando: ", error);
      });
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-bg">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={HERO_VIDEO}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-24 px-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white leading-tight tracking-tight"
            variants={itemVariants}
          >
            {heading}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl font-body text-white/70 max-w-xl"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div className="mt-10" variants={itemVariants}>
            <a
              href="#services"
              className="border border-[#d4af37] text-[#d4af37] bg-transparent hover:bg-[#d4af37] hover:text-black transition-all duration-300 rounded-none px-8 py-3 uppercase tracking-widest text-xs font-semibold inline-block"
            >
              Ver Nuestras Propuestas
            </a>
          </motion.div>
        </div>

        <motion.div
          className="bg-black/40 backdrop-blur-md border border-white/10 rounded-none p-8"
          variants={itemVariants}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="hero-nombre" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                Nombre Completo
              </label>
              <input
                id="hero-nombre"
                type="text"
                className="w-full border-white/10 focus:border-[#d4af37] text-white bg-transparent rounded-none px-0 py-2 border-b border-t-0 border-l-0 border-r-0 outline-none"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label htmlFor="hero-email" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                Email
              </label>
              <input
                id="hero-email"
                type="email"
                className="w-full border-white/10 focus:border-[#d4af37] text-white bg-transparent rounded-none px-0 py-2 border-b border-t-0 border-l-0 border-r-0 outline-none"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="hero-evento" className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                Tipo de Evento
              </label>
              <input
                id="hero-evento"
                type="text"
                className="w-full border-white/10 focus:border-[#d4af37] text-white bg-transparent rounded-none px-0 py-2 border-b border-t-0 border-l-0 border-r-0 outline-none"
                placeholder="Corporativo, boda, cumpleaños..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#d4af37] text-black uppercase tracking-widest text-xs font-bold py-3 w-full"
            >
              Enviar Solicitud
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
