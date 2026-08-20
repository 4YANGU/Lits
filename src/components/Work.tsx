import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GALLERY } from '../lib/data'

/** Horizontal filmstrip of the light at work across Kenya. */
export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-cream-50 py-24 text-ink-900 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            tone="light"
            eyebrow="Light in Action"
            title={
              <>
                Where the light <em className="text-flame-600 italic">lands.</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-ink-900/60">
              Drag, swipe, or scroll through moments from our programs — from
              classrooms to forests to peace walks.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15} y={44}>
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GALLERY.map((item) => (
            <article
              key={item.title}
              className="group relative aspect-[3/4] w-[76vw] shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[400px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="duotone h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-flame-300/40 bg-ink-950/50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-flame-300 backdrop-blur-sm">
                  {item.tag}
                </span>
                <h3 className="mt-4 font-display text-3xl font-medium text-cream-50">
                  {item.title}
                </h3>
              </div>
              <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </article>
          ))}
          {/* End card */}
          <a
            href="#contact"
            className="group flex aspect-[3/4] w-[76vw] shrink-0 snap-center flex-col items-center justify-center gap-5 rounded-3xl border border-ink-900/15 bg-cream-100 text-center transition-colors duration-500 hover:border-flame-500/50 sm:w-[400px]"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-flame-400 text-ink-950 transition-transform duration-500 group-hover:scale-110">
              <ArrowUpRight className="h-7 w-7" />
            </span>
            <span className="font-display text-3xl font-medium text-ink-900">
              Write the next story with us
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-flame-600">
              Partner with LITS
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
