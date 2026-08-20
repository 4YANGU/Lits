import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Values from './components/Values'
import Impact from './components/Impact'
import Work from './components/Work'
import CTABand from './components/CTABand'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-ink-950 font-sans text-cream-50">
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      {/* Film grain */}
      <div className="noise" aria-hidden />

      {/* Scroll progress — a thread of light */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[95] h-[3px] origin-left bg-gradient-to-r from-flame-600 via-flame-400 to-flame-200"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <main>
        <Hero ready={!loading} />
        <Marquee />
        <About />
        <Values />
        <Impact />
        <Work />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
