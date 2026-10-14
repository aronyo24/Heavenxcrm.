import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import TrustStrip from './sections/TrustStrip'
import Problem from './sections/Problem'
import Features from './sections/Features'
import Showcase from './sections/Showcase'
import Process from './sections/Process'
import Roles from './sections/Roles'
import Comparison from './sections/Comparison'
import Plans from './sections/Plans'
import Faq from './sections/Faq'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Features />
        <Showcase />
        <Process />
        <Roles />
        <Comparison />
        <Plans />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
