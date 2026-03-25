import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Our Clients — 4BC Global',
  description: 'Trusted by VISA, ENOC, Unilever, Toyota, DP World, and 100+ other industry leaders across MEA.',
}

const clientGroups = [
  {
    sector: 'Free Zone & Real Estate',
    clients: ['Palmare', 'DMCC', 'Nakheel', 'Palm Hills', 'Dubai South', 'Dubai Airport Freezone', 'Dubai Development Authority', 'Emaar', 'DP World', 'WJ Towell'],
  },
  {
    sector: 'Construction, Building Material & Engineering',
    clients: ['Jotun', 'ACC', 'Sadolin', 'Twiga', 'Arkan', 'Geberit', 'ThyssenKrupp', 'Al-Futtaim Engineering', 'Amiantit Oman', 'The Kanoo Group', 'Thermax'],
  },
  {
    sector: 'Petrochemicals, Energy & Utilities',
    clients: ['Aramco', 'ENOC', 'Shell', 'Castrol', 'Emarat', 'Emirates Gas', 'Horizon Terminals', 'MARAFIQ', 'JW Azure'],
  },
  {
    sector: 'IT, Electronics & Home Appliances',
    clients: ['BARCO', 'Ariston', 'LG', 'Epson', 'Samsung'],
  },
  {
    sector: 'Telecom',
    clients: ['du', 'Maroc Telecom', 'Airtel', 'Vodafone', 'e& (Etisalat)', 'Dizzy'],
  },
  {
    sector: 'Banking, Finance & Insurance',
    clients: ['VISA', 'ADCB', 'American Express', 'Bupa', 'RSA', 'UAE Insurance Authority', 'SABB', 'HSBC', 'Cashee', 'RFIGlobal'],
  },
  {
    sector: 'Automotive',
    clients: ['Ford', 'Mercedes', 'Toyota', 'Nissan', 'Audi', 'Volvo', 'GM', 'Renault', 'Kia', 'Bridgestone'],
  },
  {
    sector: 'Regional Conglomerates',
    clients: ['Abdul Latif Jameel', 'JK Cement', 'Alghanim', 'Al-Futtaim Group'],
  },
  {
    sector: 'Government & Regulators',
    clients: ['GACA', 'mada'],
  },
  {
    sector: 'FMCG & Food',
    clients: ['Savola', 'Nestlé', 'Nestlé Professional', 'Unilever', 'LeSaffre', 'BMMI', 'LuLu', 'Freshly Foods', 'KBBO Group'],
  },
]

const testimonials = [
  {
    quote: "Team, this is good work and really helps get a granular understanding of the flow of cargo and each product in the market.",
    author: "VP Growth",
    company: "DP World",
  },
  {
    quote: "The report looks very good. Sharp and concise analysis.",
    author: "Market Research Manager",
    company: "ENOC",
  },
  {
    quote: "This is a wonderful piece of work, a giant leap forward for the organization.",
    author: "Senior Manager",
    company: "Al-Futtaim Group",
  },
  {
    quote: "The insights and the market strategy is very useful for our roll out. The insights have greater details for developing our strategy.",
    author: "Product Manager",
    company: "Visa",
  },
]

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        headline="Our Clients"
        subheadline="Trusted by industry leaders across the MEA region"
      />

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="container-content text-center">
          <AnimatedSection>
            <p className="font-body text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Our clientele spans multiple industries across the MEA region — from Fortune 500 multinationals to regional conglomerates and government entities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logo Wall by Sector */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Our Clients</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              100+ Clients Across 10 Sectors
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="space-y-12">
            {clientGroups.map((group, gi) => (
              <AnimatedSection key={group.sector} delay={gi * 0.05}>
                <div>
                  <h3 className="font-heading font-medium text-sm text-text-muted uppercase tracking-wider mb-4 border-b border-border pb-2">
                    {group.sector}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.clients.map((client) => (
                      <div
                        key={client}
                        className="font-heading font-medium text-sm text-text-muted bg-white border border-border rounded-lg px-4 py-2.5 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                      >
                        {client}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials 2x2 Grid */}
      <section className="bg-dark section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 inline-block">Testimonials</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-white">
              What Our Clients Say
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-dark-surface border border-white/10 rounded-card p-8 relative">
                  <div className="text-accent text-6xl font-heading leading-none absolute top-4 left-6 opacity-40">"</div>
                  <p className="font-heading text-lg text-white italic leading-relaxed pt-6 mb-4">
                    "{t.quote}"
                  </p>
                  <p className="font-body text-sm text-accent font-medium">
                    — {t.author}, <span className="text-gray-400">{t.company}</span>
                  </p>
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
            <h2 className="font-heading font-medium text-3xl text-white mb-4">
              Join Our Growing Client List
            </h2>
            <p className="font-body text-gray-300 mb-8">
              Let us bring the same depth of insight to your business challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
