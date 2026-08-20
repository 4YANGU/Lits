import { useEffect, useRef } from 'react'

interface Ember {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  hue: number
  phase: number
  speed: number
}

interface EmberFieldProps {
  density?: number
  className?: string
}

/** Canvas of glowing embers drifting upward — light made visible. */
export default function EmberField({ density = 55, className = '' }: EmberFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let embers: Ember[] = []

    const spawn = (anywhere = false): Ember => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : height + 10,
      r: 0.8 + Math.random() * 2.2,
      vy: 0.25 + Math.random() * 0.7,
      vx: (Math.random() - 0.5) * 0.25,
      hue: 36 + Math.random() * 14,
      phase: Math.random() * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.03,
    })

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      embers = Array.from({ length: density }, () => spawn(true))
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i]
        e.y -= e.vy
        e.x += e.vx + Math.sin(e.phase) * 0.15
        e.phase += e.speed
        if (e.y < -12) embers[i] = spawn()
        const alpha = 0.22 + Math.abs(Math.sin(e.phase)) * 0.55
        ctx.beginPath()
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${e.hue}, 92%, 62%, ${alpha})`
        ctx.shadowColor = `hsla(${e.hue}, 92%, 60%, 0.9)`
        ctx.shadowBlur = e.r * 5
        ctx.fill()
        ctx.shadowBlur = 0
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [density])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
