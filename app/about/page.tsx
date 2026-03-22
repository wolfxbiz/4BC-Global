import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Globe, Users, Award, Lightbulb } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'About 4BC Global — Our Story, Team & Approach',
  description: 'Formerly 4SiGHT Business Consulting with Kantar origins. 100+ years cumulative research experience across the MEA region.',
}

const regions = [
  { region: 'GCC', countries: 'UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain' },
  { region: 'Levant', countries: 'Lebanon, Jordan, Iran, Iraq' },
  { region: 'Africa', countries: 'Egypt, Algeria, Morocco, Kenya, Ghana, South Africa, DRC and others' },
  { region: 'Asia', countries: 'India, Pakistan, Sri Lanka, Bangladesh, Thailand' },
  { region: 'Europe', countries: 'UK' },
]

const differentiators = [
  {
    icon: Award,
    title: 'Advised Global, Regional & Public Sector Companies',
    body: 'Strong experience advising private and public sector companies across the MEA region including Unilever, Nestlé, ENOC, Emarat, Bridgestone, Toyota and many more.',
  },
  {
    icon: BarChart2Icon,
    title: 'Executed Complex Research Involving Sizing, Estimations & Intelligence',
    body: '10+ years of studies including Market Assessment, Industry Landscape, Competitive Intelligence, Technology Research, Enterprise Loyalty & Satisfaction, Mystery Audits and Network Planning.',
  },
  {
    icon: Globe,
    title: 'Sectorial Knowledge Across Wide Range of Categories',
    body: 'Sectors include FMCG, Real Estate, Industrial, Oil & Gas, Financial Services, IT, and Telecom. Categories researched include Plant-based foods, Salad dressings, Vegetable Oils, Lubricants, Payment services, VOIP, Broadband and more.',
  },
  {
    icon: Users,
    title: 'Highly Experienced, Senior-Led Team',
    body: 'Team of senior business research specialists with an average of more than 15 years of experience. A combination of desk research, qualitative and quantitative techniques are used to address every objective.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Diagnose First',
    body: 'Deep understanding of the client\'s specific business challenge through discovery sessions. We ask the right questions before we prescribe any solution.',
  },
  {
    step: '02',
    title: 'Design the Methodology',
    body: 'Craft the optimal research approach based on: core business objective, available information, market dynamics and complexity, channel partners, time and capital investment constraints.',
  },
  {
    step: '03',
    title: 'Blend Techniques',
    body: 'Most engagements use a strategic combination of quantitative surveys, qualitative depth interviews, strategic secondary research, and bespoke tailor-made techniques.',
  },
]

// Using a workaround since we can't import BarChart2 twice
function BarChart2Icon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        headline="About 4BC Global"
        subheadline="From Kantar roots to independent advisory — research-led strategy for the MEA region."
      />

      {/* Sub-nav anchors */}
      <nav className="bg-white border-b border-border sticky top-16 lg:top-20 z-30">
        <div className="container-content">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm font-heading font-medium text-text-muted">
            {['Our Story', 'Our Purpose', 'Our Philosophy', 'Geographical Footprint', "Why We're Different"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`}
                className="whitespace-nowrap hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Our Story */}
      <section id="our-story" className="bg-white section-padding">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="section-tag">Our Story</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">
                Built from Kantar Roots, Designed for MEA
              </h2>
              <div className="accent-divider mb-8 mx-0" style={{ margin: '0 0 2rem 0' }} />
              <div className="space-y-4 font-body text-text-muted leading-relaxed text-lg">
                <p>
                  4BC Global (formerly 4SiGHT Business Consulting) is a specialist research firm with origins in Kantar. Established in 2020 in Dubai, the company branched out from Kantar to provide tailor-made B2B and B2C market research solutions to clients across the Middle East and Africa (MEA) region.
                </p>
                <p>
                  With a cumulative research experience of more than 100 years in the region, our team brings deep expertise across private, public, and multinational sectors — helping organisations design and execute growth strategies grounded in data.
                </p>
                <p>
                  4BC Global has extensive experience advising Private, Public Sector, and Multinational companies in the MEA region across a wide range of sectors. The company specializes in developing method-neutral approaches to solve challenging enterprise sales and marketing problems.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section id="our-purpose" className="bg-dark section-padding">
        <div className="container-content text-center">
          <AnimatedSection>
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-accent mb-6 inline-block">Our Purpose</span>
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-accent italic leading-relaxed max-w-3xl mx-auto">
              "To aid our clients take strategic decisions based on accurate and timely insights."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Philosophy */}
      <section id="our-philosophy" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Our Philosophy</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              Your Business Needs Dictate Our Approach
            </h2>
            <p className="font-body text-text-muted mt-4 max-w-2xl mx-auto">
              We reject one-size-fits-all methodologies. Our method-neutral approach is bespoke to each client's specific business challenge.
            </p>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
            {steps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.2} className="relative">
                <div className="card text-center md:rounded-none md:border-r-0 last:border-r first:rounded-l-card last:rounded-r-card h-full">
                  <div className="text-5xl font-heading font-bold text-primary/10 mb-3">{step.step}</div>
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{step.body}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-accent rounded-full items-center justify-center text-dark font-bold text-sm">
                    →
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="font-heading text-lg font-semibold text-text">
              Results that are: <span className="text-primary">Relevant</span> · <span className="text-primary">Precise</span> · <span className="text-primary">Actionable</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Geographical Footprint */}
      <section id="geographical-footprint" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Our Reach</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              40+ Countries. 2 Offices. 4 Partner Hubs.
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimatedSection>
              {/* Map visual */}
              <div className="bg-gradient-hero rounded-card p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 800 400" className="w-full h-full" fill="none">
                    {/* Simplified world map dots */}
                    {[...Array(50)].map((_, i) => (
                      <circle key={i} cx={50 + (i % 10) * 70} cy={50 + Math.floor(i / 10) * 70} r="3" fill="white" opacity="0.6" />
                    ))}
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { num: '40+', label: 'Countries' },
                      { num: '2', label: 'Offices' },
                      { num: '4', label: 'Partner Hubs' },
                      { num: '100+', label: 'Years Experience' },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="font-heading font-bold text-3xl text-accent">{item.num}</div>
                        <div className="font-body text-xs text-gray-300">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {regions.map((r) => (
                  <div key={r.region} className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
                    <div className="w-20 flex-shrink-0">
                      <span className="font-heading font-semibold text-sm text-primary">{r.region}</span>
                    </div>
                    <p className="font-body text-sm text-text-muted">{r.countries}</p>
                  </div>
                ))}
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <p className="font-heading font-semibold text-sm text-accent">Partner Offices</p>
                  <p className="font-body text-sm text-text-muted mt-1">India · Kenya · Algeria · South Africa</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section id="why-were-different" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Why We're Different</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              What Sets 4BC Global Apart
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.15}>
                <div className="card flex gap-5 h-full">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <d.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-text mb-2">{d.title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4">
        <div className="container-content text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-white mb-4">
              Ready to work with a senior-led research team?
            </h2>
            <Link href="/contact" className="btn-primary">
              Get in Touch →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
