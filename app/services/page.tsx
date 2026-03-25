import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Users, BarChart2, MapPin, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Research Services — 4BC Global',
  description: 'Bespoke research solutions: business research, customer experience, impact assessment, geolocation services. Advisory across the full business lifecycle.',
}

const lifecycleStages = [
  {
    stage: 'Inception',
    services: ['Go-To-Market Strategy', 'Business Plan', 'Market Feasibility', 'Go/No-Go Decision', 'Market Entry Strategy'],
  },
  {
    stage: 'Growth',
    services: ['Product Strategy', 'Customer Growth', 'Partner Evaluation', 'Distribution Strategy', 'Pricing Strategy'],
  },
  {
    stage: 'Maturity',
    services: ['Network Optimization Strategy'],
  },
  {
    stage: 'Decline',
    services: ['Diversification Strategy', 'Feasibility Study'],
  },
]

const serviceAreas = [
  {
    id: 'business-research',
    icon: Search,
    title: 'Business Research',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    services: [
      'Market Entry',
      'Market Sizing, Demand Estimation & Brand Share',
      'Competition Mapping',
      'Channel Analysis',
      'Partner Identification & Evaluation',
      'Regulatory Environment Evaluation',
      'Supply & Demand Analysis',
      'Industrial Consumer Usage & Satisfaction',
      'Online Customer Management',
    ],
  },
  {
    id: 'customer-experience',
    icon: Users,
    title: 'Customer Satisfaction & Experience',
    color: 'text-plum',
    bgColor: 'bg-plum/10',
    services: [
      'Customer Loyalty / Satisfaction',
      'Mystery Shopping',
      'Loyalty & Engagement Programs',
      'Net Promoter Score (NPS)',
      'Customer Journey Mapping',
      'B2B CX Studies',
      'Channel Analysis',
    ],
  },
  {
    id: 'impact-assessment',
    icon: BarChart2,
    title: 'Impact Assessment',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    services: [
      'Social Impact Assessment (SIA)',
      'Economic Impact Assessment (EIA)',
      'Corporate Reputation Assessment',
      'Event Performance — Footfall & Economic Impact',
    ],
  },
  {
    id: 'geolocation-services',
    icon: MapPin,
    title: 'Geolocation-Based Services',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    services: [
      'Network Planning — New Location Evaluation',
      'Branch Optimization',
      'Catchment Area Assessment',
      'Event Performance Mapping',
    ],
  },
  {
    id: 'specialist-areas',
    icon: Lightbulb,
    title: 'Other Specialist Areas',
    color: 'text-plum',
    bgColor: 'bg-plum/10',
    services: [
      'InFuse — Secondary research-based intelligence solution',
      'Segmentation Studies',
      'Marketing Strategy & Concept Evaluation',
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
      <section id="business-lifecycle-advisory" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Advisory Services</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              We Support You at Every Stage of Growth
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleStages.map((stage, i) => (
              <AnimatedSection key={stage.stage} delay={i * 0.1}>
                <div className="card h-full border-t-4 border-t-primary">
                  <div className="text-xs font-heading font-medium tracking-widest uppercase text-text-muted mb-2">Stage</div>
                  <h3 className="font-heading font-medium text-xl text-primary mb-4">{stage.stage}</h3>
                  <ul className="space-y-2">
                    {stage.services.map((svc) => (
                      <li key={svc} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-accent mt-1 flex-shrink-0" />
                        <span className="font-body text-sm text-text-muted">{svc}</span>
                      </li>
                    ))}
                  </ul>
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
                <div id={area.id} className="card h-full group hover:border-primary/30 transition-colors">
                  <div className={`w-12 h-12 rounded-xl ${area.bgColor} flex items-center justify-center mb-4`}>
                    <area.icon size={24} className={area.color} />
                  </div>
                  <h3 className="font-heading font-medium text-xl text-text mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.services.map((svc) => (
                      <li key={svc} className="flex items-start gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">›</span>
                        <span className="font-body text-sm text-text-muted">{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Banner */}
      <section className="bg-dark section-padding">
        <div className="container-content">
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
            <Link href="/contact" className="btn-primary">
              Talk to Us About Your Challenge →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
