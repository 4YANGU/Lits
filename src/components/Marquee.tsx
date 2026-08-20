import FlameMark from './FlameMark'
import { MARQUEE_WORDS } from '../lib/data'

/** Golden ribbon of the values that guide the movement. */
export default function Marquee() {
  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS]
  return (
    <div className="relative overflow-hidden border-y border-ink-950/20 bg-flame-400 py-4 text-ink-950">
      <div className="animate-marquee flex w-max items-center">
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center">
            <span className="px-7 font-display text-2xl font-medium italic md:text-3xl">
              {word}
            </span>
            <FlameMark className="h-5 w-5 opacity-80" />
          </span>
        ))}
      </div>
    </div>
  )
}
