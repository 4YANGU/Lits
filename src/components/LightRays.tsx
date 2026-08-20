interface LightRaysProps {
  className?: string
  from?: 'bottom' | 'top'
  opacity?: number
}

/**
 * Slowly rotating rays of light emanating from a torch point —
 * the visual signature of the brand, echoing the logo's radiance.
 */
export default function LightRays({ className = '', from = 'bottom', opacity = 1 }: LightRaysProps) {
  const isBottom = from === 'bottom'
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        opacity,
        maskImage: isBottom
          ? 'radial-gradient(ellipse 90% 85% at 50% 100%, black 0%, transparent 72%)'
          : 'radial-gradient(ellipse 90% 85% at 50% 0%, black 0%, transparent 72%)',
        WebkitMaskImage: isBottom
          ? 'radial-gradient(ellipse 90% 85% at 50% 100%, black 0%, transparent 72%)'
          : 'radial-gradient(ellipse 90% 85% at 50% 0%, black 0%, transparent 72%)',
      }}
    >
      <div
        className="animate-spin-slower absolute rounded-full"
        style={{
          left: '50%',
          top: isBottom ? '100%' : '0%',
          width: '200vmax',
          height: '200vmax',
          marginLeft: '-100vmax',
          marginTop: '-100vmax',
          background:
            'repeating-conic-gradient(from 0deg at 50% 50%, rgba(246,183,60,0.10) 0deg 2.5deg, transparent 2.5deg 8.5deg)',
        }}
      />
    </div>
  )
}
