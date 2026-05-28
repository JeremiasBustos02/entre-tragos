import { servicesContent } from '../../data/services'

export function Services() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-heading tracking-[0.3em] text-[#d4af37] uppercase">
          {servicesContent.title}
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {servicesContent.items.map((service, index) => (
            <article
              key={service.id}
              className="aspect-square flex flex-col justify-between p-10 border-r border-b border-white/10 bg-transparent hover:bg-white/[0.02] transition-colors duration-500 rounded-none relative overflow-hidden"
            >
              <span className="text-xs font-mono text-[#d4af37]/60 tracking-widest">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-heading text-white">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-white/60">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
