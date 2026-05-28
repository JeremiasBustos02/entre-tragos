import { motion } from 'framer-motion'
import { Container } from '../ui'

const EVENT_TYPES = ['Corporativo', 'Boda', 'Cumpleaños', 'Otro'] as const

const inputBase =
  'w-full bg-bg/50 border border-border-subtle text-text rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent/20'

export function Contact() {
  return (
    <section className="relative py-24 overflow-hidden bg-bg">
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading text-text">
              Hablemos de tu próximo evento
            </h2>
            <p className="mt-4 text-text/60 leading-relaxed">
              Contanos qué tenés en mente y te armamos una propuesta de coctelería a medida. Respuesta garantizada en menos de 24 horas.
            </p>

            <div className="mt-10 space-y-3 text-text/70 text-sm">
              <p>hola@entretragos.com</p>
              <p>+54 11 5555 0199</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>

          <motion.div
            className="rounded-2xl border border-border-subtle bg-gradient-to-b from-surface to-bg/40 p-8 shadow-soft"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form className="space-y-5">
              <div>
                <label htmlFor="nombre" className="text-text/60 font-medium mb-1.5 block text-sm">
                  Nombre Completo
                </label>
                <input id="nombre" type="text" className={inputBase} placeholder="Tu nombre" required />
              </div>

              <div>
                <label htmlFor="tipo" className="text-text/60 font-medium mb-1.5 block text-sm">
                  Tipo de Evento
                </label>
                <select id="tipo" className={inputBase} required>
                  <option value="" disabled selected className="text-text/40">Seleccioná una opción</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t} className="text-text">{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="invitados" className="text-text/60 font-medium mb-1.5 block text-sm">
                  Cantidad de Invitados
                </label>
                <input id="invitados" type="number" className={inputBase} placeholder="Ej: 100" required />
              </div>

              <div>
                <label htmlFor="fecha" className="text-text/60 font-medium mb-1.5 block text-sm">
                  Fecha del Evento
                </label>
                <input id="fecha" type="date" className={inputBase} required />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-bg font-bold rounded-full px-6 py-3 transition-all duration-500 active:scale-95 hover:shadow-glow"
              >
                Cotizar mi Evento
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
