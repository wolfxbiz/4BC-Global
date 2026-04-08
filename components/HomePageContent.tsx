import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search, Map, TrendingUp, MapPin, Users } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import FaqAccordion from '@/components/FaqAccordion'
import LogoStrip from '@/components/LogoStrip'
import PillButton from '@/components/PillButton'
import HeroDashboard from '@/components/HeroDashboard'
import Grainient from '@/components/Grainient'
import CapabilitiesBento from '@/components/CapabilitiesBento'
import HomeCaseStudies from '@/components/HomeCaseStudies'
import { sectors } from '@/lib/sectors-data'

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
              <span className="font-body text-[12px] font-medium text-white/80 tracking-widest uppercase">MEA Market Intelligence Specialists</span>
            </div>

            <h1 className="font-heading text-hero text-white mb-5 max-w-[560px]">
              Confident decisions start with the right{' '}
              <span className="italic font-extrabold">intelligence.</span>
            </h1>
            <p className="font-body text-[16px] text-white/70 leading-relaxed mb-8 max-w-[50ch]">
              The specialist firm with 100+ years of cumulative MEA experience — delivering validated intelligence that moves the needle.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
              <PillButton
                href="/contact"
                bgColor="#E8A020"
                textColor="#1A1A2E"
                fillColor="#7D2B5E"
                hoverTextColor="#ffffff"
                className="font-heading font-semibold text-[16px] px-8 py-4 shadow-lg"
              >
                Get Started <ArrowRight size={16} />
              </PillButton>
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
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-14 items-center">

            {/* Left */}
            <AnimatedSection>
              <span className="section-tag">Approach</span>
              <h2 className="font-heading text-h2-lg text-text mb-6 max-w-[440px]">
                Market insights you can believe in
              </h2>
              <p className="font-body text-body-lg text-primary font-semibold leading-relaxed mb-6 max-w-[48ch]">
                There is a better way to do market intelligence for MEA — one that gives you genuine confidence in critical business decisions.
              </p>
              <p className="font-body text-body-sm text-text-muted mb-10 max-w-[50ch]">
                We design and deliver custom qualitative and quantitative research — from market entry assessments to customer experience programs. Real primary data, method-neutral process, genuine MEA expertise.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[16px] rounded-full px-7 py-3.5 hover:bg-accent-warm hover:brightness-105 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            {/* Right — stacked features */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col divide-y divide-border">
                {approachFeatures.map((f) => (
                  <div key={f.title} className="flex gap-5 py-8 first:pt-0 last:pb-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon size={26} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-h3 text-text mb-2">{f.title}</h3>
                      <p className="font-body text-body-sm text-text-muted max-w-[44ch]">{f.desc}</p>
                    </div>
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
                A research firm that understands your sector
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

      {/* ─── 7. TOOLS (dark) ─── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/20 to-dark/10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 600 700" className="w-full h-full" fill="none">
            <circle cx="500" cy="350" r="380" stroke="white" strokeWidth="1" />
            <circle cx="500" cy="350" r="270" stroke="white" strokeWidth="0.7" />
          </svg>
        </div>
        <div className="container-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="font-heading font-semibold text-label tracking-[0.1em] uppercase text-white/50 mb-4 inline-block">Proprietary Tools</span>
              <h2 className="font-heading text-h2-lg text-white mb-6 max-w-[400px]">
                Intelligence platforms built for MEA
              </h2>
              <p className="font-body text-body-sm text-gray-400 mb-3 max-w-[50ch]">
                Our ultimate aim is for our insights to drive meaningful decisions for your organization.
              </p>
              <p className="font-body text-body-sm text-gray-400 mb-10 max-w-[50ch]">
                Three proprietary platforms — InFuse, Landscape, and ImpactIQ — give clients a faster path to answers.
              </p>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[16px] rounded-full px-7 py-3.5 hover:bg-accent-warm hover:brightness-105 transition-all"
              >
                Explore Our Tools <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex gap-4 bg-dark-surface border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors duration-200">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                      <tool.icon size={20} className="text-white/80" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-[17px] text-white mb-1 tracking-[-0.01em]">{tool.name}</h4>
                      <p className="font-body text-body-sm text-gray-400 max-w-[40ch]">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 8 & 9. CASE STUDIES (modal popup) ─── */}
      <HomeCaseStudies />

      {/* ─── 9. TESTIMONIALS ─── */}
      <section className="bg-bg-soft py-20 px-4 border-t border-border">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-heading font-semibold text-label tracking-[0.1em] uppercase text-primary text-center mb-2">Hear From Our Clients</p>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 10. CTA ─── */}
      <section className="bg-white py-20 px-4 text-center border-t border-border">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-heading font-semibold text-label tracking-[0.1em] uppercase text-primary mb-3">Get in Touch</p>
            <h2 className="font-heading text-h2-lg text-text mb-10">
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

  return pageContent
}
