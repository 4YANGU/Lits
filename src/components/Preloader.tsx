import { motion } from 'framer-motion'
import FlameMark from './FlameMark'

/** Opening ritual: a flame is lit, then the curtain lifts. */
export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <div className="animate-pulse-glow absolute -inset-20 rounded-full bg-flame-400/15 blur-3xl" />
        <FlameMark className="animate-flicker relative h-16 w-16" />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="relative mt-7 text-[11px] font-bold uppercase tracking-[0.45em] text-cream-50/85"
        >
          Light in the Society
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="relative mt-1.5 text-[10px] font-bold uppercase tracking-[0.6em] text-flame-400"
        >
          International
        </motion.p>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        className="absolute bottom-16 left-1/2 h-px w-40 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-flame-400 to-transparent"
      />
    </motion.div>
  )
}
