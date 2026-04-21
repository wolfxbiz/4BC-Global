'use client'
import { useState } from 'react'
import { ArrowRight, BarChart2, Users, Zap, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import GradientText from '@/components/GradientText'

const tabs = [
  {
    label: 'Business Research',
    icon: BarChart2,
    links: [
      { text: 'Market Entry & Sizing', href: '/services#business-research' },
      { text: 'Competition Mapping', href: '/services#business-research' },
      { text: 'Channel Analysis', href: '/services#business-research' },
      { text: 'Partner Identification', href: '/services#business-research' },
    ],
    description: 'B2B clients have complex buying needs. Our Business Research practice helps you understand market size, competitive dynamics, and channel structures — so every strategic decision is backed by data, not assumption.',
  },
  {
    label: 'Customer Experience',
    icon: Users,
    links: [
      { text: 'Customer Satisfaction & NPS', href: '/services#customer-experience' },
      { text: 'Mystery Shopping', href: '/services#customer-experience' },
      { text: 'Customer Journey Mapping', href: '/services#customer-experience' },
      { text: 'B2B CX Programs', href: '/services#customer-experience' },
    ],
    description: 'Understanding how your customers experience your brand is critical for retention and growth. We design and execute bespoke CX programs that surface what your customers truly think — and what to do about it.',
  },
  {
    label: 'Impact Assessment',
    icon: Zap,
    links: [
      { text: 'Social Impact Assessment (SIA)', href: '/services#impact-assessment' },
      { text: 'Economic Impact Assessment (EIA)', href: '/services#impact-assessment' },
      { text: 'Corporate Reputation', href: '/services#impact-assessment' },
      { text: 'Event Footfall & Economic Impact', href: '/services#impact-assessment' },
    ],
    description: 'Our ImpactIQ framework measures the socio-economic contribution of events, projects, and programs — giving governments and corporates the evidence they need to communicate value and shape policy.',
  },
  {
    label: 'Geolocation Services',
    icon: MapPin,
    links: [
      { text: 'Network Planning', href: '/services#geolocation-services' },
      { text: 'Branch Optimization', href: '/services#geolocation-services' },
      { text: 'Catchment Area Assessment', href: '/services#geolocation-services' },
      { text: 'Competitive Footprint Mapping', href: '/services#geolocation-services' },
    ],
    description: 'Our 4BC Landscape platform combines demographic data, competitor mapping, and geo-analytics to help you open the right locations, optimize your network, and understand your catchment areas with precision.',
  },
]

export default function ServicesTabs() {
  const [active, setActive] = useState(0)

  return (
    <div className="bg-white section-padding">
      <div className="container-content">
        {/* Section header */}
        <div className="mb-10">
          <span className="font-body text-xs font-medium tracking-widest uppercase text-primary inline-block mb-1">Capabilities</span>
          <div className="h-[3px] w-10 bg-accent rounded-full mb-4" />
          <h2 className="font-heading font-medium text-4xl md:text-5xl text-text">
            <GradientText hoverOnly animationSpeed={2}>Our market research services</GradientText>
          </h2>
        </div>

        {/* 3-column layout — separate cards with gap */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] gap-4 items-start">

          {/* Left — tab buttons card */}
          <div className="flex flex-col rounded-2xl border border-border bg-white shadow-card overflow-hidden">
            {tabs.map((tab, i) => {
              const Icon = tab.icon
              const isActive = active === i
              return (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  className={`relative text-left px-6 py-5 font-body text-[16px] transition-all duration-200 border-b border-border/60 last:border-b-0 flex items-center gap-4 ${
                    isActive
                      ? 'bg-dark text-white'
                      : 'text-text-muted hover:bg-bg-soft hover:text-text'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-accent"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-r"
                    />
                  )}
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    isActive ? 'bg-white/15' : 'bg-bg-soft'
                  }`}>
                    <Icon size={17} className={isActive ? 'text-accent' : 'text-text-muted'} />
                  </span>
                  <span className={isActive ? 'font-medium' : ''}>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Center — service links card */}
          <div className="rounded-2xl border border-border bg-white shadow-card overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="px-8 py-8 flex flex-col"
              >
                <p className="font-body text-[12px] font-medium tracking-widest uppercase text-text-muted/50 mb-4">
                  {String(active + 1).padStart(2, '0')} / {String(tabs.length).padStart(2, '0')}
                </p>
                <h3 className="font-heading font-medium text-2xl text-text mb-6 leading-tight">
                  {tabs[active].label}
                </h3>
                <div className="flex flex-col gap-2">
                  {tabs[active].links.map((link, li) => (
                    <motion.a
                      key={link.text}
                      href={link.href}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: li * 0.05, duration: 0.15 }}
                      className="flex items-center justify-between gap-3 font-body text-[17px] font-medium text-primary px-4 py-3.5 rounded-xl hover:bg-primary/5 hover:text-dark transition-all duration-150 group"
                    >
                      <span>{link.text}</span>
                      <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-dark group-hover:border-dark group-hover:text-white transition-all duration-150">
                        <ArrowRight size={14} />
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — description card */}
          <div className="rounded-2xl border border-border bg-bg-soft shadow-card overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-8 flex flex-col"
              >
                <div className="text-[72px] leading-none font-heading text-primary/20 mb-1 select-none">"</div>
                <p className="font-body text-[16px] text-text-muted leading-[1.85]">
                  {tabs[active].description}
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 mt-8 font-body text-[15px] font-medium text-primary hover:text-dark transition-colors group"
                >
                  Learn more about this service
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  )
}
