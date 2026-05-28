import { Container } from '../ui'
import { SectionTitle } from '../ui'
import { servicesContent } from '../../data/services'

export function Services() {
  return (
    <section className="relative py-24 overflow-hidden bg-bg">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="max-w-2xl">
          <SectionTitle>{servicesContent.title}</SectionTitle>
          <p className="mt-4 text-text/60">
            Experiencias de barra diseñadas para elevar cada momento con estilo y precisión.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.items.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-b from-surface to-bg/40 p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-accent/40 hover:shadow-soft"
            >
              <div className="overflow-hidden rounded-xl border border-border-subtle/60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-6 text-xl font-heading text-text">
                {service.title}
              </h3>
              <p className="mt-3 text-text/60">
                {service.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-text/60">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/60 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
