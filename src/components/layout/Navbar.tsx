import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-heading font-bold tracking-wide text-text hover:text-accent transition-colors duration-500">
              Entre<span className="text-accent">Tragos</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#servicios" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm font-medium">Servicios</a>
              <a href="#experiencia" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm font-medium">La Experiencia</a>
              <a href="#galeria" className="text-text-muted hover:text-accent transition-colors duration-300 text-sm font-medium">Galería</a>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#contacto"
              className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-bg transition-all duration-500 active:scale-95 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-glow"
            >
              Cotizar Evento
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-accent active:scale-95 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border-subtle animate-fade-in shadow-soft">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#servicios" className="block px-3 py-3 rounded-md text-base font-medium text-text-muted hover:text-accent hover:bg-elevated active:scale-[0.98] transition-all duration-300">Servicios</a>
            <a href="#experiencia" className="block px-3 py-3 rounded-md text-base font-medium text-text-muted hover:text-accent hover:bg-elevated active:scale-[0.98] transition-all duration-300">La Experiencia</a>
            <a href="#galeria" className="block px-3 py-3 rounded-md text-base font-medium text-text-muted hover:text-accent hover:bg-elevated active:scale-[0.98] transition-all duration-300">Galería</a>
            <a
              href="#contacto"
              className="block w-full text-center mt-4 px-3 py-3 rounded-md text-base font-bold text-bg bg-accent hover:bg-accent-hover active:scale-[0.98] transition-all duration-500 shadow-glow"
            >
              Cotizar Evento
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
