import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Users, BarChart2, MapPin, Lightbulb, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import PageHeader from '@/components/PageHeader'
import PillButton from '@/components/PillButton'

export const metadata: Metadata = {
  title: 'Research Services — 4BC Global',
  description: 'Bespoke research solutions: business research, customer experience, impact assessment, geolocation services. Advisory across the full business lifecycle.',
}

const lifecycleStages = [
  {
    num: '01',
    stage: 'Inception',
    tagline: 'Enter the Market With Confidence',
    intro: "You're moving into a new geography, launching into a new category, or building something from the ground up. The stakes are high. The data is often limited. And the cost of getting it wrong is significant. This is where rigorous research becomes your insurance policy.",
    services: [
      { name: 'Go-To-Market Strategy', desc: 'Understanding the competitive landscape, customer preferences, and entry barriers before you commit capital.' },
      { name: 'Market Feasibility', desc: 'Is the opportunity real? What\'s the true addressable market, and what are the realistic paths to scale?' },
      { name: 'Business Plan Development', desc: 'Grounding your assumptions in primary evidence, not extrapolation.' },
      { name: 'Market Entry Strategy', desc: 'The specific route, positioning, and customer acquisition approach that works in this market, not a generic playbook.' },
      { name: 'Go/No-Go Decision Support', desc: 'Clarity on whether to proceed, pivot, or pass.' },
    ],
    whyItMatters: "Entry decisions are rarely reversible. The cost of misjudging a market — or worse, discovering the opportunity doesn\'t exist — is far higher than the cost of getting the research right upfront.",
    color: '#E8A020',
    border: 'border-amber-200',
    bg: 'bg-amber-50',
  },
  {
    num: '02',
    stage: 'Growth',
    tagline: 'Scale Smart. Outpace Your Rivals.',
    intro: "You\'ve established a foothold. Now the challenge is different: how do you scale without losing control of quality, margin, or brand? How do you win customers faster than competitors can respond? This is where strategic intelligence becomes competitive advantage.",
    services: [
      { name: 'Product Strategy', desc: 'Which offerings will drive growth? What gaps exist in the market that you can own?' },
      { name: 'Customer Growth', desc: 'Where are the highest-value customers? What drives their purchasing decisions? How do you reach them cost-effectively?' },
      { name: 'Pricing Strategy', desc: 'What will the market bear? How do you optimize price without triggering competitive response or customer resistance?' },
      { name: 'Partner Evaluation', desc: 'Which distribution partners, technology partners, or strategic alliances will accelerate growth?' },
      { name: 'Distribution Strategy', desc: 'Direct, indirect, hybrid? Which channels will reach your target customers most effectively in this region?' },
    ],
    whyItMatters: "Growth is not just about doing more of what works. It\'s about understanding where growth is possible, who will drive it, and how to get there faster and more profitably than competitors. In MEA, that distinction is everything.",
    color: '#2B4A8C',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
  },
  {
    num: '03',
    stage: 'Maturity',
    tagline: 'Defend Position. Optimize Returns.',
    intro: "You\'ve built a profitable business. Competitors are circling. Your customer base is stable, but growth has slowed. The focus shifts from expansion to efficiency, from acquisition to retention, from novelty to resilience. This is where insight becomes operational intelligence.",
    services: [
      { name: 'Network Optimization Strategy', desc: 'Are all your distribution channels performing equally? Where should you invest, consolidate, or exit?' },
      { name: 'Customer Retention Programs', desc: 'What drives loyalty at scale? Where are you bleeding customers, and how do you stop it?' },
      { name: 'Brand Health Tracking', desc: 'How are you perceived relative to competitors? Is your brand strengthening, static, or at risk?' },
      { name: 'Channel Efficiency Review', desc: 'Which touchpoints deliver value? Which are cost drains? Where should you reallocate investment?' },
      { name: 'Competitive Response Planning', desc: 'How are rivals moving? What are they doing that\'s working, and what gaps are they missing?' },
    ],
    whyItMatters: "In mature markets, small efficiency gains compound into significant margin improvement. Understanding your customers deeply, measuring brand health rigorously, and optimizing every channel becomes the difference between steady profitability and eventual decline.",
    color: '#7D2B5E',
    border: 'border-purple-200',
    bg: 'bg-purple-50',
  },
  {
    num: '04',
    stage: 'Renewal',
    tagline: 'Pivot. Diversify. Grow Again.',
    intro: "Markets evolve. Customer preferences shift. Competitors innovate. At some point, protecting yesterday\'s business means sacrificing tomorrow\'s potential. Renewal is about asking: what comes next? This is where courage meets evidence.",
    services: [
      { name: 'Diversification Strategy', desc: 'What new categories, segments, or geographies represent genuine growth opportunities?' },
      { name: 'Portfolio Rebalancing', desc: 'Which current products or services should you defend, grow, or divest?' },
      { name: 'Feasibility Study', desc: 'Is the opportunity real? Can you execute it? What\'s the realistic growth potential?' },
      { name: 'New Market Assessment', desc: 'Customer needs, competitive dynamics, regulatory environment, distribution landscape — everything you need to move forward with confidence.' },
    ],
    whyItMatters: "Renewal is not about staying busy. It\'s about identifying where you can create differentiation and scale. In fast-moving MEA markets, the ability to pivot effectively is often the difference between companies that endure and companies that fade.",
    color: '#047857',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
  },
]

const researchServices = [
  'Market Assessment & Sizing — Understanding true market opportunity across segments and geographies.',
  'Competitive Intelligence — What competitors are doing, how customers perceive them, where the gaps are.',
  'Customer Research — Deep understanding of attitudes, behaviours, needs, and unmet expectations.',
  'Stakeholder Engagement — Especially in public sector work — understanding needs across complex stakeholder ecosystems.',
  'Brand Health Tracking — Measuring perception, loyalty, and competitive positioning over time.',
  'Channel & Network Research — Understanding distribution dynamics and optimizing channel performance.',
  'Feasibility & Opportunity Assessment — Validating new market, product, or business model opportunities before major investment.',
  'Technology & Emerging Trends Research — Understanding adoption rates, barriers, and implications for your business.',
]

const serviceAreas = [
  {
    id: 'business-research',
    icon: Search,
    title: 'Business Research',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    image: '/capabilities/business-research.jpg',
    services: [
      'Marketing Strategy & Concept Evaluation',
      'Segmentation Studies',
      'Regulatory Environment Evaluation',
      'Market Entry',
      'Competition Mapping',
      'Partner Identification & Evaluation',
      'Market Sizing, Demand Estimation & Brand Share',
      'Supply & Demand Analysis',
      'Industrial Consumer Usage & Satisfaction',
      'Channel Analysis',
      'Online Customer Management',
    ],
  },
  {
    id: 'customer-experience',
    icon: Users,
    title: 'Customer Satisfaction & Experience',
    color: 'text-plum',
    bgColor: 'bg-plum/10',
    image: '/capabilities/customer-satisfaction.png',
    services: [
      'Customer Journey Mapping',
      'Customer Loyalty / Satisfaction',
      'Loyalty & Engagement Programs',
      'Net Promoter Score (NPS)',
      'Mystery Shopping',
      'CX Measure and Management',
      'Channel Analysis',
    ],
  },
  {
    id: 'impact-assessment',
    icon: BarChart2,
    title: 'Impact Assessment',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    image: '/capabilities/impact-assessment.png',
    imagePosition: 'center bottom',
    services: [
      'Corporate Reputation Assessment',
      'Economic Impact Assessment (EIA)',
      'Event Performance — Footfall & Economic Impact',
      'Social Impact Assessment (SIA)',
    ],
  },
  {
    id: 'geolocation-services',
    icon: MapPin,
    title: 'Geolocation-Based Services',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    image: '/capabilities/geolocation.png',
    services: [
      'Catchment Area Assessment',
      'Network Planning — New Location Evaluation',
      'Branch Optimization',
      'Promotion/Event Performance Measurement',
    ],
  },
  {
    id: 'specialist-areas',
    icon: Lightbulb,
    title: 'Other Specialist Areas',
    color: 'text-plum',
    bgColor: 'bg-plum/10',
    image: '/capabilities/specialist-areas.png',
    services: [
      'InFuse — Secondary research-based intelligence solution',
      'Counterfeit Assessment',
      'Co-creation Workshops for Business Strategy',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        headline="Every Business Moves Through Four Stages."
        subheadline="We Support You At Each One."
      />

      {/* Intro */}
      <section className="bg-white py-14 px-4 border-b border-border">
        <div className="container-content max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="section-tag">Advisory Services</span>
            <p className="font-body text-body-sm text-text-muted leading-relaxed mt-4">
              Whether you're entering a market for the first time, scaling operations, optimizing profitability, or charting a new direction — your strategic needs shift at each stage of the business lifecycle. Our practice is built entirely around that reality. We don't force a single research model onto four different business problems. Instead, we match the approach to the stage, the question, and the decision ahead.
            </p>
            <p className="font-body text-body-sm text-text-muted mt-3 font-medium">
              This is how method-neutral research becomes genuinely useful.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Lifecycle */}
      <section id="business-lifecycle-advisory" className="bg-bg-soft section-padding overflow-hidden">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {lifecycleStages.map((stage, i) => (
              <AnimatedSection key={stage.stage} delay={i * 0.1}>
                <div
                  className={`relative h-full rounded-2xl bg-white border overflow-hidden flex flex-col`}
                  style={{ borderColor: stage.color + '35' }}
                >
                  {/* Coloured top bar */}
                  <div className="h-1.5 w-full flex-shrink-0" style={{ backgroundColor: stage.color }} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Stage header */}
                    <div className="flex items-start gap-4 mb-5">
                      <span
                        className="font-heading font-black text-[72px] leading-none flex-shrink-0"
                        style={{ color: stage.color + '28' }}
                      >
                        {stage.num}
                      </span>
                      <div className="pt-2">
                        <span
                          className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] block mb-0.5"
                          style={{ color: stage.color }}
                        >
                          Stage {stage.num}
                        </span>
                        <h3
                          className="font-heading font-bold text-[22px] leading-tight"
                          style={{ color: stage.color }}
                        >
                          {stage.stage}
                        </h3>
                        <p className="font-body text-[12px] text-text-muted italic mt-0.5">{stage.tagline}</p>
                      </div>
                    </div>

                    {/* Intro */}
                    <p className="font-body text-[13px] text-text-muted leading-relaxed mb-5">{stage.intro}</p>

                    {/* Divider */}
                    <div className="h-px mb-5" style={{ backgroundColor: stage.color + '25' }} />

                    {/* What we explore */}
                    <p
                      className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] mb-3"
                      style={{ color: stage.color }}
                    >
                      What We Explore
                    </p>
                    <div className="space-y-3 flex-1 mb-5">
                      {stage.services.map((svc) => (
                        <div key={svc.name} className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]"
                            style={{ backgroundColor: stage.color }}
                          />
                          <div>
                            <span className="font-body font-semibold text-[13px] text-text">{svc.name}</span>
                            <span className="font-body text-[12.5px] text-text-muted"> — {svc.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Why it matters */}
                    <div
                      className="rounded-xl p-4 mt-auto"
                      style={{ backgroundColor: stage.color + '10', borderLeft: `3px solid ${stage.color}40` }}
                    >
                      <p
                        className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-1.5"
                        style={{ color: stage.color }}
                      >
                        Why It Matters
                      </p>
                      <p className="font-body text-[12.5px] text-text-muted leading-relaxed italic">{stage.whyItMatters}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="relative overflow-hidden section-padding bg-white">
        <div className="container-content relative z-10">

          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">Our Methodology</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
              <GradientText hoverOnly animationSpeed={2}>How We Work Across All Stages</GradientText>
            </h2>
            <p className="font-body text-text-muted text-lg max-w-[48ch] mx-auto">
              Regardless of where you are in the business lifecycle, our approach remains constant: diagnostic rigour, methodological precision, and output built to drive decisions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              {
                num: '01',
                title: 'Diagnose First',
                desc: 'We begin by truly understanding your challenge. Not the brief as you\'ve stated it, but the real business question underneath. What decision needs to be made? What uncertainty is blocking progress? What\'s at stake?',
                bg: 'bg-amber-50', border: 'border-amber-200', numColor: 'text-amber-300', titleColor: 'text-amber-900',
              },
              {
                num: '02',
                title: 'Design the Methodology',
                desc: 'We shape the research approach around your specific objective, the information gaps that matter most, and the market complexity you\'re navigating. Whatever combination answers the question properly.',
                bg: 'bg-blue-50', border: 'border-blue-200', numColor: 'text-blue-300', titleColor: 'text-blue-900',
              },
              {
                num: '03',
                title: 'Blend Techniques',
                desc: 'Most engagements benefit from strategic combination. Large-scale surveys for breadth. In-depth interviews for depth. Competitive intelligence for context. Mystery audits, geo-mapping, regulatory assessment — whatever serves the objective.',
                bg: 'bg-purple-50', border: 'border-purple-200', numColor: 'text-purple-300', titleColor: 'text-purple-900',
              },
              {
                num: '04',
                title: 'Deliver Insight That Moves Decisions',
                desc: 'Our output is built to be used. Clear findings. Honest implications. Actionable recommendations. Not data archives. Not research for research\'s sake. Intelligence that helps your leadership team move forward with confidence.',
                bg: 'bg-emerald-50', border: 'border-emerald-200', numColor: 'text-emerald-300', titleColor: 'text-emerald-900',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className={`${item.bg} border ${item.border} rounded-2xl p-6 h-full flex flex-col`}>
                  <span className={`font-heading font-black text-[64px] leading-none ${item.numColor} block mb-3`}>{item.num}</span>
                  <h3 className={`font-heading font-bold text-[17px] ${item.titleColor} mb-3 leading-tight`}>{item.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed flex-1">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section className="bg-bg-soft section-padding border-t border-border">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <span className="section-tag">Research Services</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mt-1 mb-3">
              <GradientText hoverOnly animationSpeed={2}>Standalone Research Capabilities</GradientText>
            </h2>
            <p className="font-body text-text-muted text-lg max-w-[52ch]">
              Beyond advisory, we also offer standalone research services for specific intelligence needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchServices.map((svc, i) => {
              const [name, ...rest] = svc.split(' — ')
              const desc = rest.join(' — ')
              const colors = [
                { bg: 'bg-amber-50', border: 'border-amber-200', dot: '#E8A020' },
                { bg: 'bg-blue-50', border: 'border-blue-200', dot: '#2B4A8C' },
                { bg: 'bg-purple-50', border: 'border-purple-200', dot: '#7D2B5E' },
                { bg: 'bg-emerald-50', border: 'border-emerald-200', dot: '#047857' },
              ]
              const c = colors[i % colors.length]
              return (
                <AnimatedSection key={name} delay={i * 0.07}>
                  <div className={`${c.bg} border ${c.border} rounded-xl p-5 flex items-start gap-3 h-full`}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: c.dot }} />
                    <div>
                      <span className="font-body font-semibold text-[14px] text-text block mb-0.5">{name}</span>
                      <span className="font-body text-[13px] text-text-muted leading-snug">{desc}</span>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Core Service Areas</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              <GradientText hoverOnly animationSpeed={2}>Comprehensive Research Capabilities</GradientText>
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <AnimatedSection key={area.id} delay={i * 0.1}>
                <div id={area.id} className="overflow-hidden rounded-2xl border border-border h-full group transition-all duration-300 hover:shadow-card-hover hover:border-primary/20 flex flex-col bg-white">

                  {/* Photo header */}
                  <div className="relative overflow-hidden" style={{ height: 160 }}>
                    {area.image && (
                      <div
                        className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${area.image})`, backgroundPosition: (area as any).imagePosition ?? 'center' }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center flex-shrink-0">
                        <area.icon size={20} className="text-white" />
                      </div>
                      <h3 className="font-heading font-medium text-[18px] text-white leading-snug">{area.title}</h3>
                    </div>
                  </div>

                  {/* Service list */}
                  <div className="p-5 flex-1">
                    <ul className="space-y-2.5">
                      {area.services.map((svc) => (
                        <li key={svc} className="flex items-start gap-2.5">
                          <span className="text-accent font-bold mt-0.5 flex-shrink-0 text-sm">›</span>
                          <span className="font-body text-[13.5px] text-text-muted leading-snug">{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-soft section-padding border-t border-border">
        <div className="container-content">
          <AnimatedSection className="text-center">
            <span className="section-tag">Get Started</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 mt-2">
              Ready To Define Your Next Move?
            </h2>
            <p className="font-body text-text-muted text-lg max-w-[48ch] mx-auto mb-8">
              Whether you're at inception, scaling, optimizing, or renewing — we're ready to bring the clarity that leads to confident decisions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
                Start A Conversation
              </PillButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-dark text-dark font-body text-[15px] font-medium rounded-full px-6 py-3 hover:bg-dark hover:text-white transition-all"
              >
                Explore Case Studies <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
