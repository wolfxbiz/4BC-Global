'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'
import { CaseStudyModal } from '@/components/CaseStudyModal'
import { caseStudies, sectorConfig, CaseStudy } from '@/lib/case-studies-data'

const filters = ['All', 'Retail', 'Finance', 'Oil & Gas', 'Industrial', 'Government', 'Real Estate', 'Transport']

function ExpandableCaseStudies({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState<CaseStudy | null>(null)

  return (
    <>
      <AnimatePresence mode="wait">
        {active && (
          <CaseStudyModal study={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>

      {/* ── Card list ── */}
      <ul className="w-full space-y-3">
        {studies.map((cs) => {
          const cfg = sectorConfig[cs.sector] || { gradient: 'from-primary to-plum' }
          return (
            <li
              key={cs.id}
              onClick={() => setActive(cs)}
              className="bg-white border border-border rounded-2xl cursor-pointer hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row items-stretch">
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 h-40 sm:h-auto sm:w-48 overflow-hidden">
                  <Image
                    src={cs.image} alt={cs.title} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-70`} />
                  <div className="absolute inset-0 flex items-end p-3">
                    <span className="font-heading font-semibold text-[10px] tracking-[0.1em] uppercase text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2.5 py-1">
                      {cs.sector}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 items-center justify-between gap-4 p-4 sm:p-5">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <MapPin size={11} className="text-text-muted flex-shrink-0" />
                      <span className="font-body text-[12px] text-text-muted truncate">{cs.geography}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-[15px] sm:text-[16px] text-text leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                      {cs.title}
                    </h3>
                    <p className="font-body text-[12px] text-text-muted mt-1.5 line-clamp-1 hidden sm:block">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Stats pills — desktop only */}
                  <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                    {cs.stats.slice(0, 2).map((s) => (
                      <div key={s.label} className="text-center bg-bg-soft border border-border rounded-xl px-3 py-2">
                        <div className="font-heading font-bold text-text text-base leading-none">{s.value}</div>
                        <div className="font-body text-text-muted text-[10px] mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-all duration-200">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.sector === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 md:py-36 px-4" style={{ background: '#0F1320' }}>
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark/50 pointer-events-none" />
        <div className="container-content text-center relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-body text-[12px] text-white/75 tracking-widest uppercase">8 Case Studies · 6 Sectors</span>
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white mb-5 tracking-[-0.04em]">
              Intelligence in Action
            </h1>
            <p className="font-body text-lg text-white/65 max-w-xl mx-auto leading-relaxed">
              Real challenges. Real clients. Real outcomes — across MEA's most complex markets.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,20 L1440,60 Z" fill="#EEF3FF" />
          </svg>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          {/* Filter Bar */}
          <AnimatedSection className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-heading font-semibold text-[13px] px-5 py-2.5 rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white text-text-muted border-border hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </AnimatedSection>

          {/* Expandable Case Study List */}
          <AnimatedSection>
            <ExpandableCaseStudies studies={filtered} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50 pointer-events-none" />
        <div className="container-content relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 tracking-[-0.02em]">
              Have a similar challenge?
            </h2>
            <p className="font-body text-white/65 text-lg mb-8 max-w-lg mx-auto">
              Let us design a bespoke research solution for your market.
            </p>
            <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[16px] px-8 py-4">
              Start a Conversation
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
