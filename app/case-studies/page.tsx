'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Users, BarChart2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const filters = ['All', 'Retail', 'Finance', 'Oil & Gas', 'Industrial', 'Government', 'Real Estate', 'Transport']

const caseStudies = [
  {
    id: 'cs-01',
    sector: 'Retail',
    title: 'Identifying Potential Locations to Expand a Grocery Store Network',
    geography: 'Dubai and Abu Dhabi, UAE',
    segment: 'Grocery shops, Consumers',
    methodology: 'Qualitative IDIs: 20+ · Quantitative Interviews: 500+ · Secondary research',
    challenge: 'A diversified business group needed to expand their retail operations. Key questions: Which locations are most attractive? How many stores? What store format? What product mix? What is the competitive landscape?',
    approach: '4BC conducted a thorough geo-mapping exercise dividing cities into clusters, plotting retail stores, and understanding the demographic profile of residents and their grocery shopping habits. High-attractiveness clusters were identified.',
    outcome: 'The client expanded their retail operations across high-attractive clusters across each of the cities.',
  },
  {
    id: 'cs-02',
    sector: 'Transport',
    title: 'Opportunity Assessment of Digitalization of Minibus Taxis in South Africa',
    geography: 'South Africa',
    segment: 'Commuters, Taxi Owners, Taxi Associations, Taxi Financiers',
    methodology: 'Qualitative IDIs: 50+ · Quantitative Interviews: 500+',
    challenge: 'A leading card payment company wanted to develop a solution to digitalize the ticketing system among minibus taxis in South Africa by understanding the opportunity size, drivers, and barriers.',
    approach: '4BC conducted an opportunity sizing analysis by estimating mini-bus taxis operating in South Africa, along with large sample quantitative and qualitative in-depth interviews with drivers, passengers, taxi associations and government authorities.',
    outcome: '4BC recommended a go-to-market strategy based on findings and a phase-wise roll-out plan for successful implementation.',
  },
  {
    id: 'cs-03',
    sector: 'Retail',
    title: 'Usage & Attitudes of HORECA Towards Oils in Saudi Arabia',
    geography: 'Saudi Arabia (Riyadh, Jeddah, Dammam)',
    segment: 'HORECA',
    methodology: 'Quantitative Interviews: 300+',
    challenge: 'A leading FMCG company needed to develop a successful growth strategy in the HORECA segment by understanding their needs and expectations in the "oil" category.',
    approach: 'Large sample quantitative research across HORECA in Saudi Arabia to understand purchase habits, brand awareness, and sourcing practices.',
    outcome: 'The client was able to penetrate further into the HORECA segment for oils and fats by offering the right packaging and SKUs.',
  },
  {
    id: 'cs-04',
    sector: 'Industrial',
    title: 'Develop Channel Strategy for a Large Business Group in UAE',
    geography: 'UAE',
    segment: 'Dealers, Consumers',
    methodology: 'Qualitative IDIs: 100+ · Quantitative Interviews: 4,500+ · Secondary Research · Geo-mapping',
    challenge: 'One of the largest business Groups in UAE wanted to understand the channel network for all its offerings across automobile, industrial equipment, and services.',
    approach: '4BC used the geo-mapping platform to understand demographics, conducted 100+ Expert IDIs, and mapped 1,500+ GPS locations along with tons of secondary data.',
    outcome: 'The client developed a 5-year network strategy based on the findings.',
  },
  {
    id: 'cs-05',
    sector: 'Government',
    title: 'Market Assessment of Illegal Remittance in Saudi Arabia',
    geography: 'Saudi Arabia',
    segment: 'General consumers (expats)',
    methodology: 'Quantitative Interviews: 500+ · Observation Research · Mystery Visits: 10+',
    challenge: 'A government entity of Saudi Arabia needed to understand the volume of illegal remittance originating from the country.',
    approach: 'In-depth analysis to estimate the market size using extrapolation techniques. Large sample quantitative survey among expats + desk research + qualitative in-depth interviews.',
    outcome: '4BC recommended the lost opportunity size and measures to curb illegal remittance. The client understood the quantum, value, and modus operandi — and took measures to curb the illegal channel.',
  },
  {
    id: 'cs-06',
    sector: 'Industrial',
    title: 'Market Feasibility for Setting Up a Concrete Pipe Manufacturing Unit in Oman',
    geography: 'UAE, Oman and Saudi Arabia',
    segment: 'Manufacturers, EPC Consultants and Contractors',
    methodology: 'Qualitative IDIs: 50+ · Secondary Research',
    challenge: 'A large Omani Group needed to understand the market potential for concrete pipe business in Oman and its export opportunity to neighboring countries.',
    approach: '4BC conducted competition landscape, market sizing, market share, and market forecast analysis for sewage pipelines and storm water drainage pipelines.',
    outcome: 'The client has started operations of manufacturing concrete pipes in Muscat, Oman, targeting Oman, UAE and Saudi Arabia.',
  },
  {
    id: 'cs-07',
    sector: 'Oil & Gas',
    title: 'Customer Satisfaction Study for a Major O&G Business in the UAE',
    geography: 'UAE',
    segment: 'Decision makers among customer companies',
    methodology: 'Quantitative Interviews (CATI, Online): 300+',
    challenge: 'The petroleum retail business of a major group needed to assess current satisfaction levels across customer touchpoints and identify key improvement areas.',
    approach: 'A customer relationship assessment program was designed to assess satisfaction levels, identify key strengths and improvement areas. The program has been an annual affair conducted for more than 10 rounds.',
    outcome: 'Clear improvement areas identified for each survey round. The client made changes to further consolidate loyalty — serving as inputs for winning the Dubai Quality Award.',
  },
  {
    id: 'cs-08',
    sector: 'Real Estate',
    title: 'Competitive Market Intelligence Study on Various Free Zones in the UAE',
    geography: 'UAE',
    segment: 'Offices, Industrial Units, Land, Flexi Desk',
    methodology: 'Mystery Calls: 50+ · Secondary Research',
    challenge: 'A prominent government-owned free zone authority needed to understand the competition offerings and conduct a benchmarking competitive intelligence study.',
    approach: '4BC conducted desk research along with mystery calls to free zones to understand offerings and prices.',
    outcome: 'The client developed their offerings to be competitive in the local UAE market.',
  },
]

const sectorColors: Record<string, string> = {
  Retail: 'bg-emerald-100 text-emerald-800',
  Finance: 'bg-blue-100 text-blue-800',
  'Oil & Gas': 'bg-orange-100 text-orange-800',
  Industrial: 'bg-gray-100 text-gray-800',
  Government: 'bg-purple-100 text-purple-800',
  'Real Estate': 'bg-amber-100 text-amber-800',
  Transport: 'bg-cyan-100 text-cyan-800',
}

function CaseStudyCard({ cs }: { cs: typeof caseStudies[0] }) {
  const [expanded, setExpanded] = useState(false)
  const colorClass = sectorColors[cs.sector] || 'bg-primary/10 text-primary'

  return (
    <div className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col">
      <div className="p-6 flex-1">
        <span className={`text-xs font-heading font-medium tracking-wider uppercase rounded-full px-3 py-1 ${colorClass} inline-block mb-3`}>
          {cs.sector}
        </span>
        <h3 className="font-heading font-medium text-lg text-text mb-3 leading-snug">{cs.title}</h3>
        <div className="flex items-center gap-1 text-xs text-text-muted mb-2">
          <MapPin size={12} /> {cs.geography}
        </div>
        <p className="font-body text-xs text-text-muted italic mb-4">{cs.methodology}</p>

        {expanded && (
          <div className="space-y-4 mt-4 pt-4 border-t border-border">
            <div>
              <h4 className="font-heading font-medium text-sm text-primary mb-1">The Challenge</h4>
              <p className="font-body text-sm text-text-muted leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h4 className="font-heading font-medium text-sm text-primary mb-1">Our Approach</h4>
              <p className="font-body text-sm text-text-muted leading-relaxed">{cs.approach}</p>
            </div>
            <div>
              <h4 className="font-heading font-medium text-sm text-primary mb-1">The Outcome</h4>
              <p className="font-body text-sm text-text-muted leading-relaxed">{cs.outcome}</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-heading font-medium text-plum hover:text-primary transition-colors"
        >
          {expanded ? '← Show Less' : 'Read More →'}
        </button>
      </div>
    </div>
  )
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.sector === activeFilter)

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-hero py-20 md:py-28 px-4">
        <div className="container-content text-center">
          <div className="h-[3px] w-20 mx-auto bg-gradient-accent rounded-full mb-6" />
          <h1 className="font-heading font-medium text-4xl md:text-5xl text-white mb-4">Case Studies</h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto">Real challenges. Real clients. Real outcomes.</p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-heading font-medium text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-text-muted border-border hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, i) => (
              <AnimatedSection key={cs.id} delay={i * 0.08}>
                <CaseStudyCard cs={cs} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16 px-4">
        <div className="container-content text-center">
          <AnimatedSection>
            <h2 className="font-heading font-medium text-3xl text-white mb-4">
              Want to discuss a specific challenge?
            </h2>
            <p className="font-body text-gray-300 mb-8">Let us design a bespoke research solution for your market.</p>
            <Link href="/contact" className="btn-primary">
              Request a Custom Case Study Discussion →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
