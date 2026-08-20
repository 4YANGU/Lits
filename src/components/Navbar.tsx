import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-cream-50/10 bg-ink-950/85 py-3 backdrop-blur-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="rounded-xl bg-white p-1.5 shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo.jpg"
                alt="Light in the Society International logo"
                className="h-9 w-auto rounded-lg"
              />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-[15px] font-semibold tracking-wide text-cream-50">
                Light in the Society
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.42em] text-flame-400">
                International
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[13px] font-semibold uppercase tracking-[0.18em] text-cream-50/70 transition-colors hover:text-flame-300"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-flame-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-flame-400 px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-ink-950 transition-all duration-300 hover:bg-flame-300 hover:shadow-[0_0_30px_rgba(246,183,60,0.4)] sm:inline-flex"
            >
              Support Us
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream-50/15 text-cream-50 transition-colors hover:border-flame-400/50 hover:text-flame-300 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] flex flex-col bg-ink-950/97 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="flex items-center gap-3">
                <span className="rounded-lg bg-white p-1">
                  <img src="/assets/logo.jpg" alt="" className="h-8 w-auto rounded" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-flame-400">
                  LITS
                </span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-cream-50/15 text-cream-50 hover:border-flame-400/50 hover:text-flame-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="font-display text-4xl font-medium text-cream-50 transition-colors hover:text-flame-300 md:text-5xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.07, duration: 0.5 }}
                className="mt-6 rounded-full bg-flame-400 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-ink-950"
              >
                Support Us
              </motion.a>
            </nav>
            <p className="pb-10 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-cream-50/40">
              Love · Peace · Unity
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
