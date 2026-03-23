import Link from 'next/link'
import { Search, Users, BarChart2, MapPin, Zap, Map, TrendingUp, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StatCounter from '@/components/StatCounter'
import TestimonialSlider from '@/components/TestimonialSlider'
import LogoStrip from '@/components/LogoStrip'

const stats = [
  { label: 'Registered Offices', value: 2, suffix: '' },
  { label: 'Partner Offices', value: 4, suffix: '' },
  { label: 'Countries Covered', value: 40, suffix: '+' },
  { label: 'Engagements Executed', value: 450, suffix: '+' },
  { label: 'Years Cumulative Experience', value: 100, suffix: '+' },
]

const whoWeAre = [
  {
    title: 'Origins',
    body: '4BC Global (formerly 4SiGHT Business Consulting) is a specialist research firm with origins in Kantar — established in 2020 in Dubai to deliver tailor-made research for the MEA region.',
  },
  {
    title: 'What We Do',
    body: 'We provide bespoke B2B and B2C market research solutions — from market entry strategy and competitor intelligence to customer experience programs and socio-economic impact assessments.',
  },
  {
    title: 'How We Do It',
    body: 'Our method-neutral approach means we diagnose your business challenge first, then design the optimal research methodology — blending quantitative rigor, qualitative depth, and strategic secondary research.',
  },
]

const services = [
  {
    icon: Search,
    title: 'Business Research',
    description: 'Market entry, sizing, competitor mapping, channel analysis',
    href: '/services#business-research',
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'CX programs, mystery shopping, NPS, loyalty',
    href: '/services#customer-experience',
  },
  {
    icon: BarChart2,
    title: 'Impact Assessment',
    description: 'SIA, EIA, corporate reputation, event footfall',
    href: '/services#impact-assessment',
  },
  {
    icon: MapPin,
    title: 'Geolocation Services',
    description: 'Network planning, branch optimization, catchment analysis',
    href: '/services#geolocation-services',
  },
]

const sectors = [
  'Retail & Food', 'Banking & Finance', 'Real Estate', 'Fuels & Energy',
  'Industrial', 'Logistics', 'Telecom & ICT', 'Education',
  'Metal Industries', 'Government', 'Conglomerates', 'FMCG/CPG',
]

const tools = [
  {
    title: '4BC InFuse',
    description: 'Secondary intelligence platform for industry landscapes and competitive profiling',
    icon: Search,
  },
  {
    title: '4BC Landscape',
    description: 'Geo-mapping tool for retail network planning and location intelligence',
    icon: Map,
  },
  {
    title: '4BC ImpactIQ',
    description: 'Socio-economic impact measurement framework for events, projects, and programs',
    icon: TrendingUp,
  },
]

const caseStudies = [
  {
    tag: 'Retail',
    title: 'Identifying potential locations to expand grocery store network',
    location: 'UAE',
    href: '/case-studies#cs-01',
  },
  {
    tag: 'Transport / Fintech',
    title: 'Opportunity assessment for digitalization of minibus taxis',
    location: 'South Africa',
    href: '/case-studies#cs-02',
  },
  {
    tag: 'Oil & Gas',
    title: 'Customer Satisfaction study for a major O&G business',
    location: 'UAE',
    href: '/case-studies#cs-07',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-gradient-hero relative overflow-hidden min-h-[580px] flex items-center">
        {/* Decorative world map overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAwIiBjeT0iMzAwIiByPSIyNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjYwMCIgY3k9IjMwMCIgcj0iMTUwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMCIgeTE9IjMwMCIgeDI9IjEyMDAiIHkyPSIzMDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjYwMCIgeTE9IjAiIHgyPSI2MDAiIHkyPSI2MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] bg-cover bg-center" />
        <div className="container-content relative z-10 py-24 md:py-32">
          <AnimatedSection className="max-w-2xl">
            <div className="h-[3px] w-16 bg-gradient-accent rounded-full mb-6" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Tailored Market Intelligence for the Middle East & Africa
            </h1>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              4BC Global is a specialist research firm that transforms complex business challenges into accurate, actionable insights — for B2B and B2C enterprises across the MEA region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary text-center">
                Explore Our Services
              </Link>
              <Link href="/case-studies" className="btn-secondary-dark text-center">
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-dark py-12 px-4">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <StatCounter target={stat.value} suffix={stat.suffix} />
                <p className="font-body text-sm text-gray-400 mt-2">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Who We Are</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              Research-Led. MEA-Focused. Results-Driven.
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoWeAre.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="card h-full">
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">{item.title}</h3>
                  <p className="font-body text-text-muted leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES QUICK ICONS ─── */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Our Services</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              What We Do
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <a href={svc.href} className="card flex flex-col gap-4 h-full hover:border-primary/30 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svc.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text">{svc.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{svc.description}</p>
                  <span className="text-plum text-sm font-medium mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTORS ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-10">
            <span className="section-tag">Sectors We Serve</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              Deep Expertise Across Industries
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center">
              {sectors.map((sector) => (
                <a
                  key={sector}
                  href="/sectors"
                  className="font-body text-sm font-medium text-text-muted border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {sector}
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/sectors" className="btn-secondary">
                View All Sectors →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROPRIETARY TOOLS ─── */}
      <section className="bg-dark section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-accent mb-3 inline-block">Proprietary Tools</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Intelligence Platforms Built for MEA
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <AnimatedSection key={tool.title} delay={i * 0.15}>
                <div className="bg-dark-surface border border-white/10 rounded-card p-8 h-full hover:border-accent/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <tool.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-3">{tool.title}</h3>
                  <p className="font-body text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/tools" className="btn-primary">
              Explore Our Tools →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDIES ─── */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Case Studies</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              Real Challenges. Real Outcomes.
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.15}>
                <a href={cs.href} className="card flex flex-col gap-3 h-full group hover:border-primary/30 transition-colors">
                  <span className="text-xs font-heading font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full px-3 py-1 self-start">
                    {cs.tag}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-text group-hover:text-primary transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted">📍 {cs.location}</p>
                  <span className="text-plum text-sm font-medium mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/case-studies" className="btn-secondary">
              View All Case Studies →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CLIENT LOGO WALL ─── */}
      <section className="bg-white py-16 px-4">
        <div className="container-content">
          <AnimatedSection className="text-center mb-10">
            <span className="section-tag">Our Clients</span>
            <h2 className="font-heading font-bold text-3xl text-text">
              Trusted by Industry Leaders
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <LogoStrip />
          </AnimatedSection>
          <AnimatedSection className="text-center mt-8">
            <Link href="/clients" className="btn-secondary">
              View All Clients →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-dark section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-accent mb-3 inline-block">What Clients Say</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Trusted by Decision-Makers
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="bg-primary py-20 px-4" style={{ background: 'linear-gradient(135deg, #4B2C7A 0%, #6B3FA0 100%)' }}>
        <div className="container-content text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 max-w-2xl mx-auto">
              For decision-makers who need insights tailored to their reality — not generic market reports.
            </h2>
            <p className="font-body text-gray-300 mb-8">
              Let us design the right research for your challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Proposal
              </Link>
              <Link href="/contact" className="btn-secondary-dark">
                Talk to Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
