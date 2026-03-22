'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const sectors = [
  {
    name: 'Retail & Food Products',
    engagements: '50+',
    research: 'Chocolate Spreads, Dressings, Ready-to-eat foods, Frozen foods, HORECA, Beverages, Vegetable oils and fats, Bread improvers',
    clients: 'Savola · LeSaffre · Nestlé · Unilever · BMMI · LuLu · Freshly Foods · KBBO Group · Nestlé Professional',
    engagementsList: [
      'Market sizing and opportunity assessment of Tea across Egypt and Pakistan',
      'Concept evaluation for Chocolate Spread across HORECA in UAE and Saudi Arabia',
      'Need state assessment of salad dressings across HORECA in UAE',
      'Network planning for opening a new grocery store in UAE',
    ],
  },
  {
    name: 'Banking & Finance',
    engagements: '75+',
    research: 'SME Banking, Corporate Banking, Credit Cards, Corporate Cards, Payment Solutions, Online Trading, Investment, Insurance, Fintech',
    clients: 'VISA · ADCB · American Express · Bupa · RSA · UAE Insurance Authority · SABB · Cashee · HSBC · RFIGlobal',
    engagementsList: [
      'Market sizing and opportunity assessment for corporate credit cards across UAE and Egypt',
      'Brand awareness and usage of medical insurance among consumers in UAE',
      'Opportunity assessment for digitizing payments across mini-bus taxis in South Africa',
      'Voice of customers and satisfaction with banking services in UAE',
    ],
  },
  {
    name: 'Real Estate & Construction',
    engagements: '30+',
    research: 'Free Zones, Commercial Offices, Malls, Paints, Pipes, Cement, Adhesives, Coatings, Elevators. Construction Materials, Roofing, Insulation & Pipes, Elevators & Escalators',
    clients: 'DP World · DMCC · Emaar · Dubai South · Dubai Airport Freezone · Dubai Development Authority · WJ Towell · Palm Hills · Nakheel · ThyssenKrupp · Al-Futtaim Engineering',
    engagementsList: [
      'Competitive intelligence and cost benchmarking of free zones in the UAE',
      'Catchment area assessment for developing a new mall in UAE',
      'Opportunity assessment for facility management services in UAE',
      'Understanding trade flow within Dubai Fruit and Vegetable Market',
    ],
  },
  {
    name: 'Fuels, Energy & Environment',
    engagements: '60+',
    research: 'LPG, propane, lubricants, diesel, petrol, commercial fuels. Biotech, water treatment, environmental dust control equipment, waste water treatment. Boilers & industrial utilities.',
    clients: 'Emirates Gas · Shell · Emarat · Horizon Terminals · ENOC · Castrol · Aramco · MARAFIQ · JW Azure',
    engagementsList: [
      'Market sizing and shares for lubricants in UAE',
      'Market assessment for LPG and Propane gases for cylinders and bulk gas in UAE',
      'Mystery audits for process compliance for fuel stations in UAE',
      'Customer satisfaction and NPS for commercial fuels, LPG, Lubricants businesses',
    ],
  },
  {
    name: 'Industrial',
    engagements: '50+',
    research: 'Boilers, Water treatment plants, Environmental dust control equipment, Water and Waste-water treatment plants, Concrete pipes, Decorative paints, Construction equipment, Automotive services',
    clients: 'ThyssenKrupp · Arkan · The Kanoo Group · Thermax · Twiga · Sadolin · Jotun · Amiantit Oman',
    engagementsList: [
      'Market feasibility for setting up a concrete pipe factory in Oman',
      'Market sizing and shares for decorative paints in Qatar',
      'Brand health assessment for decorative paints in UAE',
      '5-year Network planning for a leading business house into automotive, construction equipment and services',
    ],
  },
  {
    name: 'Logistics & Transportation',
    engagements: '30+',
    research: 'LCV, HCV, Passenger cars, Spare parts, Tyres, Auto components, Port intelligence, Connected car services',
    clients: 'Ford · Mercedes · Toyota · Nissan · Audi · Volvo · GM · Renault · Kia · Bridgestone',
    engagementsList: [
      'Industry landscape of used cars in UAE, DRC, Afghanistan and Yemen',
      'Market sizing and dealer optimization for TSR tyres across UAE, Saudi Arabia and Egypt',
      'Brand positioning and usage of connected car services among consumers in UAE and Saudi Arabia',
      'Competitive intelligence on Ports across Middle East and Africa region',
    ],
  },
  {
    name: 'Telecom & ICT',
    engagements: '50+',
    research: 'Monitors, Home appliances, Office equipment, VOIP, Wired and Wireless communication systems, IT industry landscape among SMEs, Wireless presentation systems, Printers',
    clients: 'Samsung · Maroc Telecom · du · e& (Etisalat) · Vodafone · LG · BARCO · Epson · Airtel · Dizzy',
    engagementsList: [
      'ICT industry landscape and usage among SMEs in Qatar',
      'Market sizing and demand estimation for wireless presentation systems in UAE',
      'Brand positioning and usage of printers among SMEs in UAE',
      'Competitive intelligence on VOIP services in UAE',
    ],
  },
  {
    name: 'Government, Education & Regulators',
    engagements: null,
    research: 'Regulatory landscapes, policy impact, public service satisfaction, education sector demand',
    clients: 'GACA · mada · Ministry clients',
    engagementsList: [],
  },
  {
    name: 'Regional Conglomerates',
    engagements: null,
    research: 'Multi-sector advisory for large regional business groups',
    clients: 'Abdul Latif Jameel · JK Cement · Alghanim · Al-Futtaim Group',
    engagementsList: [],
  },
  {
    name: 'Metal & Core Industries',
    engagements: null,
    research: 'Steel, aluminium, construction materials, raw industrial inputs',
    clients: '',
    engagementsList: [],
  },
  {
    name: 'FMCG / CPG',
    engagements: '100+',
    research: 'Consumer goods, packaged foods, personal care, household products across MEA',
    clients: 'Unilever · Nestlé · Savola · KBBO Group',
    engagementsList: [],
  },
]

function SectorCard({ sector }: { sector: typeof sectors[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-200">
      <button
        className="w-full text-left p-6 flex items-center justify-between gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div>
            <h3 className="font-heading font-semibold text-lg text-text">{sector.name}</h3>
            {sector.engagements && (
              <span className="text-xs font-heading font-semibold text-accent bg-accent/10 rounded-full px-2 py-0.5 mt-1 inline-block">
                {sector.engagements} engagements
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 text-text-muted">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-border pt-4 space-y-4">
          <div>
            <h4 className="font-heading font-semibold text-sm text-primary mb-2">What We Research</h4>
            <p className="font-body text-sm text-text-muted leading-relaxed">{sector.research}</p>
          </div>
          {sector.clients && (
            <div>
              <h4 className="font-heading font-semibold text-sm text-primary mb-2">Sample Clients</h4>
              <p className="font-body text-sm text-text-muted">{sector.clients}</p>
            </div>
          )}
          {sector.engagementsList.length > 0 && (
            <div>
              <h4 className="font-heading font-semibold text-sm text-primary mb-2">Key Engagements</h4>
              <ul className="space-y-1">
                {sector.engagementsList.map((e) => (
                  <li key={e} className="flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">›</span>
                    <span className="font-body text-sm text-text-muted">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function SectorsPage() {
  return (
    <>
      {/* Page Header - inline since this is client component */}
      <section className="bg-gradient-hero py-20 md:py-28 px-4">
        <div className="container-content text-center">
          <div className="h-[3px] w-20 mx-auto bg-gradient-accent rounded-full mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Sectors We Serve
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto">
            Our market research solutions span a wide range of sectors across MEA
          </p>
        </div>
      </section>

      {/* Sector Grid */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <div className="text-center mb-12">
            <span className="section-tag">12 Sectors</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
              Deep Sector Expertise
            </h2>
            <p className="font-body text-text-muted mt-4 max-w-xl mx-auto">
              Click any sector to expand and see what we research, our clients, and key engagements.
            </p>
            <div className="h-[3px] w-20 mx-auto bg-gradient-accent rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectors.map((sector, i) => (
              <AnimatedSection key={sector.name} delay={i * 0.05}>
                <SectorCard sector={sector} />
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
              Don't see your sector? We cover it.
            </h2>
            <p className="font-body text-gray-300 mb-8 max-w-lg mx-auto">
              4BC Global has executed 450+ engagements across MEA. Talk to us about your specific market.
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
