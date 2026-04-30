import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import TestimonialSlider from '@/components/TestimonialSlider'
import FaqAccordion from '@/components/FaqAccordion'
import LogoStrip from '@/components/LogoStrip'
import HeroDashboard from '@/components/HeroDashboard'
import Grainient from '@/components/Grainient'
import CapabilitiesBento from '@/components/CapabilitiesBento'
import HomeCaseStudies from '@/components/HomeCaseStudies'
import { OpenContactPill, OpenContactButton } from '@/components/OpenContactButton'
import { sectors } from '@/lib/sectors-data'

const approachPrinciples = [
  {
    num: '01',
    title: 'Diagnose first',
    desc: 'Every engagement starts with a deep understanding of your specific business challenge — through structured discovery sessions before any research begins.',
    bg: 'bg-amber-50', border: 'border-amber-200', numColor: 'text-amber-300', titleColor: 'text-amber-900', hoverBorder: 'hover:border-amber-400',
  },
  {
    num: '02',
    title: 'Design the right method',
    desc: 'We craft the optimal research methodology based on your core objective, the available information, and the market dynamics at play — not a templated solution.',
    bg: 'bg-blue-50', border: 'border-blue-200', numColor: 'text-blue-300', titleColor: 'text-blue-900', hoverBorder: 'hover:border-blue-400',
  },
  {
    num: '03',
    title: 'Blend the right techniques',
    desc: 'Quantitative rigour, qualitative depth, and strategic secondary research — combined in the right proportions for your specific challenge.',
    bg: 'bg-purple-50', border: 'border-purple-200', numColor: 'text-purple-300', titleColor: 'text-purple-900', hoverBorder: 'hover:border-purple-400',
  },
  {
    num: '04',
    title: 'Deliver what you can act on',
    desc: 'Every report is structured for decision-making — clear findings, direct recommendations, and the strategic context to move forward with confidence.',
    bg: 'bg-pink-50', border: 'border-pink-200', numColor: 'text-pink-300', titleColor: 'text-pink-900', hoverBorder: 'hover:border-pink-400',
  },
]

const tools = [
  {
    name: '4BC InFuse',
    tagline: 'Your desk research, supercharged.',
    desc: 'Secondary intelligence platform for industry landscapes and competitive profiling across MEA.',
    type: 'Secondary Research Platform',
    href: '/tools#infuse',
    logo: '/brand/infuse-logo.png',
    logoScale: 0.72,
    accent: 'border-primary group-hover:border-primary',
    tag: 'bg-primary/15 text-primary',
  },
  {
    name: '4BC Landscape',
    tagline: 'Know exactly where to grow.',
    desc: 'Geo-mapping tool for retail network planning and location intelligence across MEA markets.',
    type: 'Geo-Intelligence Tool',
    href: '/tools#landscape',
    logo: '/brand/landscape-logo.png',
    logoScale: 1,
    accent: 'border-plum group-hover:border-plum',
    tag: 'bg-plum/15 text-plum',
  },
  {
    name: '4BC ImpactIQ',
    tagline: 'Measure what matters — socially and economically.',
    desc: 'Socio-economic impact measurement framework for events, projects, and programs.',
    type: 'Impact Assessment Framework',
    href: '/tools#impactiq',
    logo: '/brand/impactiq-logo.png',
    logoScale: 1,
    accent: 'border-accent group-hover:border-accent',
    tag: 'bg-accent/15 text-accent',
  },
]


export default function HomePageContent() {

  const heroStats = [
    { num: '450+', label: 'Engagements' },
    { num: '40+', label: 'Countries' },
    { num: '100+', label: 'Yrs Combined' },
  ]

  const heroContent = (
    /* ─── HERO — full-coverage 3-stop gradient (all variants) ─── */
    <section className="relative overflow-hidden">
      {/* Grainient WebGL background */}
      <div className="absolute inset-0">
        <Grainient
          color1="#351e6b"
          color2="#9a4788"
          color3="#b19f2b"
          timeSpeed={2.35}
          colorBalance={-0.47}
          warpStrength={1.9}
          warpFrequency={4.2}
          warpSpeed={0.5}
          warpAmplitude={26}
          blendAngle={28}
          blendSoftness={0.39}
          rotationAmount={260}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      {/* Large watermark text */}
      <div aria-hidden className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden" style={{ left: '-2%' }}>
        <span className="font-heading font-black text-white opacity-[0.10] leading-none" style={{ fontSize: 'clamp(200px, 32vw, 480px)', letterSpacing: '-0.05em' }}>
          4BC
        </span>
      </div>

      {/* Legibility overlay — stronger on left where text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/15 to-transparent pointer-events-none" />
      {/* Vignette — top & bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/15 via-transparent to-dark/30 pointer-events-none" />

      {/* Decorative rings — right side */}
      <div className="absolute right-0 top-0 w-[52%] h-full opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 600 700" className="w-full h-full" fill="none">
          <circle cx="520" cy="350" r="420" stroke="white" strokeWidth="1" />
          <circle cx="520" cy="350" r="310" stroke="white" strokeWidth="0.8" />
          <circle cx="520" cy="350" r="200" stroke="white" strokeWidth="0.6" />
          <circle cx="520" cy="350" r="90" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      {/* Radial glow — bottom left */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.12] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2B4A8C 0%, transparent 70%)' }} />

      <div className="container-content relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-8 items-center">

          {/* Left — text */}
          <AnimatedSection>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
              <span className="font-body text-[12px] font-medium text-white/80 tracking-widest uppercase">Middle East &amp; Africa Market Intelligence</span>
            </div>

            <h1 className="font-heading text-hero text-white mb-5 max-w-[560px]">
              Confident decisions start with the right{' '}
              <span className="italic font-extrabold">intelligence.</span>
            </h1>
            <p className="font-body text-[16px] text-white/70 leading-relaxed mb-8 max-w-[50ch]">
              A specialist research firm with 100+ years of cumulative research expertise — built for the complexity of Middle East &amp; Africa markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
              <OpenContactPill
                bgColor="#E8A020"
                textColor="#1A1A2E"
                fillColor="#1A4FA0"
                hoverTextColor="#ffffff"
                className="font-heading font-semibold text-[16px] px-8 py-4 shadow-lg"
              >
                Get Started <ArrowRight size={16} />
              </OpenContactPill>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-body font-medium text-body-md text-white/65 hover:text-white transition-colors group"
              >
                Our Story
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center border-t border-white/15 pt-5">
              {heroStats.map((s, i) => (
                <div key={s.label} className={`${i > 0 ? 'border-l border-white/15 pl-4 ml-4 sm:pl-7 sm:ml-7' : ''}`}>
                  <div className="font-heading font-bold text-[1.25rem] sm:text-[1.75rem] text-white leading-none mb-0.5">{s.num}</div>
                  <div className="font-body text-[10px] sm:text-[11px] text-white/45 tracking-[0.08em] uppercase">{s.label}</div>
                </div>
              ))}
              <div className="border-l border-white/15 pl-4 ml-4 sm:pl-7 sm:ml-7 hidden sm:block">
                <div className="font-body text-[11px] text-white/35 leading-snug">Spun out from<br />Kantar · Est. 2020</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Live analytics dashboard */}
          <AnimatedSection delay={0.18} className="hidden lg:block">
            <HeroDashboard />
          </AnimatedSection>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0] pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 L0,50 Q360,5 720,50 Q1080,95 1440,45 L1440,80 Z" fill="#FFFFFF" />
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
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-start">

            {/* Left */}
            <AnimatedSection className="lg:sticky lg:top-28">
              <span className="section-tag">The 4BC Approach</span>
              <h2 className="font-heading text-h2-lg text-text mb-5 max-w-[400px]">
                <GradientText hoverOnly animationSpeed={2}>Research designed around your challenge</GradientText>
              </h2>
              <p className="font-body text-body-sm text-text-muted mb-10 max-w-[46ch] leading-relaxed">
                We are method-neutral by design. We start with your business question, then build the right research approach around it — blending quantitative, qualitative, and secondary techniques as the challenge demands.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-accent-warm hover:brightness-105 transition-all"
              >
                How We Work <ArrowRight size={15} />
              </Link>
            </AnimatedSection>

            {/* Right — 4 numbered principle cards */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {approachPrinciples.map((p) => (
                  <div key={p.num} className={`group ${p.bg} border ${p.border} ${p.hoverBorder} rounded-2xl p-6 transition-all duration-200`}>
                    <span className={`font-heading font-black text-[64px] leading-none ${p.numColor} block mb-4`}>{p.num}</span>
                    <h3 className={`font-heading font-semibold text-[16px] ${p.titleColor} mb-2 leading-snug`}>{p.title}</h3>
                    <p className="font-body text-[13px] text-text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 4. CAPABILITIES ─── */}
      <section className="section-padding" style={{ background: '#0F1320' }}>
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <span className="font-body text-xs font-medium tracking-widest uppercase text-accent inline-block mb-1">Capabilities</span>
            <div className="h-[3px] w-10 bg-accent rounded-full mb-4" />
            <h2 className="font-heading font-medium text-4xl md:text-5xl text-white">
              Our market research services
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <CapabilitiesBento glowColor="132, 0, 255" spotlightRadius={600} />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 6. SECTORS / INDUSTRIES ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <AnimatedSection>
              <span className="section-tag">Sectors</span>
              <h2 className="font-heading text-h2-lg text-text mb-4 max-w-[400px]">
                <GradientText hoverOnly animationSpeed={2}>A research firm that understands your sector</GradientText>
              </h2>
              <p className="font-body text-body-sm text-text-muted max-w-[46ch]">
                We pride ourselves on the depth of our sector knowledge across MEA markets.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-body text-body-sm text-text-muted mb-5 max-w-[52ch]">
                Our experience is based on 450+ engagements across these sectors. The research findings have directed millions of dollars in investments and helped the region's largest enterprises accelerate growth.
              </p>
              <p className="font-body text-body-sm text-text-muted max-w-[52ch]">
                Trusted by VISA, ENOC, Unilever, Toyota, DP World, Aramco, and 100+ others across MEA.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {sectors.slice(0, 2).map((sector) => (
                <Link key={sector.slug} href={`/sectors/${sector.slug}`}
                  className="col-span-2 group relative flex items-end justify-between rounded-xl sm:rounded-2xl p-4 sm:p-6 min-h-[130px] sm:min-h-[160px] overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  {/* Photo background */}
                  {sector.image && <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${sector.image})` }} />}
                  {/* Always-on dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
                  {/* Hover — gradient tint */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-400" style={{ background: sector.gradient }} />
                  <div className="relative z-10">
                    <span className="font-heading font-semibold text-white text-[15px] sm:text-[20px] block leading-snug drop-shadow">{sector.name}</span>
                    <span className="font-body text-[12px] sm:text-[13px] text-white/70 mt-1 block max-h-0 group-hover:max-h-10 overflow-hidden transition-all duration-400">{sector.tagline}</span>
                  </div>
                  <div className="relative z-10 w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 ml-4 group-hover:bg-white/35">
                    <ArrowRight size={15} className="text-white" strokeWidth={2} />
                  </div>
                </Link>
              ))}
              {sectors.slice(2, 6).map((sector) => (
                <Link key={sector.slug} href={`/sectors/${sector.slug}`}
                  className="col-span-1 sm:col-span-2 lg:col-span-1 group relative flex flex-col justify-between rounded-xl sm:rounded-2xl p-3 sm:p-5 min-h-[110px] sm:min-h-[140px] overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  {sector.image && <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${sector.image})` }} />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-400" style={{ background: sector.gradient }} />
                  <div className="relative z-10 flex justify-end">
                    <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/35">
                      <ArrowRight size={12} className="text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <span className="font-heading font-semibold text-white text-[15px] leading-snug block drop-shadow">{sector.name}</span>
                  </div>
                </Link>
              ))}
              {sectors.slice(6, 10).map((sector) => (
                <Link key={sector.slug} href={`/sectors/${sector.slug}`}
                  className="col-span-1 group relative flex flex-col justify-between rounded-xl sm:rounded-2xl p-3 sm:p-4 min-h-[100px] sm:min-h-[120px] overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  {sector.image && <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${sector.image})` }} />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-400" style={{ background: sector.gradient }} />
                  <div className="relative z-10 flex justify-end">
                    <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/35">
                      <ArrowRight size={10} className="text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <span className="font-heading font-semibold text-white text-[13px] leading-snug relative z-10 drop-shadow">{sector.name}</span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 7. TOOLS ─── */}
      <section className="relative section-padding overflow-hidden bg-white">
        {/* Skyline decorative backdrop */}
        <div className="absolute bottom-0 left-0 right-0 h-[72%] pointer-events-none select-none">
          <img src="/brand/skyline.png" alt="" aria-hidden className="w-full h-full object-contain object-bottom opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />
        </div>

        <div className="container-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="font-heading font-semibold text-label tracking-[0.1em] uppercase text-primary mb-4 inline-block">Proprietary Tools</span>
              <h2 className="font-heading text-h2-lg text-text mb-6 max-w-[400px]">
                <GradientText hoverOnly animationSpeed={2}>Intelligence platforms built for MEA</GradientText>
              </h2>
              <p className="font-body text-body-sm text-text-muted mb-3 max-w-[50ch]">
                Our ultimate aim is for our insights to drive meaningful decisions for your organization.
              </p>
              <p className="font-body text-body-sm text-text-muted mb-10 max-w-[50ch]">
                Three proprietary platforms — InFuse, Landscape, and ImpactIQ — give clients a faster path to answers.
              </p>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 bg-primary text-white font-body font-medium text-[16px] rounded-full px-7 py-3.5 hover:bg-primary/90 transition-all"
              >
                Explore Our Tools <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-3">
                {tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className={`group block bg-white/95 border-l-2 border border-white/40 ${tool.accent} rounded-2xl p-5 hover:bg-white hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-200 shadow-sm`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 h-10 w-44 flex items-center overflow-hidden">
                          <Image src={tool.logo} alt={tool.name} width={176} height={40} className="h-full w-full object-contain object-left origin-left transition-none" style={{ transform: `scale(${tool.logoScale})` }} />
                        </div>
                        <p className="font-body text-[13px] text-text-muted mb-2">{tool.tagline}</p>
                        <p className="font-body text-[13px] text-text-muted/80 leading-relaxed">{tool.desc}</p>
                      </div>
                      <ArrowRight size={16} className="text-text-muted/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 8 & 9. CASE STUDIES (modal popup) ─── */}
      <HomeCaseStudies />

      {/* ─── 9. TESTIMONIALS ─── */}
      {/* ─── 9. Testimonials ─── */}
      <section className="bg-[#0F1320] py-20 px-4">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-10">
              What Our Clients Say
            </p>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 10. CTA ─── */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        {/* Same Grainient as hero */}
        <div className="absolute inset-0">
          <Grainient
            color1="#351e6b"
            color2="#9a4788"
            color3="#b19f2b"
            timeSpeed={2.35}
            colorBalance={-0.47}
            warpStrength={1.9}
            warpFrequency={4.2}
            warpSpeed={0.5}
            warpAmplitude={26}
            blendAngle={28}
            blendSoftness={0.39}
            rotationAmount={260}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="container-content relative z-10">
          <AnimatedSection className="text-center">
            <p className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-[32px] md:text-[44px] lg:text-[52px] font-bold text-white mb-4 tracking-[-0.02em] leading-tight">
              Ready to Get Started?
            </h2>
            <p className="font-body text-white/55 text-[15px] md:text-[16px] max-w-md mx-auto mb-10 leading-relaxed">
              From market entry to customer intelligence — we deliver research that drives real decisions across MEA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <OpenContactButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-dark font-body font-semibold text-[15px] rounded-full px-7 py-3.5 hover:brightness-110 transition-all">
                Book a Consultation <ArrowRight size={16} />
              </OpenContactButton>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/18 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 11. FAQ ─── */}
      <FaqAccordion />
    </>
  )

  return pageContent
}
