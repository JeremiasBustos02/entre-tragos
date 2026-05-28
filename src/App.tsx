import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './components/sections/Contact'
import { Faq } from './components/sections/Faq'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
