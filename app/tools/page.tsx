import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

export const metadata: Metadata = {
  title: 'Proprietary Tools — 4BC Global',
  description: '4BC InFuse, Landscape, and ImpactIQ — intelligence platforms for competitive profiling, network planning, and impact measurement.',
}

const tools = [
  {
    id: 'infuse',
    logoH: 'h-20', logoW: 'w-[320px]',
    logo: '/brand/infuse-logo.png',
    image: '/capabilities/business-research.jpg',
    name: '4BC InFuse',
    tagline: 'Your desk research, supercharged.',
    description: '4BC InFuse is a secondary research platform used for understanding the industry landscape, competitive intelligence, and competition profiles across any sector in the MEA region.',
    useCases: [
      'Competitive profiling and benchmarking',
      'Industry landscape overview before primary research',
      'Fast-turn intelligence reports for leadership decisions',
    ],
    stats: [
      { value: 'MEA', label: 'Coverage' },
      { value: '10+', label: 'Sectors' },
      { value: '48h', label: 'Turnaround' },
    ],
    type: 'Secondary Research Platform',
    accent: '#2B4A8C',
    accentLight: '#EEF2FF',
    accentMid: '#C7D2FE',
  },
  {
    id: 'landscape',
    logoH: 'h-28', logoW: 'w-[400px]',
    logo: '/brand/landscape-logo.png',
    image: '/capabilities/geolocation.png',
    name: '4BC Landscape',
    tagline: 'Know exactly where to grow.',
    description: '4BC Landscape is a geo-mapping tool used for network planning — identifying optimal locations for opening new stores or branches based on demographics, competition presence, and market gaps.',
    useCases: [
      'Retail network expansion planning',
      'New store feasibility by location cluster',
      'Competitive footprint mapping',
      'Catchment demographic profiling',
    ],
    stats: [
      { value: '1,500+', label: 'GPS Points' },
      { value: '40+', label: 'Clusters' },
      { value: 'Live', label: 'Map Output' },
    ],
    type: 'Geo-Intelligence Tool',
    accent: '#7D2B5E',
    accentLight: '#FDF4FF',
    accentMid: '#E9D5FF',
  },
  {
    id: 'impactiq',
    logoH: 'h-28', logoW: 'w-[400px]',
    logo: '/brand/impactiq-logo.png',
    image: '/capabilities/impact-assessment.png',
    name: '4BC ImpactIQ',
    tagline: 'Measure what matters — socially, economically, globally.',
    description: '4BC ImpactIQ is a deep-dive analysis framework for assessing the socio-economic impact of events, activities, and projects. Built on a proprietary in-house assessment model.',
    useCases: [
      'Government events and exhibitions (e.g., Expos, Summits)',
      'Infrastructure and development projects',
      'CSR and sustainability reporting',
      'Public-private partnerships',
    ],
    stats: [
      { value: '2', label: 'Pillars' },
      { value: '5', label: 'Steps' },
      { value: 'SDG', label: 'Aligned' },
    ],
    type: 'Impact Assessment Framework',
    accent: '#E8A020',
    accentLight: '#FFFBEB',
    accentMid: '#FDE68A',
  },
]

export default function ToolsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-end overflow-hidden bg-[#0F1320]">
        <div className="absolute inset-0 pointer-events-none select-none">
          <img src="/brand/skyline.png" alt="" aria-hidden className="absolute bottom-0 left-0 w-full object-contain object-bottom opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1320] via-[#0F1320]/70 to-transparent" />
        </div>
        <div className="container-content relative z-10 pb-16 pt-32 md:pt-40">
          <AnimatedSection>
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">
              Proprietary Tools
            </span>
            <h1 className="font-heading font-bold text-[36px] md:text-[52px] text-white leading-tight tracking-[-0.02em] mb-4 max-w-2xl">
              Intelligence platforms built for MEA
            </h1>
            <p className="font-body text-white/55 text-[16px] max-w-xl leading-relaxed mb-10">
              Built from 15+ years of MEA research experience — InFuse, Landscape, and ImpactIQ give clients a faster, sharper path to decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 hover:text-white transition-all rounded-full px-5 py-2 font-body text-[13px]"
                >
                  {t.name} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Tool Sections ── */}
      {tools.map((tool, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={tool.id}
            id={tool.id}
            className={i % 2 === 0 ? 'bg-white section-padding' : 'bg-bg-soft section-padding'}
          >
            <div className="container-content">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>

                {/* ── Content ── */}
                <AnimatedSection className={isEven ? '' : 'lg:order-last'}>

                  {/* Logo — prominent */}
                  <div className={`mb-8 ${tool.logoH} ${tool.logoW} relative`}>
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  {/* Type tag */}
                  <span
                    className="inline-block font-body text-[11px] font-semibold uppercase tracking-[0.12em] rounded-full px-3 py-1 mb-4"
                    style={{ backgroundColor: tool.accentLight, color: tool.accent }}
                  >
                    {tool.type}
                  </span>

                  {/* Tagline */}
                  <p className="font-heading font-medium text-[18px] text-text mb-3 leading-snug">
                    {tool.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-body text-[14px] text-text-muted leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-border mb-6" />

                  {/* Use cases */}
                  <ul className="space-y-2.5 mb-8">
                    {tool.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: tool.accent }} />
                        <span className="font-body text-[13px] text-text leading-snug">{uc}</span>
                      </li>
                    ))}
                  </ul>

                  <PillButton
                    href="/contact"
                    bgColor={tool.accent}
                    textColor="#ffffff"
                    fillColor="#0F1320"
                    hoverTextColor="#ffffff"
                    className="font-heading font-semibold text-[14px] px-6 py-3"
                  >
                    Learn More about {tool.name.replace('4BC ', '')}
                  </PillButton>
                </AnimatedSection>

                {/* ── Image + Stats ── */}
                <AnimatedSection delay={0.15} className={isEven ? '' : 'lg:order-first'}>
                  <div className="relative">

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover"
                      />
                      {/* Subtle bottom gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Stats — overlapping bottom-left */}
                    <div className="absolute -bottom-5 left-4 right-4 flex gap-2 justify-center">
                      {tool.stats.map((s) => (
                        <div
                          key={s.label}
                          className="flex-1 bg-white border border-border rounded-xl px-3 py-3 text-center shadow-md"
                        >
                          <div className="font-heading font-black text-[18px] leading-none" style={{ color: tool.accent }}>{s.value}</div>
                          <div className="font-body text-text-muted text-[10px] mt-1 uppercase tracking-wider">{s.label}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                </AnimatedSection>

              </div>
            </div>
          </section>
        )
      })}

      {/* Spacer to clear overlapping stats */}
      <div className="bg-bg-soft h-10" />

      {/* ── CTA ── */}
      <section className="relative section-dark section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content relative z-10">
          <AnimatedSection className="text-center">
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Get Started</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to put our tools to work?</h2>
            <p className="font-body text-white/55 max-w-xl mx-auto mb-10 text-[16px]">
              Whether you need competitive intelligence, location planning, or impact measurement — we'll match the right tool to your challenge.
            </p>
            <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
              Request a Demo of Our Tools
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
