import { Check } from 'lucide-react'
import FlameMark from './FlameMark'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { FOCUS_AREAS } from '../lib/data'

const ABOUT_STATS = [
  { n: '04', label: 'Pillars of impact' },
  { n: '03', label: 'Communities we serve' },
  { n: '01', label: 'Shared light we carry' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream-50 py-24 text-ink-900 md:py-36">
      {/* faint flame watermark */}
      <FlameMark className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] opacity-[0.05]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <SectionHeading
              tone="light"
              eyebrow="About Light in the Society International"
              title={
                <>
                  A light carried by the{' '}
                  <em className="text-flame-600 italic">whole community.</em>
                </>
              }
            />
            <Reveal delay={0.25}>
              <p className="mt-7 text-lg leading-relaxed text-ink-900/75">
                Light in the Society International (LITS) is a registered NGO in
                Kenya dedicated to empowering youth, women, and vulnerable
                communities. Through education, peace promotion, talent
                development, and environmental conservation, we work to build a
                united and prosperous society guided by love, peace, and unity.
              </p>
            </Reveal>
            <div className="mt-10 space-y-5">
              {FOCUS_AREAS.map((area, i) => (
                <Reveal key={area.title} delay={0.3 + i * 0.1}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-ink-900/8 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500/40 hover:shadow-lg hover:shadow-flame-500/10">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-flame-400 text-ink-950">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-display text-xl font-semibold">{area.title}</p>
                      <p className="mt-1 text-sm text-ink-900/65">{area.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.6}>
              <p className="mt-10 font-display text-xl italic text-ink-900/60">
                “Guided by love, peace, and unity.”
              </p>
            </Reveal>
          </div>

          {/* Collage */}
          <Reveal delay={0.2} y={48}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/20">
                <img
                  src="/assets/img-community.jpg"
                  alt="Community members standing together in unity"
                  className="duotone aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-4 w-40 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-xl md:-left-8 md:w-56">
                <img
                  src="/assets/img-education.jpg"
                  alt="Children learning together in class"
                  className="duotone aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-6 -right-3 rounded-2xl bg-ink-900 px-5 py-4 text-cream-50 shadow-xl md:-right-6">
                <FlameMark className="animate-flicker h-8 w-8" />
                <p className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.22em]">
                  Registered NGO
                </p>
                <p className="text-[11px] font-semibold text-flame-300">Kenya</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stat strip */}
        <div className="mt-28 grid grid-cols-1 gap-8 border-t border-ink-900/10 pt-12 sm:grid-cols-3">
          {ABOUT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 + i * 0.12}>
              <div className="flex items-baseline gap-4 sm:justify-center">
                <span className="font-display text-5xl font-light italic text-flame-600 md:text-6xl">
                  {stat.n}
                </span>
                <span className="max-w-[130px] text-sm font-semibold uppercase tracking-[0.18em] text-ink-900/60">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
