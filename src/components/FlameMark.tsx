import { useId } from 'react'

interface FlameMarkProps {
  className?: string
}

/** The LITS brand mark — a stylised torch flame, drawn as vector art. */
export default function FlameMark({ className = '' }: FlameMarkProps) {
  const raw = useId()
  const id = raw.replace(/[^a-zA-Z0-9]/g, '')
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient
          id={`flame-${id}`}
          x1="32"
          y1="6"
          x2="32"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffd678" />
          <stop offset="0.55" stopColor="#f6b73c" />
          <stop offset="1" stopColor="#e0961e" />
        </linearGradient>
      </defs>
      <path
        d="M32 6c6.2 10.4 15 16.8 15 28.4 0 9.4-6.7 16.6-15 16.6s-15-7.2-15-16.6c0-5.3 1.9-9.6 4.8-13.4 1 6 3 9.3 5.9 11.5C25.8 23.6 27.4 14.6 32 6z"
        fill={`url(#flame-${id})`}
      />
      <path
        d="M32 27c3 5.2 6.6 8.3 6.6 13.4 0 4.2-3 7.6-6.6 7.6s-6.6-3.4-6.6-7.6c0-2.4.9-4.4 2.2-6.2.6 2.6 1.5 4.1 2.8 5.1-.9-4.3-.3-8.6 1.6-12.3z"
        fill="#fff4d6"
      />
    </svg>
  )
}
