import type { ReactNode } from 'react'
import FlameMark from './FlameMark'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'dark',
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Reveal>
        <p
          className={`flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.4em] ${
            tone === 'dark' ? 'text-flame-400' : 'text-flame-600'
          } ${centered ? 'justify-center' : ''}`}
        >
          <FlameMark className="h-4 w-4" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl ${
            tone === 'dark' ? 'text-cream-50' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 text-lg leading-relaxed ${
              tone === 'dark' ? 'text-cream-50/70' : 'text-ink-900/70'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
