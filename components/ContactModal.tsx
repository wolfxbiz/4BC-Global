'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight, CheckCircle, Loader2, ChevronDown } from 'lucide-react'
import { useContactModal } from '@/lib/contact-modal-context'
import { useOutsideClick } from '@/hooks/use-outside-click'
import Grainient from '@/components/Grainient'

const serviceAreas = [
  'Business Research',
  'Customer Experience',
  'Market Entry Assessment',
  'Competitive Intelligence',
  'Impact Assessment',
  'Geolocation & Mapping',
  'Advisory / Strategy',
  'Other',
]

const countries = [
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
  'Egypt', 'Algeria', 'Morocco', 'Kenya', 'Ghana', 'South Africa',
  'India', 'Pakistan', 'United Kingdom', 'Other',
]

const inputClass =
  'w-full border border-border bg-white px-4 py-3 font-body text-[14px] text-text rounded-lg placeholder:text-text-muted/45 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all'

const labelClass =
  'font-heading font-semibold text-[11px] text-text-muted uppercase tracking-wider block mb-1.5'

function SelectField({
  name, value, onChange, placeholder, options,
}: {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder: string
  options: string[]
}) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${inputClass} appearance-none pr-10 cursor-pointer ${!value ? 'text-text-muted/45' : 'text-text'}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-text">{o}</option>
        ))}
      </select>
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted/60"
      />
    </div>
  )
}

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, () => { if (isOpen) closeModal() })

  const [form, setForm] = useState({
    fullName: '', company: '', email: '', phone: '', country: '', serviceArea: '', challenge: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') closeModal() }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeModal])

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false)
        setForm({ fullName: '', company: '', email: '', phone: '', country: '', serviceArea: '', challenge: '' })
      }, 400)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/55 backdrop-blur-sm z-[60]"
          />

          {/* Modal — full screen on mobile, centered card on desktop */}
          <div className="fixed inset-0 z-[70] flex items-stretch sm:items-center justify-center sm:p-6">
            <motion.div
              key="modal"
              ref={ref}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full sm:max-w-lg md:max-w-2xl bg-white sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* ── Header ── */}
              <div className="relative flex-shrink-0 overflow-hidden">
                <div className="absolute inset-0">
                  <Grainient
                    color1="#351e6b" color2="#9a4788" color3="#b19f2b"
                    timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9}
                    warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26}
                    blendAngle={28} blendSoftness={0.39} rotationAmount={260}
                    noiseScale={2} grainAmount={0.1} grainScale={2}
                    contrast={1.5} gamma={1} saturation={1} zoom={0.9}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark/55 pointer-events-none" />

                {/* Eyebrow row + close */}
                <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 pt-6 pb-0">
                  <p className="font-body text-[10px] font-semibold text-white/50 uppercase tracking-[0.14em]">
                    Have a question or an idea you&apos;re exploring?
                  </p>
                  <button
                    onClick={closeModal}
                    className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors"
                    aria-label="Close"
                  >
                    <X size={14} className="text-white" />
                  </button>
                </div>

                {/* Headline */}
                <div className="relative z-10 px-6 sm:px-8 pt-3 pb-7">
                  <h2 className="font-heading font-bold text-[22px] sm:text-[27px] text-white leading-[1.18] tracking-[-0.025em] mb-2">
                    Tell us what you&apos;re trying to solve.
                  </h2>
                  <p className="font-body text-[13px] text-white/60 leading-relaxed">
                    Our senior team responds the same day — because meaningful conversations are where great insights begin.
                  </p>
                </div>
              </div>

              {/* ── Form ── */}
              <div className="overflow-y-auto flex-1">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                      <CheckCircle size={30} className="text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-text mb-2">We&apos;ll be in touch today.</h3>
                    <p className="font-body text-[14px] text-text-muted max-w-[34ch] leading-relaxed">
                      Thank you for reaching out. Our senior team will review your brief and respond shortly.
                    </p>
                    <button
                      onClick={closeModal}
                      className="mt-8 font-body font-medium text-[14px] text-primary border border-primary/30 rounded-full px-6 py-2.5 hover:bg-primary hover:text-white transition-all"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-4">

                    {/* Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                        <input name="fullName" type="text" required value={form.fullName} onChange={handleChange} placeholder="Sarah Johnson" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Company <span className="text-red-400">*</span></label>
                        <input name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Acme Corp" className={inputClass} />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Business Email <span className="text-red-400">*</span></label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="sarah@company.com" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Phone <span className="normal-case font-normal tracking-normal text-text-muted/40">(optional)</span>
                        </label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" className={inputClass} />
                      </div>
                    </div>

                    {/* Country + Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Country</label>
                        <SelectField
                          name="country" value={form.country} onChange={handleChange}
                          placeholder="Select country" options={countries}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Service Area</label>
                        <SelectField
                          name="serviceArea" value={form.serviceArea} onChange={handleChange}
                          placeholder="Select service" options={serviceAreas}
                        />
                      </div>
                    </div>

                    {/* Business challenge */}
                    <div>
                      <label className={labelClass}>
                        What is the business challenge you are facing? <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="challenge" required rows={4}
                        value={form.challenge} onChange={handleChange}
                        placeholder="Describe the challenge or question you need answered — e.g. entering a new market, understanding customer behaviour, assessing feasibility of a new product..."
                        className={`${inputClass} resize-none leading-relaxed`}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-1 pb-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 bg-accent text-dark font-heading font-bold text-[15px] rounded-full px-8 py-4 hover:bg-accent-warm hover:shadow-lg shadow-md hover:scale-[1.01] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading
                          ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
                          : <>Book a Consultation <ArrowRight size={16} /></>
                        }
                      </button>
                      <p className="font-body text-[11px] text-text-muted text-center mt-3">
                        No commitment required · We respond the same business day
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
