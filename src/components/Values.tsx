import { motion } from 'framer-motion'
import { HandCoins, HeartHandshake, TreePine, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

interface ValueCard {
  number: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
}

const VALUES: ValueCard[] = [
  {
    number: '01',
    title: 'Poverty Alleviation',
    tagline: 'Skills · Leadership · Opportunity',
    description:
      'Training programs enhancing skills and leadership among youth. We create pathways out of poverty by equipping vulnerable communities with skills, opportunities, and resources that promote self-reliance and long-term growth.',
    icon: HandCoins,
  },
  {
    number: '02',
    title: 'Youth & Women Empowerment',
    tagline: 'Mentorship · Training · Exposure',
    description:
      'Through mentorship, training, and exposure, we empower youth and women to unlock their potential, nurture their talents, and become leaders of change in society.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Environmental Conservation',
    tagline: 'Protect · Plant · Sustain',
    description:
      'Our programs inspire young people to take action in protecting natural resources, planting trees, and creating sustainable solutions for the generations to come.',
    icon: TreePine,
  },
  {
    number: '04',
    title: 'Peace Promotion',
    tagline: 'Dialogue · Unity · Harmony',
    description:
      'We champion peace, love, and unity by engaging communities in dialogue, peace walks, and awareness forums that foster harmony and mutual respect.',
    icon: HeartHandshake,
  },
]

export default function Values() {
  return (
    <section id="values" className="relative overflow-hidden bg-ink-950 py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_0%,rgba(36,80,164,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our Core Values"
          title={
            <>
              Empowering communities through{' '}
              <em className="text-flame-400 italic">sustainable development</em> and social
              unity.
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {VALUES.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-cream-50/8 bg-ink-800/70 p-8 transition-colors duration-500 hover:border-flame-400/40 md:p-10"
              >
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-flame-400/0 blur-3xl transition-colors duration-700 group-hover:bg-flame-400/15" />
                <div className="relative flex items-start justify-between">
                  <span className="rounded-full border border-flame-400/30 bg-flame-400/10 p-3.5 text-flame-400 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-6xl font-light italic text-cream-50/10 transition-colors duration-500 group-hover:text-flame-400/30">
                    {value.number}
                  </span>
                </div>
                <h3 className="relative mt-8 font-display text-2xl font-medium text-cream-50 md:text-3xl">
                  {value.title}
                </h3>
                <p className="relative mt-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-flame-400/90">
                  {value.tagline}
                </p>
                <p className="relative mt-4 leading-relaxed text-cream-50/65">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-14 max-w-xl text-center font-display text-xl italic text-cream-50/50">
            Every value is a flame we pass from hand to hand.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
