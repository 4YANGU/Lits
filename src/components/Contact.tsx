import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import FlameMark from './FlameMark'
import LightRays from './LightRays'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { CONTACT } from '../lib/data'

interface FormState {
  name: string
  email: string
  message: string
}

const EMPTY_FORM: FormState = { name: '', email: '', message: '' }

const INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: 'Tel',
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: CONTACT.location,
    detail: CONTACT.locationDetail,
  },
]

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSent(true)
  }

  const field =
    'w-full border-b border-cream-50/15 bg-transparent py-3.5 text-cream-50 placeholder:text-cream-50/35 outline-none transition-colors duration-300 focus:border-flame-400'

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 md:py-36">
      <LightRays from="top" opacity={0.55} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_-8%,rgba(246,183,60,0.16),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title={
                <>
                  Empowering communities for a{' '}
                  <em className="text-flame-400 italic">brighter future.</em>
                </>
              }
              description="Whether you want to volunteer, partner, or learn more about our work — our door, and our hearts, are open."
            />

            <div className="mt-12 space-y-4">
              {INFO.map((item, i) => {
                const Icon = item.icon
                const inner = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-flame-400/30 bg-flame-400/10 text-flame-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-flame-400 group-hover:text-ink-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-cream-50/50">
                        {item.label}
                      </span>
                      <span className="mt-1 block font-display text-xl text-cream-50 md:text-2xl">
                        {item.value}
                      </span>
                      {item.detail && (
                        <span className="mt-0.5 block text-sm text-cream-50/50">
                          {item.detail}
                        </span>
                      )}
                    </span>
                  </>
                )
                return (
                  <Reveal key={item.label} delay={0.15 + i * 0.1}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center gap-5 rounded-2xl border border-cream-50/8 bg-ink-800/50 p-5 transition-colors duration-300 hover:border-flame-400/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-5 rounded-2xl border border-cream-50/8 bg-ink-800/50 p-5">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.5}>
              <p className="mt-10 flex items-center gap-3 text-sm text-cream-50/50">
                <FlameMark className="h-5 w-5" />
                We respond within 48 hours — often much sooner.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.25} y={44}>
            <div className="relative rounded-3xl border border-cream-50/10 bg-ink-800/60 p-8 backdrop-blur-sm md:p-10">
              {sent ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <FlameMark className="animate-flicker h-16 w-16" />
                  <h3 className="mt-7 font-display text-3xl text-cream-50">
                    Your light has reached us.
                  </h3>
                  <p className="mt-3 max-w-sm text-cream-50/65">
                    Thank you, {form.name.split(' ')[0] || 'friend'}. Our team will
                    get back to you at {form.email} very soon.
                  </p>
                  <button
                    onClick={() => {
                      setForm(EMPTY_FORM)
                      setSent(false)
                    }}
                    className="mt-8 rounded-full border border-flame-400/50 px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-flame-300 transition-all duration-300 hover:bg-flame-400 hover:text-ink-950"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="font-display text-2xl text-cream-50">Send us a message</p>
                  <p className="mt-2 text-sm text-cream-50/55">
                    Every message is read by a real human being on our team.
                  </p>
                  <div className="mt-9 space-y-7">
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-cream-50/50">
                        Your Name
                      </span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Amina Wanjiru"
                        className={field}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-cream-50/50">
                        Email Address
                      </span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="amina@example.com"
                        className={field}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-cream-50/50">
                        Message
                      </span>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us how you'd like to be part of the light…"
                        className={`${field} resize-none`}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="group mt-10 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-flame-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink-950 transition-all duration-300 hover:bg-flame-300 hover:shadow-[0_0_45px_rgba(246,183,60,0.4)]"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
