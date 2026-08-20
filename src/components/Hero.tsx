import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowDown, Flame } from 'lucide-react'
import EmberField from './EmberField'
import LightRays from './LightRays'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

const line: Variants = {
  hidden: { y: '115%' },
  visible: { y: 0, transition: { duration: 1.05, ease: EASE } },
}

function MaskLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
      <motion.span className="block" variants={line}>
        {children}
      </motion.span>
    </span>
  )
}

interface HeroProps {
  ready: boolean
}

export default function Hero({ ready }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950">
      {/* Atmosphere layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_108%,rgba(246,183,60,0.30),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_112%,rgba(224,150,30,0.22),transparent_60%)]" />
      <LightRays from="bottom" opacity={0.9} />
      <EmberField className="absolute inset-0 h-full w-full" density={60} />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/80 to-transparent" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pt-32 pb-24 text-center md:px-8"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-flame-400/30 bg-flame-400/10 px-5 py-2 backdrop-blur-sm"
        >
          <Flame className="h-3.5 w-3.5 text-flame-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-flame-200 md:text-[11px]">
            A Registered NGO · Kenya
          </span>
        </motion.div>

        <h1 className="mt-9 font-display text-[clamp(2.9rem,8.5vw,7.2rem)] leading-[1.02] font-medium tracking-tight text-cream-50">
          <MaskLine>
            Lighting up <em className="text-flame-400 italic">society,</em>
          </MaskLine>
          <MaskLine>
            transforming <em className="text-flame-300 italic">the world.</em>
          </MaskLine>
        </h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-base leading-relaxed text-cream-50/70 md:text-lg"
        >
          Light in the Society International empowers youth, women, and vulnerable
          communities across Kenya through education, peace promotion, talent
          development, and environmental conservation.
        </motion.p>

        <motion.div variants={item} className="mt-11 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#about"
            className="group inline-flex items-center gap-2.5 rounded-full bg-flame-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink-950 transition-all duration-300 hover:bg-flame-300 hover:shadow-[0_0_50px_rgba(246,183,60,0.45)]"
          >
            Discover Our Mission
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-cream-50/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-cream-50 transition-all duration-300 hover:border-flame-400/70 hover:text-flame-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 mx-auto mb-9 flex w-full max-w-6xl items-end justify-between px-5 md:px-8"
      >
        <div className="hidden items-center gap-3 md:flex">
          <span className="h-px w-10 bg-flame-400/60" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream-50/50">
            Love · Peace · Unity
          </span>
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream-50/50">
            Scroll
          </span>
          <span className="relative block h-11 w-px overflow-hidden bg-cream-50/15">
            <span className="animate-scroll-dot absolute left-0 top-0 h-3 w-px bg-flame-400" />
          </span>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream-50/50">
            Est. Kenya
          </span>
          <span className="h-px w-10 bg-flame-400/60" />
        </div>
      </motion.div>
    </section>
  )
}
