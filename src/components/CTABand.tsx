import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

/** The “→” moment — a golden call to carry the light forward. */
export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-flame-400 py-20 text-ink-950 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_50%,rgba(255,244,214,0.5),transparent_65%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 md:flex-row md:justify-between md:px-8">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-ink-950/70">
            The invitation
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
            Be the light someone <em className="italic">remembers.</em>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-950/75">
            Volunteer, partner, or simply share the flame — every contribution
            carries light further into society.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a href="#contact" className="group relative grid h-40 w-40 place-items-center md:h-48 md:w-48">
            <svg viewBox="0 0 100 100" className="animate-spin-badge absolute inset-0 h-full w-full">
              <defs>
                <path
                  id="cta-circle"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                />
              </defs>
              <text className="fill-ink-950 text-[8.2px] font-bold uppercase tracking-[0.22em]">
                <textPath href="#cta-circle">
                  Be the light · Join the movement · Be the light ·
                </textPath>
              </text>
            </svg>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-ink-950 text-flame-400 shadow-xl transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
              <ArrowRight className="h-7 w-7 transition-transform duration-500 group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
