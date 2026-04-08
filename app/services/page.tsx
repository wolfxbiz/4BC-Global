import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Users, BarChart2, MapPin, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PageHeader from '@/components/PageHeader'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

export const metadata: Metadata = {
  title: 'Research Services — 4BC Global',
  description: 'Bespoke research solutions: business research, customer experience, impact assessment, geolocation services. Advisory across the full business lifecycle.',
}

const lifecycleStages = [
  {
    num: '01',
    stage: 'Inception',
    tagline: 'Enter the market with confidence',
    services: ['Go-To-Market Strategy', 'Business Plan', 'Market Feasibility', 'Go/No-Go Decision', 'Market Entry Strategy'],
    color: '#E8A020',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-accent',
    dot: 'bg-accent',
    textColor: 'text-accent',
  },
  {
    num: '02',
    stage: 'Growth',
    tagline: 'Scale smart, outpace rivals',
    services: ['Product Strategy', 'Customer Growth', 'Partner Evaluation', 'Distribution Strategy', 'Pricing Strategy'],
    color: '#2B4A8C',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-primary',
    dot: 'bg-primary',
    textColor: 'text-primary',
  },
  {
    num: '03',
    stage: 'Maturity',
    tagline: 'Defend position, optimise returns',
    services: ['Network Optimization Strategy', 'Customer Retention Programs', 'Brand Health Tracking', 'Channel Efficiency Review'],
    color: '#7D2B5E',
    bg: 'from-purple-50 to-pink-50',
    border: 'border-plum',
    dot: 'bg-plum',
    textColor: 'text-plum',
  },
  {
    num: '04',
    stage: 'Renewal',
    tagline: 'Pivot, diversify, grow again',
    services: ['Diversification Strategy', 'Feasibility Study', 'New Market Assessment', 'Portfolio Rebalancing'],
    color: '#047857',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-600',
    dot: 'bg-emerald-600',
    textColor: 'text-emerald-700',
  },
]

const serviceAreas = [
  {
    id: 'business-research',
    icon: Search,
    title: 'Business Research',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    image: '/capabilities/business-research.jpg',
    services: [
      'Marketing Strategy & Concept Evaluation',
      'Segmentation Studies',
      'Regulatory Environment Evaluation',
      'Market Entry',
      'Competition Mapping',
      'Partner Identification & Evaluation',
      'Market Sizing, Demand Estimation & Brand Share',
      'Supply & Demand Analysis',
      'Industrial Consumer Usage & Satisfaction',
      'Channel Analysis',
      'Online Customer Management',
    ],
  },
  {
    id: 'customer-experience',
    icon: Users,
    title: 'Customer Satisfaction & Experience',
    color: 'text-plum',
    bgColor: 'bg-plum/10',
    image: '/capabilities/customer-satisfaction.png',
    services: [
      'Customer Journey Mapping',
      'Customer Loyalty / Satisfaction',
      'Loyalty & Engagement Programs',
      'Net Promoter Score (NPS)',
      'Mystery Shopping',
      'CX Measure and Management',
      'Channel Analysis',
    ],
  },
  {
    id: 'impact-assessment',
    icon: BarChart2,
    title: 'Impact Assessment',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    image: '/capabilities/impact-assessment.png',
    imagePosition: 'center bottom',
    services: [
      'Corporate Reputation Assessment',
      'Economic Impact Assessment (EIA)',
      'Event Performance — Footfall & Economic Impact',
      'Social Impact Assessment (SIA)',
    ],
  },
  {
    id: 'geolocation-services',
    icon: MapPin,
    title: 'Geolocation-Based Services',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    image: '/capabilities/geolocation.png',
    services: [
      'Catchment Area Assessment',
      'Network Planning — New Location Evaluation',
      'Branch Optimization',
      'Promotion/Event Performance Measurement',
    ],
  },
  {
    id: 'specialist-areas',
    icon: Lightbulb,
    title: 'Other Specialist Areas',
    color: 'text-plum',
    bgColor: 'bg-plum/10',
    image: '/capabilities/specialist-areas.png',
    services: [
      'InFuse — Secondary research-based intelligence solution',
      'Counterfeit Assessment',
      'Co-creation Workshops for Business Strategy',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        headline="Research Services"
        subheadline="Bespoke research solutions for every stage of your business lifecycle"
      />

      {/* Business Lifecycle */}
      <section id="business-lifecycle-advisory" className="bg-white section-padding overflow-hidden">
        <div className="container-content">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag">Advisory Services</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              We Support You at Every Stage of Growth
            </h2>
            <p className="font-body text-text-muted mt-3 max-w-xl mx-auto">
              From first idea to market renewal — our advisory practice is structured around your business lifecycle.
            </p>
          </AnimatedSection>

          {/* Timeline connector — desktop only */}
          <div className="hidden lg:block relative mb-0">
            {/* Line */}
            <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px z-0" style={{ background: 'linear-gradient(to right, #E8A020, #2B4A8C, #7D2B5E, #047857)' }} />
            {/* Dots on the line */}
            <div className="relative z-10 grid grid-cols-4 text-center">
              {lifecycleStages.map((s) => (
                <div key={s.num} className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-full ${s.dot} flex items-center justify-center shadow-lg mb-0`}
                  >
                    <span className="font-heading font-medium text-white text-base">{s.num}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {lifecycleStages.map((stage, i) => (
              <AnimatedSection key={stage.stage} delay={i * 0.1}>
                <div className={`relative h-full rounded-2xl bg-gradient-to-b ${stage.bg} border ${stage.border} border-opacity-40 p-6 overflow-hidden group hover:shadow-lg transition-all duration-300`}>
                  {/* Large ghost number */}
                  <div
                    className="absolute -right-3 -top-4 font-heading font-medium text-[80px] leading-none select-none pointer-events-none opacity-[0.07]"
                    style={{ color: stage.color }}
                  >
                    {stage.num}
                  </div>

                  {/* Mobile step dot */}
                  <div className={`lg:hidden inline-flex items-center gap-2 ${stage.dot} rounded-full px-3 py-1 mb-4`}>
                    <span className="font-heading font-medium text-white text-xs">{stage.num}</span>
                  </div>

                  <div className={`font-body text-[10px] font-medium uppercase tracking-widest ${stage.textColor} mb-1`}>
                    Stage {stage.num}
                  </div>
                  <h3 className={`font-heading font-medium text-2xl ${stage.textColor} mb-1`}>
                    {stage.stage}
                  </h3>
                  <p className="font-body text-xs text-text-muted italic mb-5 leading-snug">
                    {stage.tagline}
                  </p>

                  <div className="space-y-2">
                    {stage.services.map((svc) => (
                      <div key={svc} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ backgroundColor: stage.color }}
                        />
                        <span className="font-body text-[13px] text-text leading-snug">{svc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                    style={{ backgroundColor: stage.color }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Core Service Areas</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              Comprehensive Research Capabilities
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <AnimatedSection key={area.id} delay={i * 0.1}>
                <div id={area.id} className="overflow-hidden rounded-2xl border border-border h-full group transition-all duration-300 hover:shadow-card-hover hover:border-primary/20 flex flex-col bg-white">

                  {/* ── Photo header ── */}
                  <div className="relative overflow-hidden" style={{ height: 160 }}>
                    {area.image && (
                      <div
                        className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${area.image})`, backgroundPosition: (area as any).imagePosition ?? 'center' }}
                      />
                    )}
                    {/* gradient so title is always legible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Icon + Title overlaid at bottom of photo */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center flex-shrink-0">
                        <area.icon size={20} className="text-white" />
                      </div>
                      <h3 className="font-heading font-medium text-[18px] text-white leading-snug">{area.title}</h3>
                    </div>
                  </div>

                  {/* ── Service list ── */}
                  <div className="p-5 flex-1">
                    <ul className="space-y-2.5">
                      {area.services.map((svc) => (
                        <li key={svc} className="flex items-start gap-2.5">
                          <span className="text-accent font-bold mt-0.5 flex-shrink-0 text-sm">›</span>
                          <span className="font-body text-[13.5px] text-text-muted leading-snug">{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Banner */}
      <section className="relative overflow-hidden section-padding" style={{ background: '#0F1320' }}>
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark/50 pointer-events-none" />
        <div className="container-content relative z-10">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-medium text-3xl text-white mb-2">
              Diagnose · Design · Blend
            </h2>
            <p className="font-body text-gray-400 text-lg">
              Methodology neutral, client-first, results-driven.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Diagnose', desc: 'Deep discovery sessions to understand your specific business challenge before prescribing any methodology.' },
              { title: 'Design', desc: 'Craft a bespoke research approach tailored to your objectives, budget, and market dynamics.' },
              { title: 'Blend', desc: 'Combine quantitative, qualitative, and secondary research techniques for the most complete picture.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="bg-dark-surface border border-white/10 rounded-card p-6 text-center">
                  <div className="font-heading font-medium text-2xl text-accent mb-2">{item.title}</div>
                  <p className="font-body text-sm text-gray-400">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center">
            <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
              Talk to Us About Your Challenge
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
