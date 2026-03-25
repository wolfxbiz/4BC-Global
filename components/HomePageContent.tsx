import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plus, Search, Map, TrendingUp, MapPin, Users, BarChart2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import ServicesTabs from '@/components/ServicesTabs'
import FaqAccordion from '@/components/FaqAccordion'
import LogoStrip from '@/components/LogoStrip'

type Variant = 'dark' | 'amber-light' | 'navy-light' | 'plum-light'

interface HomePageContentProps {
  variant?: Variant
}

const approachFeatures = [
  {
    icon: Users,
    title: 'Senior-led research',
    desc: 'Every engagement is led by practitioners with 15+ years of MEA market research experience — never delegated to junior researchers.',
  },
  {
    icon: Search,
    title: 'Method-neutral approach',
    desc: 'We diagnose your business challenge first, then design the optimal research methodology — not the other way around.',
  },
  {
    icon: MapPin,
    title: 'MEA-specialist expertise',
    desc: 'With 100+ years cumulative experience in the region, we understand the nuance, culture, and complexity of MEA markets.',
  },
]

const tools = [
  { name: '4BC InFuse', desc: 'Secondary intelligence platform for industry landscapes and competitive profiling across MEA.', icon: Search },
  { name: '4BC Landscape', desc: 'Geo-mapping tool for retail network planning and location intelligence.', icon: Map },
  { name: '4BC ImpactIQ', desc: 'Socio-economic impact measurement framework for events, projects, and programs.', icon: TrendingUp },
]

const caseStudies = [
  {
    tag: 'Retail',
    title: 'Identifying potential locations to expand grocery store network',
    excerpt: 'Geo-mapping exercise across Dubai and Abu Dhabi identified high-attractiveness clusters for new store openings.',
    href: '/case-studies',
    image: '/images/case-retail.jpg',
  },
  {
    tag: 'Fintech / Transport',
    title: 'Opportunity assessment for digitalization of minibus taxis',
    excerpt: 'Quantitative and qualitative research across 500+ commuters and taxi stakeholders in South Africa.',
    href: '/case-studies',
    image: '/images/case-fintech.jpg',
  },
  {
    tag: 'Oil & Gas',
    title: 'Customer Satisfaction study for a major O&G business in UAE',
    excerpt: 'Annual CX program across 10+ business lines. Findings contributed to the Dubai Quality Award.',
    href: '/case-studies',
    image: '/images/case-oilgas.jpg',
  },
]

function getGradientColors(variant: Variant): { from: string; mid: string; to: string } {
  switch (variant) {
    case 'dark':        return { from: '#0D0D1E', mid: '#1A1540', to: '#2B1A3A' }
    case 'amber-light': return { from: '#E8A020', mid: '#2B4A8C', to: '#7D2B5E' }
    case 'navy-light':  return { from: '#2B4A8C', mid: '#7D2B5E', to: '#E8A020' }
    case 'plum-light':  return { from: '#7D2B5E', mid: '#E8A020', to: '#2B4A8C' }
  }
}

function getThemeClass(variant: Variant): string {
  switch (variant) {
    case 'amber-light': return 'theme-v2'
    case 'navy-light':  return 'theme-v3'
    case 'plum-light':  return 'theme-v4'
    default:            return ''
  }
}

export default function HomePageContent({ variant = 'dark' }: HomePageContentProps) {
  const themeClass = getThemeClass(variant)
  const gradientColors = getGradientColors(variant)

  const heroStats = [
    { num: '450+', label: 'Engagements' },
    { num: '40+', label: 'Countries' },
    { num: '100+', label: 'Yrs Combined' },
  ]

  const heroContent = (
    /* ─── HERO — full-coverage 3-stop gradient (all variants) ─── */
    <section
      className="relative min-h-[700px] flex items-center overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${gradientColors.from} 0%, ${gradientColors.mid} 50%, ${gradientColors.to} 100%)` }}
    >
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-dark/30 pointer-events-none" />

      {/* Decorative arcs */}
      <div className="absolute right-0 top-0 w-[55%] h-full opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
          <circle cx="500" cy="300" r="400" stroke="white" strokeWidth="1" />
          <circle cx="500" cy="300" r="290" stroke="white" strokeWidth="0.8" />
          <circle cx="500" cy="300" r="180" stroke="white" strokeWidth="0.6" />
        </svg>
      </div>
      {/* Radial highlight — bottom left */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-content relative z-10 pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-8 items-center">

          {/* Left — text */}
          <AnimatedSection>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
              <span className="font-body text-[13px] font-medium text-white/80 tracking-widest uppercase">MEA Market Research Specialists</span>
            </div>

            <h1 className="font-heading font-medium text-4xl md:text-5xl lg:text-[54px] text-white leading-[1.1] mb-5">
              Confident decisions start with the right{' '}
              <span className="text-white/90 underline decoration-white/30 underline-offset-4">B2B & B2C market research</span>{' '}
              advisory for MEA.
            </h1>
            <p className="font-body text-[17px] text-white/65 leading-relaxed mb-9 max-w-[520px]">
              Count on real insights from the specialist firm with 100+ years cumulative MEA experience, validated data, and proven expertise.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-5 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-dark font-body font-medium text-[17px] rounded-full px-8 py-4 hover:bg-white/90 transition-colors shadow-lg"
              >
                Get Started <ArrowRight size={17} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 font-body text-[16px] font-medium text-white/60 hover:text-white transition-colors group"
              >
                View Case Studies <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center border-t border-white/15 pt-7">
              {heroStats.map((s, i) => (
                <div key={s.label} className={`${i > 0 ? 'border-l border-white/15 pl-7 ml-7' : ''}`}>
                  <div className="font-heading font-medium text-2xl text-white leading-none mb-1">{s.num}</div>
                  <div className="font-body text-[13px] text-white/50 tracking-wide">{s.label}</div>
                </div>
              ))}
              <div className="border-l border-white/15 pl-7 ml-7">
                <div className="font-body text-[12px] text-white/35 leading-snug">Spun out from<br />Kantar · Est. 2020</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — image */}
          <AnimatedSection delay={0.15} className="flex items-center justify-center lg:justify-end relative">
            <div className="relative">
              {/* Concentric rings */}
              <div className="absolute -inset-6 rounded-full border border-white/15" />
              <div className="absolute -inset-12 rounded-full border border-white/08" />
              {/* Main circle */}
              <div className="w-[320px] h-[320px] md:w-[350px] md:h-[350px] lg:w-[370px] lg:h-[370px] rounded-full bg-white/15 border-[3px] border-white/30 overflow-hidden relative shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
                <div className="absolute -top-[40px] md:-top-[50px] lg:-top-[60px] left-1/2 -translate-x-1/2 w-[330px] md:w-[360px] lg:w-[380px] h-[400px] md:h-[450px] lg:h-[500px]">
                  <Image src="/images/bslady.png" alt="Market research professional" fill className="object-contain object-top" priority />
                </div>
              </div>
              {/* Icon card */}
              <div className="absolute -top-4 -right-4 lg:-right-6 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/25 z-10">
                <BarChart2 size={20} className="text-white" />
              </div>
              {/* Bottom pill */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                <span className="font-body text-[13px] font-medium text-white/80">Research Based Advisory</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0] pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 L0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,80 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )

  const pageContent = (
    <>
      {/* ─── 1. HERO ─── */}
      {heroContent}

      {/* ─── 2. CLIENT LOGOS — marquee ─── */}
      <section className="bg-white py-10 overflow-hidden">
        <LogoStrip />
      </section>

      {/* ─── 3. APPROACH ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-14 items-center">

            {/* Left */}
            <AnimatedSection>
              <span className="font-body text-sm font-medium tracking-widest uppercase text-plum mb-4 inline-block">Approach</span>
              <h2 className="font-heading font-medium text-4xl md:text-5xl text-text leading-tight mb-5">
                Market insights you can believe in
              </h2>
              <p className="font-body text-lg text-primary font-medium leading-relaxed mb-4">
                There is a better way to do B2B & B2C market research for MEA. One that gives you confidence in critical business decisions.
              </p>
              <p className="font-body text-base text-text-muted leading-relaxed mb-3">
                We are a specialist research firm that designs and delivers custom qualitative and quantitative research studies — from market entry assessments to customer experience programs and network planning.
              </p>
              <p className="font-body text-base text-text-muted leading-relaxed mb-8">
                It starts with getting the basics right. That means real primary data collected in-market, a method-neutral research process, and genuine MEA expertise. The result? Insights that have a real impact on your business decisions.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[16px] rounded-full px-7 py-3.5 hover:bg-accent-warm transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            {/* Right — stacked features */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col divide-y divide-border">
                {approachFeatures.map((f) => (
                  <div key={f.title} className="flex gap-5 py-7 first:pt-0 last:pb-0">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-[18px] text-text mb-2">{f.title}</h3>
                      <p className="font-body text-base text-text-muted leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURED CASE STUDY ─── */}
      <section className="bg-white border-t border-border py-16 px-4">
        <div className="container-content">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left — circular image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-border relative">
                    <Image
                      src="/images/featured-case-study.jpg"
                      alt="South Africa transport research"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Badge overlay */}
                  <div className="absolute bottom-4 right-0 bg-accent rounded-xl px-4 py-2.5 text-center shadow-lg">
                    <div className="font-heading font-medium text-xs">Transport</div>
                    <div className="font-body text-[10px] opacity-70">+ Fintech</div>
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div>
                <span className="font-body text-sm font-medium tracking-widest uppercase text-accent mb-3 inline-block">Featured Case Study</span>
                <h2 className="font-heading font-medium text-3xl md:text-4xl text-text leading-tight mb-5">
                  Why B2B & B2C Research Firms Must Prioritize In-Market Data Collection
                </h2>
                <p className="font-body text-base text-text-muted leading-relaxed mb-7">
                  In our opportunity assessment for a leading card payment company, 4BC Global conducted 500+ in-market interviews across commuters, taxi owners, and taxi associations in South Africa — uncovering a go-to-market strategy for payment digitalization in the informal transport sector.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[16px] rounded-full px-7 py-3.5 hover:bg-accent-warm transition-colors"
                >
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 5. SERVICES TABS ─── */}
      <AnimatedSection>
        <ServicesTabs />
      </AnimatedSection>

      {/* ─── 6. SECTORS / INDUSTRIES ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <AnimatedSection>
              <span className="font-body text-sm font-medium tracking-widest uppercase text-plum mb-3 inline-block">Sectors</span>
              <h2 className="font-heading font-medium text-4xl md:text-5xl text-text leading-tight mb-4">
                A research firm that understands your sector
              </h2>
              <p className="font-body text-base text-text-muted leading-relaxed">
                We pride ourselves on the depth of our sector knowledge across MEA markets.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-body text-base text-text-muted leading-relaxed mb-3">
                Our experience is based on 450+ engagements across these sectors. The research findings have directed millions of dollars in investments, launched market entries, and helped some of the region's largest enterprises accelerate their growth.
              </p>
              <p className="font-body text-base text-text-muted leading-relaxed">
                We are trusted by global brands including VISA, ENOC, Unilever, Toyota, DP World, Aramco, and 100+ others across MEA.
              </p>
            </AnimatedSection>
          </div>

          {/* Sector grid */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Row 1 — 2 wide */}
              {['Retail & Food Products', 'Banking & Finance'].map((s) => (
                <a key={s} href="/sectors" className="col-span-2 group relative flex items-end justify-between border border-border rounded-2xl p-6 min-h-[120px] hover:border-primary/30 hover:shadow-card transition-all duration-200 bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <span className="font-heading font-medium text-text text-[19px] relative z-10">{s}</span>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <Plus size={14} strokeWidth={2.5} />
                  </div>
                </a>
              ))}
              {/* Row 2 — 4 */}
              {['Real Estate & Construction', 'Fuels, Energy & Environment', 'Industrial', 'Logistics & Transportation'].map((s) => (
                <a key={s} href="/sectors" className="col-span-2 lg:col-span-1 group relative flex flex-col justify-between border border-border rounded-2xl p-5 min-h-[110px] hover:border-primary/30 hover:shadow-card transition-all duration-200 bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="flex justify-end relative z-10">
                    <div className="w-7 h-7 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                      <Plus size={13} className="text-text-muted group-hover:text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <span className="font-heading font-medium text-text text-[15px] leading-snug relative z-10">{s}</span>
                </a>
              ))}
              {/* Row 3 — 4 */}
              {['Telecom & ICT', 'FMCG / CPG', 'Government & Regulators', 'Regional Conglomerates'].map((s) => (
                <a key={s} href="/sectors" className="col-span-1 group relative flex flex-col justify-between border border-border rounded-2xl p-4 min-h-[100px] hover:border-primary/30 hover:shadow-card transition-all duration-200 bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="flex justify-end relative z-10">
                    <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                      <Plus size={11} className="text-text-muted group-hover:text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <span className="font-heading font-medium text-text text-[14px] leading-snug relative z-10">{s}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 7. TOOLS (dark) ─── */}
      <section className="bg-dark section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="font-body text-sm font-medium tracking-widest uppercase text-accent mb-4 inline-block">Proprietary Tools</span>
              <h2 className="font-heading font-medium text-4xl md:text-5xl text-white leading-tight mb-5">
                Intelligence platforms built for MEA
              </h2>
              <p className="font-body text-base text-gray-400 leading-relaxed mb-3">
                Our ultimate aim is for our insights to drive meaningful decisions for your organization.
              </p>
              <p className="font-body text-base text-gray-400 leading-relaxed mb-8">
                We have built three proprietary platforms — InFuse, Landscape, and ImpactIQ — that power our research delivery and give clients a faster path to answers.
              </p>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[16px] rounded-full px-7 py-3.5 hover:bg-accent-warm transition-colors"
              >
                Explore Our Tools <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex gap-4 bg-dark-surface border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <tool.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-[17px] text-white mb-1">{tool.name}</h4>
                      <p className="font-body text-sm text-gray-400 leading-relaxed">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 8. FEATURED CASE STUDIES ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="flex items-end justify-between mb-8">
            <AnimatedSection>
              <span className="font-body text-sm font-medium tracking-widest uppercase text-plum mb-2 inline-block">Featured Case Studies</span>
              <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">Our MEA market research experience</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Link
                href="/case-studies"
                className="hidden sm:inline-flex items-center gap-2 border border-dark text-dark font-body text-[15px] font-medium rounded-full px-6 py-3 hover:bg-dark hover:text-white transition-all"
              >
                View All Case Studies <ArrowRight size={13} />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.1}>
                <a href={cs.href} className="group flex flex-col border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-card-hover transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <span className="font-body text-[13px] font-medium tracking-wider uppercase text-plum">{cs.tag}</span>
                    <h3 className="font-heading font-medium text-[18px] text-text leading-snug group-hover:text-primary transition-colors">{cs.title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{cs.excerpt}</p>
                    <div className="mt-auto pt-3">
                      <span className="inline-flex items-center gap-1.5 font-body text-[15px] font-medium text-primary group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 border border-dark text-dark font-body text-[15px] font-medium rounded-full px-6 py-3 hover:bg-dark hover:text-white transition-all">
              View All Case Studies <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. TESTIMONIALS ─── */}
      <section className="bg-bg-soft py-20 px-4 border-t border-border">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-body text-sm font-medium tracking-widest uppercase text-plum text-center mb-2">Hear From Our Clients</p>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 10. CTA ─── */}
      <section className="bg-white py-20 px-4 text-center border-t border-border">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-body text-sm font-medium tracking-widest uppercase text-plum mb-4">Get in Touch</p>
            <h2 className="font-heading font-medium text-4xl md:text-5xl text-text mb-8">
              Ready to Get Started?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[17px] rounded-full px-9 py-4.5 hover:bg-accent-warm transition-colors"
            >
              Submit a Request <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 11. FAQ ─── */}
      <FaqAccordion />
    </>
  )

  if (!themeClass) {
    return pageContent
  }

  return (
    <div className={themeClass}>
      {pageContent}
    </div>
  )
}
