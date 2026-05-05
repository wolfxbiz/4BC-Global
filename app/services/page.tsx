import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Users, BarChart2, MapPin, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
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
      <section id="business-lifecycle-advisory" className="bg-bg-soft section-padding overflow-hidden">
        <div className="container-content">

          {/* Header */}
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">Advisory Services</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
              <GradientText hoverOnly animationSpeed={2}>We Support You at Every Stage of Growth</GradientText>
            </h2>
            <p className="font-body text-text-muted text-lg max-w-xl mx-auto">
              From first idea to market renewal — our advisory practice is structured around your business lifecycle.
            </p>
          </AnimatedSection>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifecycleStages.map((stage, i) => (
              <AnimatedSection key={stage.stage} delay={i * 0.1}>
                <div
                  className="relative h-full rounded-2xl bg-white border overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
                  style={{ borderColor: stage.color + '40' }}
                >
                  {/* Coloured top bar */}
                  <div className="h-1.5 w-full flex-shrink-0" style={{ backgroundColor: stage.color }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Large display number */}
                    <span
                      className="font-heading font-black text-[72px] leading-none block mb-3"
                      style={{ color: stage.color + '30' }}
                    >
                      {stage.num}
                    </span>

                    {/* Stage label */}
                    <span
                      className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] mb-1"
                      style={{ color: stage.color }}
                    >
                      Stage {stage.num}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-heading font-bold text-[26px] leading-tight mb-1"
                      style={{ color: stage.color }}
                    >
                      {stage.stage}
                    </h3>

                    {/* Tagline */}
                    <p className="font-body text-[12px] text-text-muted italic mb-5 leading-snug">
                      {stage.tagline}
                    </p>

                    {/* Divider */}
                    <div className="h-px mb-5" style={{ backgroundColor: stage.color + '25' }} />

                    {/* Services list */}
                    <div className="space-y-2.5 flex-1">
                      {stage.services.map((svc) => (
                        <div key={svc} className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]"
                            style={{ backgroundColor: stage.color }}
                          />
                          <span className="font-body text-[13px] text-text leading-snug">{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              <GradientText hoverOnly animationSpeed={2}>Comprehensive Research Capabilities</GradientText>
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
      <section className="relative overflow-hidden section-padding bg-white">
        <div className="container-content relative z-10">

          {/* Header */}
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">Our Methodology</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
              How we approach every engagement
            </h2>
            <p className="font-body text-text-muted text-lg max-w-[44ch] mx-auto">
              Methodology neutral, client-first, results-driven.
            </p>
          </AnimatedSection>

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                num: '01',
                title: 'Diagnose',
                subtitle: 'Understand before prescribing',
                desc: 'Every engagement starts with deep discovery sessions to fully understand your specific business challenge before any methodology is prescribed.',
                bg: 'bg-amber-50', border: 'border-amber-200', numColor: 'text-amber-400', titleColor: 'text-amber-900', tagBg: 'bg-amber-100', tagText: 'text-amber-700',
              },
              {
                num: '02',
                title: 'Design',
                subtitle: 'Bespoke, not templated',
                desc: 'We craft a research approach tailored to your objectives, available information, budget, and the market dynamics at play — never a one-size-fits-all solution.',
                bg: 'bg-blue-50', border: 'border-blue-200', numColor: 'text-blue-400', titleColor: 'text-blue-900', tagBg: 'bg-blue-100', tagText: 'text-blue-700',
              },
              {
                num: '03',
                title: 'Blend',
                subtitle: 'The complete picture',
                desc: 'Quantitative rigour, qualitative depth, and strategic secondary research — combined in the right proportions to deliver findings you can act on with confidence.',
                bg: 'bg-purple-50', border: 'border-purple-200', numColor: 'text-purple-400', titleColor: 'text-purple-900', tagBg: 'bg-purple-100', tagText: 'text-purple-700',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className={`${item.bg} border ${item.border} rounded-2xl p-7 h-full flex flex-col`}>
                  <span className={`font-heading font-black text-[72px] leading-none ${item.numColor} block mb-4`}>{item.num}</span>
                  <span className={`inline-block self-start text-[11px] font-semibold uppercase tracking-wider ${item.tagBg} ${item.tagText} rounded-full px-3 py-1 mb-4`}>
                    {item.subtitle}
                  </span>
                  <h3 className={`font-heading font-bold text-[26px] ${item.titleColor} mb-3 leading-tight`}>{item.title}</h3>
                  <p className="font-body text-[14px] text-text-muted leading-relaxed flex-1">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
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
