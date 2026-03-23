import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plus, Search, Map, TrendingUp, MapPin, Users, BarChart2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StatCounter from '@/components/StatCounter'
import TestimonialSlider from '@/components/TestimonialSlider'
import ServicesTabs from '@/components/ServicesTabs'
import FaqAccordion from '@/components/FaqAccordion'
import LogoStrip from '@/components/LogoStrip'

const clients = ['VISA', 'ENOC', 'Unilever', 'Nestlé', 'Toyota', 'Shell', 'DP World', 'Samsung', 'Aramco', 'ADCB']

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

const sectors = [
  { name: 'Retail & Food', wide: true },
  { name: 'Banking & Finance', wide: true },
  { name: 'Real Estate', wide: false },
  { name: 'Fuels & Energy', wide: false },
  { name: 'Industrial', wide: false },
  { name: 'Telecom & ICT', wide: false },
  { name: 'FMCG / CPG', wide: false },
  { name: 'Logistics', wide: false },
  { name: 'Government', wide: false },
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

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="bg-dark relative min-h-[600px] flex items-center overflow-hidden pb-20">
        {/* Background image */}
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark/40" />
        {/* Subtle decorative arcs */}
        <div className="absolute right-0 top-0 w-[55%] h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
            <circle cx="500" cy="300" r="350" stroke="white" strokeWidth="1" />
            <circle cx="500" cy="300" r="250" stroke="white" strokeWidth="0.5" />
            <circle cx="500" cy="300" r="150" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container-content relative z-10 pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left — text */}
            <AnimatedSection>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.12] mb-5">
                Confident decisions start with the right{' '}
                <span className="text-accent">B2B & B2C market research</span>{' '}
                advisory for MEA.
              </h1>
              <p className="font-body text-base text-gray-400 leading-relaxed mb-8 max-w-lg">
                Count on real insights from the specialist firm with 100+ years cumulative MEA experience, validated data, and proven expertise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-semibold text-[15px] rounded-full px-7 py-3.5 hover:bg-accent-warm transition-colors"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            {/* Right — hero image: body clipped in circle, head overflows */}
            <AnimatedSection delay={0.15} className="flex items-center justify-center lg:justify-end relative">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border border-accent/20" />
                {/* Circle — smaller on mobile, larger on desktop */}
                <div className="w-[320px] h-[320px] md:w-[350px] md:h-[350px] lg:w-[370px] lg:h-[370px] rounded-full bg-gradient-to-br from-primary/30 to-plum/20 border-[3px] border-white/15 overflow-hidden relative">
                  <div className="absolute -top-[40px] md:-top-[50px] lg:-top-[60px] left-1/2 -translate-x-1/2 w-[330px] md:w-[360px] lg:w-[380px] h-[400px] md:h-[450px] lg:h-[500px]">
                    <Image
                      src="/images/bslady.png"
                      alt="Market research professional"
                      fill
                      className="object-contain object-top"
                      priority
                    />
                  </div>
                </div>
                {/* Floating bar chart decoration */}
                <div className="absolute -top-6 -right-2 w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30 backdrop-blur-sm z-10">
                  <BarChart2 size={20} className="text-accent" />
                </div>
                {/* Stats badge */}
                <div className="absolute -bottom-4 -left-4 lg:-left-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 lg:px-5 py-2.5 lg:py-3 text-center z-10">
                  <div className="font-body text-[9px] lg:text-[10px] text-white/60 uppercase tracking-widest mb-1">Spun out from Kantar · Est. 2020</div>
                  <div className="font-heading font-bold text-white text-base lg:text-lg">450+ Engagements</div>
                  <div className="font-body text-[10px] lg:text-[11px] text-accent tracking-wide">40+ Countries · MEA Specialist</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Wave divider — 2 smooth curves */}
        <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 L0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,80 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ─── 2. CLIENT LOGOS — marquee ─── */}
      <section className="bg-white py-10 overflow-hidden">
        <LogoStrip />
      </section>

      {/* ─── 3. APPROACH ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left */}
            <AnimatedSection>
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-plum mb-4 inline-block">Approach</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text leading-tight mb-4">
                Market insights you can believe in
              </h2>
              <p className="font-body text-base text-primary font-medium leading-relaxed mb-4">
                There is a better way to do B2B & B2C market research for MEA. One that gives you confidence in critical business decisions.
              </p>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-3">
                We are a specialist research firm that designs and delivers custom qualitative and quantitative research studies — from market entry assessments to customer experience programs and network planning.
              </p>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-8">
                It starts with getting the basics right. That means real primary data collected in-market, a method-neutral research process, and genuine MEA expertise. The result? Insights that have a real impact on your business decisions.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-semibold text-[14px] rounded-full px-6 py-3 hover:bg-accent-warm transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            {/* Right — stacked features */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col divide-y divide-border">
                {approachFeatures.map((f, i) => (
                  <div key={f.title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                    <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[15px] text-text mb-1">{f.title}</h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURED CASE STUDY (like "Featured Insight") ─── */}
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
                    <div className="font-heading font-bold text-dark text-xs">Transport</div>
                    <div className="font-body text-[10px] text-dark/70">+ Fintech</div>
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div>
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-accent mb-3 inline-block">Featured Case Study</span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-text leading-tight mb-4">
                  Why B2B & B2C Research Firms Must Prioritize In-Market Data Collection
                </h2>
                <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
                  In our opportunity assessment for a leading card payment company, 4BC Global conducted 500+ in-market interviews across commuters, taxi owners, and taxi associations in South Africa — uncovering a go-to-market strategy for payment digitalization in the informal transport sector.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-accent text-dark font-body font-semibold text-[14px] rounded-full px-6 py-3 hover:bg-accent-warm transition-colors"
                >
                  Read Case Study <ArrowRight size={14} />
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
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-plum mb-3 inline-block">Sectors</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text leading-tight mb-4">
                A research firm that understands your sector
              </h2>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                We pride ourselves on the depth of our sector knowledge across MEA markets.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-3">
                Our experience is based on 450+ engagements across these sectors. The research findings have directed millions of dollars in investments, launched market entries, and helped some of the region's largest enterprises accelerate their growth.
              </p>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                We are trusted by global brands including VISA, ENOC, Unilever, Toyota, DP World, Aramco, and 100+ others across MEA.
              </p>
            </AnimatedSection>
          </div>

          {/* Sector grid — mixed layout like Werk Insight */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Row 1 — 2 wide */}
              <a href="/sectors" className="col-span-2 group flex items-end justify-between border border-border rounded-xl p-5 min-h-[100px] hover:border-primary/40 hover:bg-bg-soft transition-all">
                <span className="font-heading font-medium text-text text-[15px]">Retail & Food Products</span>
                <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-colors flex-shrink-0">
                  <Plus size={13} />
                </div>
              </a>
              <a href="/sectors" className="col-span-2 group flex items-end justify-between border border-border rounded-xl p-5 min-h-[100px] hover:border-primary/40 hover:bg-bg-soft transition-all">
                <span className="font-heading font-medium text-text text-[15px]">Banking & Finance</span>
                <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-colors flex-shrink-0">
                  <Plus size={13} />
                </div>
              </a>
              {/* Row 2 — 3 */}
              {['Real Estate & Construction', 'Fuels, Energy & Environment', 'Industrial'].map((s) => (
                <a key={s} href="/sectors" className="col-span-2 lg:col-span-1 group flex flex-col justify-between border border-border rounded-xl p-4 min-h-[90px] hover:border-primary/40 hover:bg-bg-soft transition-all">
                  <div className="flex justify-end">
                    <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-colors">
                      <Plus size={13} />
                    </div>
                  </div>
                  <span className="font-heading font-medium text-text text-[13px] leading-snug">{s}</span>
                </a>
              ))}
              {/* last of row 2 */}
              <a href="/sectors" className="col-span-2 lg:col-span-1 group flex flex-col justify-between border border-border rounded-xl p-4 min-h-[90px] hover:border-primary/40 hover:bg-bg-soft transition-all">
                <div className="flex justify-end">
                  <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-colors">
                    <Plus size={13} />
                  </div>
                </div>
                <span className="font-heading font-medium text-text text-[13px] leading-snug">Logistics & Transportation</span>
              </a>
              {/* Row 3 — 4 */}
              {['Telecom & ICT', 'FMCG / CPG', 'Government & Regulators', 'Regional Conglomerates'].map((s) => (
                <a key={s} href="/sectors" className="col-span-1 group flex flex-col justify-between border border-border rounded-xl p-4 min-h-[80px] hover:border-primary/40 hover:bg-bg-soft transition-all">
                  <div className="flex justify-end">
                    <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-colors">
                      <Plus size={11} />
                    </div>
                  </div>
                  <span className="font-heading font-medium text-text text-[12px] leading-snug">{s}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 7. TOOLS (dark — like "How we work with clients" video section) ─── */}
      <section className="bg-dark section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-accent mb-4 inline-block">Proprietary Tools</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                Intelligence platforms built for MEA
              </h2>
              <p className="font-body text-sm text-gray-400 leading-relaxed mb-3">
                Our ultimate aim is for our insights to drive meaningful decisions for your organization.
              </p>
              <p className="font-body text-sm text-gray-400 leading-relaxed mb-8">
                We have built three proprietary platforms — InFuse, Landscape, and ImpactIQ — that power our research delivery and give clients a faster path to answers.
              </p>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-semibold text-[14px] rounded-full px-6 py-3 hover:bg-accent-warm transition-colors"
              >
                Explore Our Tools <ArrowRight size={14} />
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
                      <h4 className="font-heading font-semibold text-[14px] text-white mb-1">{tool.name}</h4>
                      <p className="font-body text-xs text-gray-400 leading-relaxed">{tool.desc}</p>
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
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-plum mb-2 inline-block">Featured Case Studies</span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text">Our MEA market research experience</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Link
                href="/case-studies"
                className="hidden sm:inline-flex items-center gap-2 border border-dark text-dark font-body text-[13px] font-medium rounded-full px-5 py-2.5 hover:bg-dark hover:text-white transition-all"
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
                    <span className="font-body text-[11px] font-semibold tracking-wider uppercase text-plum">{cs.tag}</span>
                    <h3 className="font-heading font-semibold text-[15px] text-text leading-snug group-hover:text-primary transition-colors">{cs.title}</h3>
                    <p className="font-body text-xs text-text-muted leading-relaxed">{cs.excerpt}</p>
                    <div className="mt-auto pt-3">
                      <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-primary group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 border border-dark text-dark font-body text-[13px] font-medium rounded-full px-5 py-2.5 hover:bg-dark hover:text-white transition-all">
              View All Case Studies <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. TESTIMONIALS ─── */}
      <section className="bg-bg-soft py-20 px-4 border-t border-border">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-plum text-center mb-2">Hear From Our Clients</p>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 10. CTA ─── */}
      <section className="bg-white py-20 px-4 text-center border-t border-border">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-plum mb-4">Get in Touch</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-8">
              Ready to Get Started?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-dark font-body font-semibold text-[15px] rounded-full px-8 py-4 hover:bg-accent-warm transition-colors"
            >
              Submit a Request <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 11. FAQ ─── */}
      <FaqAccordion />
    </>
  )
}
