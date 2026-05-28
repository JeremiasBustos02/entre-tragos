import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '../ui'
import { SectionTitle } from '../ui'
import { galleryItems, getGalleryGrid } from '../../data/gallery'

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 20,
    },
  },
}

export function Gallery() {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 overflow-hidden bg-bg">
      <Container>
        <SectionTitle>La Experiencia</SectionTitle>
        <p className="mt-4 text-text/60 max-w-2xl">
          Momentos únicos capturados en cada evento. Imágenes de nuestras barra premium, coctelería de autor y atmósferas nocturnas.
        </p>

        <motion.div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {galleryItems.map((item) => {
            const grid = getGalleryGrid(item)

            return (
              <motion.div
                key={item.id}
                className={`${grid.col} ${grid.height} relative overflow-hidden rounded-xl border border-border-subtle group`}
                variants={cardVariants}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
