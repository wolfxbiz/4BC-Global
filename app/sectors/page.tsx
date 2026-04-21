import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import LogoStrip from '@/components/LogoStrip'
import { sectors } from '@/lib/sectors-data'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

export const metadata: Metadata = {
  title: 'Sectors We Serve — 4BC Global',
  description: '450+ engagements across 12 sectors in MEA. Retail, banking, energy, logistics, telecom and more.',
}

const caseStudies = [
  {
    tag: 'Retail',
    title: 'Identifying Locations to Expand a Grocery Store Network',
    excerpt: 'Geo-mapping exercise across Dubai and Abu Dhabi identified high-attractiveness clusters for new store openings.',
    image: '/images/case-retail.jpg',
    href: '/case-studies',
  },
  {
    tag: 'Fintech / Transport',
    title: 'Opportunity Assessment for Digitalization of Minibus Taxis',
    excerpt: 'Quantitative and qualitative research across 500+ commuters and taxi stakeholders in South Africa.',
    image: '/images/case-fintech.jpg',
    href: '/case-studies',
  },
  {
    tag: 'Oil & Gas',
    title: 'Customer Satisfaction Study for a Major O&G Business in UAE',
    excerpt: 'Annual CX program across 10+ business lines. Findings contributed to the Dubai Quality Award.',
    image: '/images/case-oilgas.jpg',
    href: '/case-studies',
  },
]

const researchTypes = [
  'Market Sizing & Demand Estimation',
  'Competitive Intelligence',
  'Customer Satisfaction & NPS',
  'Market Entry Strategy',
  'Channel & Network Planning',
  'Feasibility Studies',
  'Brand Health Tracking',
  'Geo-mapping & Location Intelligence',
]

export default function SectorsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[780px] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Sectors hero"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-primary/80 to-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 container-content py-16 pt-28 sm:py-24 sm:pt-36 lg:py-36 lg:pt-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left — headline */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="font-body text-[12px] text-white/75 tracking-widest uppercase">11 Sectors · 450+ Engagements</span>
              </div>
              <h1 className="font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.07] mb-6">
                Deep Expertise Across<br />
                <span className="text-accent">MEA's Key Industries</span>
              </h1>
              <p className="font-body text-lg text-white/65 leading-relaxed mb-10 max-w-lg">
                From retail to oil & gas — we bring proven market intelligence to every sector, backed by decades of in-region experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-body font-semibold text-[15px] px-7 py-3.5">
                  Start a Conversation
                </PillButton>
                <Link href="#sectors" className="inline-flex items-center gap-2 border border-white/30 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors">
                  Explore Sectors <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right — stat cards */}
            <AnimatedSection delay={0.2} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { num: '450+', label: 'Engagements completed', color: 'from-accent/20 to-accent/5' },
                { num: '11', label: 'Sectors covered', color: 'from-primary/40 to-primary/10' },
                { num: '40+', label: 'Countries reached', color: 'from-plum/30 to-plum/5' },
                { num: '100+', label: 'Years combined experience', color: 'from-white/15 to-white/5' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center`}
                >
                  <div className="font-heading font-medium text-4xl text-white mb-1">{stat.num}</div>
                  <div className="font-body text-[13px] text-white/60 leading-snug">{stat.label}</div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none">
            <path d="M0,80 L0,40 Q360,0 720,35 Q1080,70 1440,30 L1440,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── SECTOR GRID ── */}
      <section id="sectors" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-12">
            <span className="section-tag">Our Sectors</span>
            <h2 className="font-heading font-medium text-4xl md:text-5xl text-text">
              <GradientText hoverOnly animationSpeed={2}>Select a Sector</GradientText>
            </h2>
            <p className="font-body text-text-muted mt-3 max-w-lg">
              Click any sector to explore what we research, our clients, and key engagements.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sector, i) => {
              const Icon = sector.icon
              return (
                <AnimatedSection key={sector.slug} delay={i * 0.05}>
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="group block relative overflow-hidden rounded-2xl"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {/* Photo background */}
                    {sector.image ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${sector.image})` }}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                        style={{ background: sector.gradient }}
                      />
                    )}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
                    {/* Hover tint */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: sector.gradient, opacity: 0, mixBlendMode: 'multiply' }} />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      {/* Top */}
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <Icon size={22} className="text-white" />
                        </div>
                        {sector.engagements && (
                          <span className="font-body text-[11px] font-medium text-white/70 bg-black/25 backdrop-blur-sm rounded-full px-3 py-1 border border-white/15">
                            {sector.engagements} engagements
                          </span>
                        )}
                      </div>

                      {/* Bottom */}
                      <div>
                        <h3 className="font-heading font-medium text-xl text-white mb-2 leading-snug">
                          {sector.name}
                        </h3>
                        <div className="flex items-center gap-1.5 font-body text-[13px] font-medium text-white/60 group-hover:text-white transition-colors duration-300">
                          Explore sector
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Hover border highlight */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/25 transition-colors duration-300 pointer-events-none" />
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT WE RESEARCH ── */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <span className="section-tag">Our Capabilities</span>
              <h2 className="font-heading font-medium text-4xl md:text-5xl text-text leading-tight mb-5">
                <GradientText hoverOnly animationSpeed={2}>What We Research Across Every Sector</GradientText>
              </h2>
              <p className="font-body text-text-muted leading-relaxed mb-8">
                Regardless of industry, our method-neutral approach means we design the right research for your specific challenge — combining quantitative, qualitative, and secondary research to deliver intelligence that actually moves the needle.
              </p>
              <PillButton href="/services" bgColor="#1A2E5C" textColor="#ffffff" fillColor="#E8A020" hoverTextColor="#1A1A2E" className="font-body font-semibold text-[15px] px-7 py-3.5">
                View Our Services
              </PillButton>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {researchTypes.map((type) => (
                  <div key={type} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-text leading-snug">{type}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="bg-white py-14 border-y border-border overflow-hidden">
        <div className="container-content mb-6 text-center">
          <p className="font-body text-sm font-medium text-text-muted tracking-widest uppercase">
            Trusted by industry leaders across MEA
          </p>
        </div>
        <LogoStrip />
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="flex items-end justify-between mb-10">
            <AnimatedSection>
              <span className="section-tag">Case Studies</span>
              <h2 className="font-heading font-medium text-4xl md:text-5xl text-text">
                <GradientText hoverOnly animationSpeed={2}>Intelligence in Action</GradientText>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Link href="/case-studies" className="hidden sm:inline-flex items-center gap-2 border border-border text-text font-body text-[14px] font-medium rounded-full px-5 py-2.5 hover:border-primary hover:text-primary transition-all">
                View All <ArrowRight size={13} />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.1}>
                <Link href={cs.href} className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:shadow-card-hover hover:border-primary/20 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                    <span className="absolute top-4 left-4 font-body text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 uppercase tracking-wider">
                      {cs.tag}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1 bg-white">
                    <h3 className="font-heading font-medium text-[17px] text-text leading-snug group-hover:text-primary transition-colors">
                      {cs.title}
                    </h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed flex-1">
                      {cs.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 font-body text-[14px] font-medium text-primary group-hover:gap-2.5 transition-all">
                      Read Case Study <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50 pointer-events-none" />
        <div className="container-content text-center relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-body text-[13px] text-white/70 tracking-widest uppercase">Get Started</span>
            </span>
            <h2 className="font-heading font-medium text-4xl md:text-5xl text-white mb-5">
              Don't see your sector?<br />We cover it.
            </h2>
            <p className="font-body text-white/65 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              4BC Global has executed 450+ engagements across MEA. Talk to us about your specific market — we'll design the right research approach for you.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[17px] rounded-full px-9 py-4 hover:bg-accent-warm transition-colors shadow-lg">
              Start a Conversation <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
