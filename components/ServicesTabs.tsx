'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const tabs = [
  {
    label: 'Business Research',
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
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-plum inline-block mb-1">Capabilities</span>
          <div className="h-[3px] w-10 bg-accent rounded-full mb-4" />
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
            Our market research services
          </h2>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] gap-0 rounded-2xl overflow-hidden border border-border bg-bg-soft">

          {/* Left — tab buttons */}
          <div className="flex flex-col">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`text-left px-6 py-5 font-body text-[15px] transition-all duration-200 border-b border-border/60 last:border-b-0 relative ${
                  active === i
                    ? 'bg-dark text-white font-semibold'
                    : 'bg-white text-text-muted hover:bg-bg-soft hover:text-text'
                }`}
              >
                {/* Amber left accent on active */}
                {active === i && (
                  <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent rounded-r" />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center — active tab title + links */}
          <div className="px-8 py-8 border-t lg:border-t-0 lg:border-l border-border/60 flex flex-col justify-center">
            <h3 className="font-heading font-bold text-xl text-text mb-5">{tabs[active].label}</h3>
            <div className="flex flex-col gap-3">
              {tabs[active].links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-3 font-body text-[15px] text-primary font-medium hover:text-dark transition-colors group"
                >
                  <span>{link.text}</span>
                  <span className="w-6 h-6 rounded-full border-[1.5px] border-primary/60 flex items-center justify-center flex-shrink-0 group-hover:border-dark group-hover:bg-dark group-hover:text-white transition-all">
                    <ArrowRight size={12} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — description */}
          <div className="px-8 py-8 border-t lg:border-t-0 lg:border-l border-border/60 flex items-center bg-bg-soft">
            <p className="font-body text-[14px] text-text-muted leading-[1.75]">
              {tabs[active].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
