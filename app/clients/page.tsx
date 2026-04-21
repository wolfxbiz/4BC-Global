import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import PageHeader from '@/components/PageHeader'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

export const metadata: Metadata = {
  title: 'Our Clients — 4BC Global',
  description: 'Trusted by VISA, ENOC, Unilever, Toyota, DP World, and 100+ other industry leaders across MEA.',
}

const clientGroups = [
  {
    sector: 'Retail & Food Products',
    logos: [
      '/logos/01_Retail_and_Food/bmmi.png',
      '/logos/01_Retail_and_Food/lulu.png',
      '/logos/01_Retail_and_Food/freshly-foods.png',
      '/logos/01_Retail_and_Food/lesaffre.png',
      '/logos/01_Retail_and_Food/unilever.jpeg',
      '/logos/01_Retail_and_Food/nestle.png',
      '/logos/01_Retail_and_Food/kbbo-group.png',
      '/logos/01_Retail_and_Food/savola.png',
    ],
  },
  {
    sector: 'Banking, Finance & Insurance',
    logos: [
      '/logos/02_Banking_and_Finance/visa.png',
      '/logos/02_Banking_and_Finance/rfi-global.png',
      '/logos/02_Banking_and_Finance/hsbc.png',
      '/logos/02_Banking_and_Finance/american-express.png',
      '/logos/02_Banking_and_Finance/adcb.png',
      '/logos/02_Banking_and_Finance/bupa.png',
      '/logos/02_Banking_and_Finance/rsa.png',
      '/logos/02_Banking_and_Finance/uae-insurance-authority.jpeg',
      '/logos/02_Banking_and_Finance/sabb.png',
      '/logos/02_Banking_and_Finance/cashee.png',
    ],
  },
  {
    sector: 'Real Estate & Construction',
    logos: [
      '/logos/03_Real_Estate_and_Construction/emaar.png',
      '/logos/03_Real_Estate_and_Construction/dubai-airport-freezone.jpeg',
      '/logos/03_Real_Estate_and_Construction/dmcc.png',
      '/logos/03_Real_Estate_and_Construction/dubai-south.png',
      '/logos/03_Real_Estate_and_Construction/palm-hills.png',
      '/logos/03_Real_Estate_and_Construction/wj-towell.png',
      '/logos/03_Real_Estate_and_Construction/dp-world.jpeg',
      '/logos/03_Real_Estate_and_Construction/dubai-development-authority.png',
    ],
  },
  {
    sector: 'Industrial',
    logos: [
      '/logos/04_Industrial/jotun.png',
      '/logos/04_Industrial/kanoo-group.jpeg',
      '/logos/04_Industrial/arkan.jpeg',
      '/logos/04_Industrial/amiantit-oman.png',
      '/logos/04_Industrial/thyssenkrupp.png',
      '/logos/04_Industrial/sadolin.png',
      '/logos/04_Industrial/twiga.png',
      '/logos/04_Industrial/thermax.png',
    ],
  },
  {
    sector: 'Fuels, Energy & Environment',
    logos: [
      '/logos/05_Oil_and_Gas/pdo.png',
      '/logos/05_Oil_and_Gas/emirates-gas.png',
      '/logos/05_Oil_and_Gas/enoc.png',
      '/logos/05_Oil_and_Gas/emarat.png',
      '/logos/05_Oil_and_Gas/castrol.jpeg',
      '/logos/05_Oil_and_Gas/shell.png',
      '/logos/05_Oil_and_Gas/horizon-terminals.jpeg',
      '/logos/05_Oil_and_Gas/gasco.png',
    ],
  },
  {
    sector: 'Logistics & Transportation',
    logos: [
      '/logos/06_Logistics_and_Transportation/bridgestone.png',
      '/logos/06_Logistics_and_Transportation/ford.png',
      '/logos/06_Logistics_and_Transportation/kia.jpeg',
      '/logos/06_Logistics_and_Transportation/nissan.jpeg',
      '/logos/06_Logistics_and_Transportation/audi.jpeg',
      '/logos/06_Logistics_and_Transportation/mercedes.png',
      '/logos/06_Logistics_and_Transportation/volvo.png',
      '/logos/06_Logistics_and_Transportation/gm.png',
      '/logos/06_Logistics_and_Transportation/renault.jpeg',
      '/logos/06_Logistics_and_Transportation/toyota.jpeg',
    ],
  },
  {
    sector: 'Telecom & ICT',
    logos: [
      '/logos/07_Telecom_and_ICT/du.png',
      '/logos/07_Telecom_and_ICT/maroc-telecom.png',
      '/logos/08_Extended_Clients/airtel.png',
      '/logos/07_Telecom_and_ICT/etisalat.png',
      '/logos/07_Telecom_and_ICT/vodafone.png',
      '/logos/07_Telecom_and_ICT/djezzy.jpeg',
      '/logos/07_Telecom_and_ICT/barco.png',
      '/logos/07_Telecom_and_ICT/epson.png',
      '/logos/07_Telecom_and_ICT/samsung.jpeg',
      '/logos/07_Telecom_and_ICT/lg.png',
    ],
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
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">Our Clients</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              <GradientText hoverOnly animationSpeed={2}>100+ Clients Across 7 Sectors</GradientText>
            </h2>
          </AnimatedSection>
          <div className="space-y-14">
            {clientGroups.map((group, gi) => (
              <AnimatedSection key={group.sector} delay={gi * 0.05}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-heading font-semibold text-[13px] text-primary uppercase tracking-[0.1em] whitespace-nowrap">
                      {group.sector}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                    {group.logos.map((src, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center bg-white border border-border rounded-2xl p-5 h-28 hover:border-primary/25 hover:shadow-md transition-all duration-200"
                      >
                        <Image
                          src={src}
                          alt={`${group.sector} client logo`}
                          width={140}
                          height={70}
                          className="object-contain w-full h-full"
                        />
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
      <section className="section-dark section-padding">
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
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
      <section className="relative overflow-hidden py-16 px-4">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50 pointer-events-none" />
        <div className="container-content relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-medium text-3xl text-white mb-4">
              Join Our Growing Client List
            </h2>
            <p className="font-body text-gray-300 mb-8">
              Let us bring the same depth of insight to your business challenges.
            </p>
            <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
              Start a Conversation
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
