import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Gallery } from './components/sections/Gallery'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
    </>
  )
}

export default App
