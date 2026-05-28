import { cocktailsContent } from '../../data/cocktails'

export function Cocktails() {
  return (
    <section className="bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-heading text-white">
          {cocktailsContent.title}
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cocktailsContent.items.map((cocktail) => (
            <article key={cocktail.id} className="rounded-none border border-white/5">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cocktail.image}
                  alt={cocktail.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-heading text-white">
                  {cocktail.title}
                </h3>
                <p className="mt-2 text-xs font-body text-white/60">
                  {cocktail.description}
                </p>
                <p className="mt-1 font-mono text-xs tracking-widest text-[#d4af37]">
                  {cocktail.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
