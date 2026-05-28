export function Footer() {
  return (
    <footer className="bg-bg border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xl font-heading tracking-wide text-text">
            Entre<span className="text-accent">Tragos</span>
          </div>

          <div className="flex items-center gap-6 text-text/70 text-sm">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5491155550199"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-text/40 text-xs">
          &copy; {new Date().getFullYear()} EntreTragos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
