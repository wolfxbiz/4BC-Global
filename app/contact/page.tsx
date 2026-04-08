'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin, Mail, Linkedin, ArrowRight, CheckCircle,
  Loader2, Clock, Users, Shield, MessageSquare,
  ChevronRight,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
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

const hearAboutUs = [
  'LinkedIn', 'Google Search', 'Referral from a colleague', 'Industry event',
  'Existing client', 'Press / Media', 'Other',
]

const trustSignals = [
  {
    icon: Clock,
    title: 'Same-day response',
    desc: 'Our senior team responds to every enquiry within the same business day — no junior gatekeeping.',
  },
  {
    icon: Users,
    title: 'Senior-led research',
    desc: 'Every project is led by practitioners with 15+ years of MEA market research experience.',
  },
  {
    icon: Shield,
    title: 'No commitment required',
    desc: 'Share your challenge with us. We\'ll tell you honestly whether and how we can help.',
  },
]

const steps = [
  { num: '01', label: 'Submit your brief', desc: 'Tell us what you need — no lengthy forms, just the essentials.' },
  { num: '02', label: 'Discovery call', desc: 'A 30-minute call with a senior researcher to scope your project.' },
  { num: '03', label: 'Tailored proposal', desc: 'A methodology and timeline built around your specific challenge.' },
  { num: '04', label: 'Research & delivery', desc: 'We execute and deliver findings your team can act on.' },
]

const officeLocations = [
  { city: 'Dubai', country: 'UAE', primary: true },
  { city: 'Riyadh', country: 'Saudi Arabia', primary: false },
  { city: 'Nairobi', country: 'Kenya', primary: false },
  { city: 'Mumbai', country: 'India', primary: false },
  { city: 'Algiers', country: 'Algeria', primary: false },
  { city: 'Cape Town', country: 'South Africa', primary: false },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '', company: '', jobTitle: '', email: '',
    phone: '', country: '', serviceArea: '', challenge: '', hearAbout: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = 'w-full border border-border rounded-xl px-4 py-3 font-body text-[14px] text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white'
  const labelClass = 'font-heading font-semibold text-[11px] text-text-muted uppercase tracking-wider block mb-1.5'

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[500px] flex items-center">
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
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/25 to-dark/60 pointer-events-none" />

        {/* Decorative rings */}
        <div className="absolute right-0 top-0 w-[55%] h-full opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 600 700" className="w-full h-full" fill="none">
            <circle cx="500" cy="350" r="420" stroke="white" strokeWidth="1" />
            <circle cx="500" cy="350" r="290" stroke="white" strokeWidth="0.7" />
            <circle cx="500" cy="350" r="160" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container-content relative z-10 py-24 sm:py-32">
          <AnimatedSection className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="font-body text-[11px] font-medium text-white/75 tracking-widest uppercase">
                Have a question or an idea you&apos;re exploring?
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] text-white leading-[1.05] tracking-[-0.035em] mb-5">
              Tell us what you&apos;re trying{' '}
              <span className="italic font-extrabold">to solve.</span>
            </h1>

            <p className="font-body text-[16px] sm:text-[17px] text-white/65 leading-relaxed max-w-[52ch] mb-8">
              Whether you&apos;re shaping a detailed research proposal or simply testing the waters — our senior team responds the same day because meaningful conversations are where great insights begin.
            </p>

            {/* Quick contact pills */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@4bcglobal.com"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-body text-[13px] font-medium rounded-full px-5 py-2.5 hover:bg-white/20 transition-all"
              >
                <Mail size={13} /> info@4bcglobal.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-body text-[13px] font-medium rounded-full px-5 py-2.5 hover:bg-white/20 transition-all"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,15 L1440,60 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST SIGNALS ─── */}
      <section className="bg-white py-14 px-4 border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {trustSignals.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <t.icon size={18} className="text-primary" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[15px] text-text mb-1">{t.title}</h3>
                    <p className="font-body text-[13px] text-text-muted leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-white py-14 sm:py-16 px-4 border-b border-border">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <span className="font-body text-[11px] font-semibold text-primary uppercase tracking-widest block mb-1">Process</span>
            <h2 className="font-heading font-bold text-[1.7rem] sm:text-[2rem] text-text tracking-[-0.025em]">How it works</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="relative bg-bg-soft border border-border rounded-2xl p-5 sm:p-6 h-full">
                  {/* connector line on desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 z-10">
                      <ChevronRight size={18} className="text-border" />
                    </div>
                  )}
                  <span className="font-heading font-extrabold text-[2rem] text-primary/12 leading-none block mb-3">{step.num}</span>
                  <h3 className="font-heading font-bold text-[15px] text-text mb-2">{step.label}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="bg-white py-16 sm:py-20 px-4 border-t border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-12 items-start">

            {/* ── Left — form ── */}
            <AnimatedSection>
              <div className="bg-bg-soft border border-border rounded-3xl overflow-hidden shadow-sm">
                {/* Form header */}
                <div className="bg-white border-b border-border px-6 sm:px-8 py-6">
                  <span className="font-body text-[11px] font-semibold text-primary uppercase tracking-widest block mb-1">Submit your brief</span>
                  <h2 className="font-heading font-bold text-[1.5rem] sm:text-[1.7rem] text-text tracking-[-0.02em]">
                    Share your challenge with us
                  </h2>
                  <p className="font-body text-[13px] text-text-muted mt-1.5">
                    Fill in the form below — we&apos;ll respond within the same business day.
                  </p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                      <CheckCircle size={30} className="text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-text mb-2">Brief received.</h3>
                    <p className="font-body text-[14px] text-text-muted max-w-[36ch] leading-relaxed">
                      Our senior team will review your challenge and get back to you today. No junior researchers, no delays.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 font-body font-medium text-[13px] text-text-muted border border-border rounded-full px-5 py-2.5 hover:border-primary hover:text-primary transition-all"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-7 space-y-5">
                    {/* Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name <span className="text-red-400 normal-case font-normal tracking-normal">*</span></label>
                        <input name="fullName" type="text" required value={form.fullName} onChange={handleChange} placeholder="Sarah Johnson" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Company <span className="text-red-400 normal-case font-normal tracking-normal">*</span></label>
                        <input name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Acme Corp" className={inputClass} />
                      </div>
                    </div>

                    {/* Job title */}
                    <div>
                      <label className={labelClass}>Job Title</label>
                      <input name="jobTitle" type="text" value={form.jobTitle} onChange={handleChange} placeholder="Head of Strategy" className={inputClass} />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Business Email <span className="text-red-400 normal-case font-normal tracking-normal">*</span></label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="sarah@company.com" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone <span className="text-text-muted/40 normal-case font-normal tracking-normal">(optional)</span></label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" className={inputClass} />
                      </div>
                    </div>

                    {/* Country + Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Country</label>
                        <select name="country" value={form.country} onChange={handleChange} className={inputClass}>
                          <option value="">Select country</option>
                          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Service Area</label>
                        <select name="serviceArea" value={form.serviceArea} onChange={handleChange} className={inputClass}>
                          <option value="">Select service</option>
                          {serviceAreas.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* The main question */}
                    <div>
                      <label className={labelClass}>
                        What is the business challenge you are facing?{' '}
                        <span className="text-red-400 normal-case font-normal tracking-normal">*</span>
                      </label>
                      <textarea
                        name="challenge" required rows={5}
                        value={form.challenge} onChange={handleChange}
                        placeholder="Describe the challenge or question you need answered — e.g. entering a new market, understanding customer behaviour, sizing an opportunity, assessing competitive landscape..."
                        className={`${inputClass} resize-none leading-relaxed`}
                      />
                    </div>

                    {/* How did you hear */}
                    <div>
                      <label className={labelClass}>How did you hear about us? <span className="text-text-muted/40 normal-case font-normal tracking-normal">(optional)</span></label>
                      <select name="hearAbout" value={form.hearAbout} onChange={handleChange} className={inputClass}>
                        <option value="">Select one</option>
                        {hearAboutUs.map((h) => <option key={h} value={h}>{h}</option>)}
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-accent text-dark font-heading font-bold text-[15px] rounded-full px-8 py-4 hover:bg-accent-warm hover:shadow-lg shadow-md hover:scale-[1.01] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <><Loader2 size={16} className="animate-spin" /> Sending your brief…</>
                        ) : (
                          <>Send Your Brief <ArrowRight size={16} /></>
                        )}
                      </button>
                      <p className="font-body text-[11px] text-text-muted text-center mt-3 leading-relaxed">
                        No commitment required · We respond within the same business day · Your information is kept confidential
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* ── Right — contact info sidebar ── */}
            <div className="space-y-5">
              {/* Contact card */}
              <AnimatedSection delay={0.15}>
                <div className="bg-white border border-border rounded-3xl p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-[16px] text-text mb-5 flex items-center gap-2">
                    <MessageSquare size={16} className="text-primary" /> Contact Us Directly
                  </h3>
                  <div className="space-y-4">
                    <a href="mailto:info@4bcglobal.com" className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                        <Mail size={15} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-[12px] text-text-muted uppercase tracking-wider mb-0.5">Email</p>
                        <p className="font-body text-[14px] text-primary font-medium">info@4bcglobal.com</p>
                      </div>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                        <Linkedin size={15} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-[12px] text-text-muted uppercase tracking-wider mb-0.5">LinkedIn</p>
                        <p className="font-body text-[14px] text-primary font-medium">Follow 4BC Global</p>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Offices */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white border border-border rounded-3xl p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-[16px] text-text mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-primary" /> Our Offices
                  </h3>
                  <p className="font-body text-[12px] text-text-muted mb-4">Serving MEA clients across 40+ countries</p>
                  <div className="space-y-2.5">
                    {officeLocations.map((loc) => (
                      <div key={loc.city} className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 ${loc.primary ? 'bg-primary/8 border border-primary/15' : 'bg-bg-soft border border-border'}`}>
                        <div className="flex items-center gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${loc.primary ? 'bg-primary' : 'bg-border'}`} />
                          <span className="font-heading font-semibold text-[13px] text-text">{loc.city}</span>
                        </div>
                        <span className={`font-body text-[11px] ${loc.primary ? 'text-primary font-medium' : 'text-text-muted'}`}>
                          {loc.country}{loc.primary ? ' · HQ' : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quote card */}
              <AnimatedSection delay={0.25}>
                <div className="relative overflow-hidden rounded-3xl p-6">
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
                  <div className="absolute inset-0 bg-dark/45 pointer-events-none" />
                  <div className="relative z-10">
                    <p className="font-heading italic text-[15px] text-white/85 leading-relaxed mb-4">
                      &quot;Whether you need a quick market snapshot or a full strategic study — we&apos;re ready to design the right research for you.&quot;
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                        <Users size={12} className="text-white" />
                      </div>
                      <span className="font-body text-[12px] text-white/60">4BC Global Senior Team</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4">
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
        <div className="absolute inset-0 bg-dark/50 pointer-events-none" />
        <div className="container-content relative z-10 text-center max-w-xl">
          <AnimatedSection>
            <p className="font-body text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-3">Prefer email?</p>
            <h2 className="font-heading font-bold text-[1.8rem] sm:text-[2.2rem] text-white tracking-[-0.025em] mb-4">
              Reach us directly.
            </h2>
            <p className="font-body text-[15px] text-white/60 leading-relaxed mb-7">
              Send a message directly to our team — no auto-responders, no waiting rooms.
            </p>
            <a
              href="mailto:info@4bcglobal.com"
              className="inline-flex items-center gap-2 bg-accent text-dark font-heading font-bold text-[15px] rounded-full px-8 py-4 hover:bg-accent-warm hover:shadow-lg shadow-md transition-all duration-200"
            >
              Email Us Directly <ArrowRight size={15} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
