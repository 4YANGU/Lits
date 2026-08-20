import FlameMark from './FlameMark'
import { NAV_LINKS, CONTACT } from '../lib/data'

const VALUE_LINKS = [
  'Poverty Alleviation',
  'Youth & Women Empowerment',
  'Environmental Conservation',
  'Peace Promotion',
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-cream-50/10 bg-ink-950 pb-10 pt-20">
      {/* Giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-6 select-none text-center font-display text-[16vw] leading-none font-black tracking-tight text-transparent"
        style={{ WebkitTextStroke: '1px rgba(246,183,60,0.10)' }}
      >
        LIGHT
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 lg:pr-16">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-white p-1.5">
                <img
                  src="/assets/logo.jpg"
                  alt="Light in the Society International logo"
                  className="h-10 w-auto rounded-lg"
                />
              </span>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-cream-50/60">
              Light in the Society International (LITS) is a registered NGO in
              Kenya dedicated to empowering youth, women, and vulnerable
              communities — lighting up society, transforming the world.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <FlameMark className="animate-flicker h-6 w-6" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-flame-400">
                Love · Peace · Unity
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream-50/45">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-cream-50/70 transition-colors hover:text-flame-300"
                  >
                    <span className="h-px w-0 bg-flame-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Values + contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream-50/45">
              Our Values
            </p>
            <ul className="mt-5 space-y-3">
              {VALUE_LINKS.map((value) => (
                <li key={value}>
                  <a
                    href="#values"
                    className="text-cream-50/70 transition-colors hover:text-flame-300"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 text-sm text-cream-50/60">
              <a
                href={`mailto:${CONTACT.email}`}
                className="block transition-colors hover:text-flame-300"
              >
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneHref} className="block transition-colors hover:text-flame-300">
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 text-center text-xs text-cream-50/45 md:flex-row md:text-left">
          <p>© {year} Light in the Society International. All rights reserved.</p>
          <p className="font-display italic text-cream-50/55">
            Lighting up society, transforming the world.
          </p>
        </div>
      </div>
    </footer>
  )
}
