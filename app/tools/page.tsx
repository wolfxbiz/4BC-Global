import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
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
    logo: '/brand/infuse-logo.png',
    logoScale: 0.72,
    name: '4BC InFuse',
    tagline: 'Your desk research, supercharged.',
    description: '4BC InFuse is a secondary research platform used for understanding the industry landscape, competitive intelligence, and competition profiles across any sector in the MEA region.',
    useCases: [
      'Competitive profiling and benchmarking',
      'Industry landscape overview before primary research',
      'Fast-turn intelligence reports for leadership decisions',
    ],
    type: 'Secondary Research Platform',
    bestFor: 'Competitive intelligence',
    output: 'Intelligence reports',
    usedIn: 'All sectors',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
  },
  {
    id: 'landscape',
    logo: '/brand/landscape-logo.png',
    logoScale: 1,
    name: '4BC Landscape',
    tagline: 'Know exactly where to grow.',
    description: '4BC Landscape is a geo-mapping tool used for network planning — identifying optimal locations for opening new stores or branches based on demographics, competition presence, and market gaps.',
    useCases: [
      'Retail network expansion planning',
      'New store feasibility by location cluster',
      'Competitive footprint mapping',
      'Catchment demographic profiling',
    ],
    type: 'Geo-Intelligence Tool',
    bestFor: 'Location & network planning',
    output: 'Maps, cluster analysis',
    usedIn: 'Retail, Real Estate, Banking',
    color: 'text-plum',
    bgColor: 'bg-plum/10',
    borderColor: 'border-plum/30',
  },
  {
    id: 'impactiq',
    logo: '/brand/impactiq-logo.png',
    logoScale: 1,
    name: '4BC ImpactIQ',
    tagline: 'Measure what matters — socially, economically, globally.',
    description: '4BC ImpactIQ is a deep-dive analysis framework for assessing the socio-economic impact of events, activities, and projects. Built on a proprietary in-house assessment model.',
    useCases: [
      'Government events and exhibitions (e.g., Expos, Summits)',
      'Infrastructure and development projects',
      'CSR and sustainability reporting',
      'Public-private partnerships',
    ],
    type: 'Impact Assessment Framework',
    bestFor: 'Socio-economic impact measurement',
    output: 'Impact scorecards & reports',
    usedIn: 'Government, Events, Projects',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30',
    framework: [
      { label: 'Economic Output', desc: 'Direct and indirect economic contribution' },
      { label: 'Employment Impact', desc: 'Jobs created and supported' },
      { label: 'Local Social Impact', desc: 'Community-level benefits and outcomes' },
      { label: 'Global Social Impact', desc: 'Broader sustainability and development contributions' },
    ],
  },
]

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] md:min-h-[500px] flex items-end overflow-hidden bg-[#0F1320]">
        {/* Skyline image — bottom-anchored */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img src="/brand/skyline.png" alt="" aria-hidden className="absolute bottom-0 left-0 w-full object-contain object-bottom opacity-40" />
          {/* gradient: dark top → transparent bottom so skyline peeks through */}
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
            <p className="font-body text-white/55 text-[16px] max-w-xl leading-relaxed">
              Built from 15+ years of MEA research experience — InFuse, Landscape, and ImpactIQ give clients a faster, sharper path to decisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tool Cards */}
      {tools.map((tool, i) => (
        <section
          key={tool.id}
          id={tool.id}
          className={i % 2 === 0 ? 'bg-white section-padding' : 'bg-bg-soft section-padding'}
        >
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className={i % 2 === 1 ? 'order-last lg:order-first' : ''}>
                <div className="h-11 w-52 flex items-center mb-6 overflow-hidden">
                  <Image src={tool.logo} alt={tool.name} width={208} height={44} className="h-full w-full object-contain object-left origin-left" style={{ transform: `scale(${tool.logoScale})` }} />
                </div>
                <span className="section-tag">{tool.type}</span>
                <h2 className="font-heading font-medium text-3xl md:text-4xl text-text mb-2">
                  {tool.name}
                </h2>
                <p className="font-heading text-lg text-text-muted italic mb-6">{tool.tagline}</p>
                <p className="font-body text-text-muted leading-relaxed mb-6">{tool.description}</p>
                <ul className="space-y-2 mb-8">
                  {tool.useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="font-body text-sm text-text-muted">{uc}</span>
                    </li>
                  ))}
                </ul>
                <PillButton href="/contact" bgColor="#1A2E5C" textColor="#ffffff" fillColor="#E8A020" hoverTextColor="#1A1A2E" className="font-heading font-semibold text-[14px] px-6 py-3">
                  Learn More about {tool.name.replace('4BC ', '')}
                </PillButton>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className={i % 2 === 1 ? 'order-first lg:order-last' : ''}>
                <div className={`border-2 ${tool.borderColor} rounded-2xl p-8 bg-white`}>
                  <h4 className="font-heading font-medium text-sm text-text-muted uppercase tracking-wider mb-6">At a Glance</h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Type', value: tool.type },
                      { label: 'Best For', value: tool.bestFor },
                      { label: 'Output', value: tool.output },
                      { label: 'Used In', value: tool.usedIn },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <span className="font-heading font-medium text-sm text-text-muted w-24 flex-shrink-0">{item.label}</span>
                        <span className="font-body text-sm text-text">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  {tool.framework && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-heading font-medium text-sm text-text-muted uppercase tracking-wider mb-4">Framework Assesses</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {tool.framework.map((f) => (
                          <div key={f.label} className="bg-accent/10 rounded-lg p-3">
                            <div className="font-heading font-medium text-xs text-accent mb-1">{f.label}</div>
                            <div className="font-body text-xs text-text-muted">{f.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="section-dark section-padding">
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content">
          <AnimatedSection className="text-center mb-10">
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 inline-block">Compare</span>
            <h2 className="font-heading font-medium text-3xl text-white">Tools at a Glance</h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left font-heading font-medium text-text-muted py-3 pr-6">Feature</th>
                    {tools.map((t) => (
                      <th key={t.id} className="text-left font-heading font-medium text-accent py-3 pr-6">{t.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {['type', 'bestFor', 'output', 'usedIn'].map((key) => (
                    <tr key={key}>
                      <td className="font-heading font-medium text-text-muted py-3 pr-6 capitalize">{key === 'bestFor' ? 'Best For' : key === 'usedIn' ? 'Used In' : key.charAt(0).toUpperCase() + key.slice(1)}</td>
                      {tools.map((t) => (
                        <td key={t.id} className="font-body text-gray-300 py-3 pr-6">{(t as any)[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
          <AnimatedSection className="text-center mt-10">
            <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
              Request a Demo of Our Tools
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
