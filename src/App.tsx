import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Gallery } from './components/sections/Gallery'
import { Cocktails } from './components/sections/Cocktails'
import { Contact } from './components/sections/Contact'
import { Faq } from './components/sections/Faq'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/ui/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Cocktails />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
