import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { STATS } from '../lib/data'
import type { Stat } from '../lib/data'

function useCountUp(target: number, active: boolean, duration = 1900) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active)
  return (
    <div className="group flex flex-col items-center rounded-3xl border border-cream-50/10 bg-ink-950/40 px-6 py-10 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-flame-400/40 hover:bg-ink-950/60">
      <span className="font-display text-5xl font-medium text-flame-400 tabular-nums md:text-6xl">
        {value.toLocaleString()}
        {stat.suffix}
      </span>
      <span className="mt-4 max-w-[190px] text-[12px] font-bold uppercase tracking-[0.2em] text-cream-50/70">
        {stat.label}
      </span>
    </div>
  )
}

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="impact" className="relative overflow-hidden py-24 md:py-36">
      <img
        src="/assets/img-savanna.jpg"
        alt=""
        aria-hidden
        className="duotone absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/82" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our Impact"
          title={
            <>
              Small flames. <em className="text-flame-400 italic">Great fires</em> of change.
            </>
          }
          description="Every number below began as a single act of care — a class taught, a tree planted, a hand extended."
        />

        <div ref={ref} className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} y={40}>
              <Counter stat={stat} active={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
