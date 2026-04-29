import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Globe, Users, Award, Lightbulb } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import PageHeader from '@/components/PageHeader'
import TeamCard from '@/components/TeamCard'
import type { TeamMember } from '@/components/TeamCard'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

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

const team: TeamMember[] = [
  {
    name: 'Sukhdev Singh',
    title: 'Partner, Insights & Strategy',
    photo: '/team/sukhdev-singh.png',
    shortBio: 'Head of Business Research and Consulting practice in MEA. 25+ years of experience across Africa, Middle East, Asia and Far-East Asian markets.',
    fullBio: 'Sukhdev is the head of Business Research and Consulting practice in the MEA region. Till recently he headed the same practice at Kantar MEA since 2007. He possesses over 25 years of experience in Africa & Middle East, Asia and Far-East Asian markets. During his long career Sukhdev has helped many clients with their market entry strategies across industries as diverse as biscuits to boilers. He is also a Stakeholder Satisfaction Expert and along with Business-to-Business and Government Sector expert.',
    expertise: ['Market Entry Strategy', 'B2B Research', 'Government Sector', 'Stakeholder Satisfaction'],
  },
  {
    name: 'Siva Sankar',
    title: 'Director, Insights',
    photo: '/team/siva-sankar.png',
    shortBio: 'More than a decade of rich experience in Business and Industrial Research across Middle East, North Africa, India, China, Russia, and Turkey.',
    fullBio: 'Siva has more than a decade of rich experience in Business and Industrial Research, and has worked across diverse geographies including the Middle East, North Africa, India, China, Russia, and Turkey. He has been helping clients with their market entry and business expansion strategies, and is responsible for comprehensive delivery of solutions related to opportunity assessment, market sizing, competitor analysis, new product & market entry strategy development, channel assessment, network development, geo-mapping, and understanding regulatory environments.',
    expertise: ['Market Sizing', 'Competitor Analysis', 'Geo-mapping', 'Regulatory Environments'],
  },
  {
    name: 'Sandeep Vaddey',
    title: 'Director, Insights',
    photo: '/team/sandeep-vaddey.png',
    shortBio: '19+ years of Business Research and Consulting experience across Middle East, Africa, Turkey and Russia. Expert in Oil & Gas, Energy, Construction, ICT sectors.',
    fullBio: 'Sandeep has more than 19 years of Business Research and Consulting experience across Middle East, Africa, Turkey and Russia. He has advised clients across a wide range of sectors including Oil & Gas, Energy, Construction, Petrochemicals, General Engineering, and ICT. Sandeep\'s core competence is in conducting Market and Competitive Assessment, Market entry strategies, Market expansion, New product development, Geo-mapping and Feasibility studies.',
    expertise: ['Oil & Gas', 'Energy', 'Market Assessment', 'Feasibility Studies'],
  },
  {
    name: 'Angad Kenghe',
    title: 'Senior Manager, Insights',
    photo: '/team/angad-kenghe.png',
    shortBio: '5+ years of diverse research experience across consumer insights, business research, videometrics, and retail panel-based methodology.',
    fullBio: 'Angad comes with over 5+ years of diverse research experience across consumer insights, business research, videometrics, and retail panel-based methodology. He has worked with small & medium businesses as well as large players, spanning MEA, US & Europe, and India regions. He has helped clients with projects across market overview, industry analysis, competitor landscape, new product development, feasibility, mystery shopping, and customer experience.',
    expertise: ['Consumer Insights', 'Mystery Shopping', 'Competitor Landscape', 'New Product Development'],
  },
  {
    name: 'Tarun Sinhal',
    title: 'Senior Consultant',
    photo: '/team/tarun-sinhal.png',
    shortBio: '18+ years of experience in Market Research across Middle East, Africa, India. Expert in Branding, Communication, Demand Estimation, Pricing, and Channel Dynamics.',
    fullBio: 'Tarun possesses over 18 years of experience in Market Research across Middle East, Africa, India, including a brief exposure to research projects in North America. He has worked on custom research projects across various domains including Branding, Communication, Demand Estimation, Pricing, New Product Development, Channel Dynamics, and Market Landscape. Key clients include Multinationals (Unilever, Daimler, LG, Samsung, Kia Motors), Regional businesses (Al-Futtaim, du, Etisalat, Thermax), and Government (MoTC Qatar, Insurance Authority UAE).',
    expertise: ['Branding Research', 'Demand Estimation', 'Pricing Studies', 'Channel Dynamics'],
  },
  {
    name: 'Anu Param',
    title: 'Sr. Project Management Executive',
    photo: '/team/anu-param.png',
    shortBio: '15+ years in the MR industry. Responsible for end-to-end client servicing from project management through final reports across Telecom, Finance, Retail, and Auto.',
    fullBio: 'Anu has over 15 years in the MR industry and has been working within Business Consulting since 2020. She has worked with clients across sectors including Telecom, Financial services, Retail, and Auto. Anu is responsible for end-to-end client servicing from project management activities (including Field & Tab Projects) through to preparation of final reports. She is directly involved in all project activities including questionnaire scripting, briefing of interviewers, monitoring fieldwork quality & timelines, managing vendors, and managing client co-ordination activities.',
    expertise: ['Project Management', 'Field Operations', 'Questionnaire Design', 'Client Coordination'],
  },
  {
    name: 'Vamsi Ganti',
    title: 'Senior Consultant',
    photo: '/team/vamsi-ganti.png',
    shortBio: '15+ years specializing in Customer Experience — relationship assessment, mystery shopping, employee engagement across Telecom, Retail, Oil & Gas, Automotive.',
    fullBio: 'Vamsi brings more than 15 years of specialization in the Customer Experience domain with experience in relationship assessment, mystery shopping, employee engagement studies. His expertise varies in helping clients find solutions on developing customer experience programs, mystery shopping programs, employee experience, and trade experience. He has been engaged in developing CX programs across a wide variety of clients in diverse fields like Telecom, Retail, Oil & Gas, Automotive, SEZ, Finance, and Regulatory bodies. He also has experience in conducting client engagement workshops to drive customer experience adoption across the client organization.',
    expertise: ['Customer Experience', 'Mystery Shopping', 'Employee Engagement', 'CX Workshops'],
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
      <nav className="bg-white border-b border-border sticky top-16 lg:top-[72px] z-30">
        <div className="container-content">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm font-heading font-medium text-text-muted">
            {['Our Story', 'Our Purpose', 'Our Philosophy', 'Geographical Footprint', "Why We're Different", 'Our Team'].map((item) => (
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
              <h2 className="font-heading font-medium text-3xl md:text-4xl text-text mb-6">
                <GradientText hoverOnly animationSpeed={2}>Built from Kantar Roots, Designed for MEA</GradientText>
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
      <section id="our-purpose" className="section-dark section-padding">
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content text-center">
          <AnimatedSection>
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-6 inline-block">Our Purpose</span>
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
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              <GradientText hoverOnly animationSpeed={2}>Your Business Needs Dictate Our Approach</GradientText>
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
                  <div className="text-5xl font-heading font-medium text-primary/10 mb-3">{step.step}</div>
                  <h3 className="font-heading font-medium text-xl text-primary mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{step.body}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-accent rounded-full items-center justify-center text-dark font-medium text-sm">
                    →
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="font-heading text-lg font-medium text-text">
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
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              <GradientText hoverOnly animationSpeed={2}>40+ Countries. 2 Offices. 4 Partner Hubs.</GradientText>
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
                        <div className="font-heading font-medium text-3xl text-accent">{item.num}</div>
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
                      <span className="font-heading font-medium text-sm text-primary">{r.region}</span>
                    </div>
                    <p className="font-body text-sm text-text-muted">{r.countries}</p>
                  </div>
                ))}
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <p className="font-heading font-medium text-sm text-accent">Partner Offices</p>
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
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              <GradientText hoverOnly animationSpeed={2}>What Sets 4BC Global Apart</GradientText>
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
                    <h3 className="font-heading font-medium text-lg text-text mb-2">{d.title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="our-team" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-6">
            <span className="section-tag">Our Team</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
              <GradientText hoverOnly animationSpeed={2}>Senior-Led. MEA-Experienced. Genuinely Curious.</GradientText>
            </h2>
            <div className="accent-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection className="text-center mb-12">
            <p className="font-body text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Our team brings a cumulative <strong className="text-primary">100+ years</strong> of market research and consulting experience across the Middle East, Africa, Asia and Europe. Every engagement is led by a research director — so you always work with the person who truly understands your challenge.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <TeamCard member={member} />
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
              Ready to work with a senior-led research team?
            </h2>
            <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
              Get in Touch
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
