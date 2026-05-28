import { Container } from '../ui'
import { SectionTitle } from '../ui'
import { galleryItems, getGalleryGrid } from '../../data/gallery'

export function Gallery() {
  return (
    <section className="relative py-24 overflow-hidden bg-bg">
      <Container>
        <SectionTitle>La Experiencia</SectionTitle>
        <p className="mt-4 text-text/60 max-w-2xl">
          Momentos únicos capturados en cada evento. Imágenes de nuestras barra premium, coctelería de autor y atmósferas nocturnas.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item) => {
            const grid = getGalleryGrid(item)

            return (
              <div
                key={item.id}
                className={`${grid.col} ${grid.height} relative overflow-hidden rounded-xl border border-border-subtle group`}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
