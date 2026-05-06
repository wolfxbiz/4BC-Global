import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import PageHeader from '@/components/PageHeader'
import TeamCard from '@/components/TeamCard'
import type { TeamMember } from '@/components/TeamCard'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'
import { OpenContactButton } from '@/components/OpenContactButton'

export const metadata: Metadata = {
  title: 'About 4BC Global — Born From Excellence. Built For What\'s Next.',
  description: 'Founded by the leadership team that built Kantar MENA\'s fastest-growing research unit. 450+ engagements, 40+ markets, 100+ years of combined expertise across MEA.',
}

const regions = [
  { region: 'GCC', countries: 'UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain' },
  { region: 'Levant & Wider Region', countries: 'Lebanon, Jordan, Iraq, Iran' },
  { region: 'Africa', countries: 'Egypt, Algeria, Morocco, Kenya, Ghana, South Africa, DRC and others' },
  { region: 'Asia', countries: 'India, Pakistan, Sri Lanka, Bangladesh, Thailand' },
  { region: 'Europe', countries: 'UK' },
]

const values = [
  {
    title: 'Method Neutral',
    desc: 'We start with your business question, not a pre-packaged methodology. The research approach is always determined by the challenge — never the other way around.',
    color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200',
  },
  {
    title: 'Ground-Level Expertise',
    desc: 'Our insights are built on fieldwork and primary evidence, not downloaded reports. We operate in the market — not from a distance.',
    color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200',
  },
  {
    title: 'Bespoke by Design',
    desc: 'Every engagement is architected around your unique challenge, your market, and your objective. No templates. No off-the-shelf thinking.',
    color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-200',
  },
  {
    title: 'AI-Integrated',
    desc: 'We deploy AI where it accelerates value — faster synthesis, sharper pattern recognition, richer secondary intelligence. Judgement remains human.',
    color: 'text-pink-700', bg: 'bg-pink-50', border: 'border-pink-200',
  },
  {
    title: 'Bilingual Authority',
    desc: 'Fluent in English and Arabic. Deeply fluent in cultural translation — understanding what data means in the human context of each market.',
    color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200',
  },
]

const howWeWork = [
  {
    num: '01',
    title: 'Diagnose First',
    desc: 'Deep understanding of your business challenge through structured discovery. We ask the right questions before we prescribe any solution.',
    color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', numColor: 'text-amber-300',
  },
  {
    num: '02',
    title: 'Design the Methodology',
    desc: 'Craft the optimal research approach based on your core objective, available information, market complexity, and practical constraints.',
    color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', numColor: 'text-blue-300',
  },
  {
    num: '03',
    title: 'Blend Techniques',
    desc: 'Most engagements benefit from a strategic combination: quantitative breadth, qualitative depth, targeted secondary intelligence, and bespoke techniques designed for your specific market.',
    color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-200', numColor: 'text-purple-300',
  },
  {
    num: '04',
    title: 'Deliver What Moves Decisions',
    desc: 'Our output is built to be used — clear, precise, and directly actionable by leadership teams making real commercial decisions.',
    color: 'text-pink-700', bg: 'bg-pink-50', border: 'border-pink-200', numColor: 'text-pink-300',
  },
]

const team: TeamMember[] = [
  {
    name: 'Sukhdev Singh',
    title: 'Partner, Insights & Strategy',
    photo: '/team/sukhdev-singh.png',
    shortBio: 'Head of Business Research and Consulting practice in MEA. 25+ years of experience across Africa, Middle East, Asia and Far-East Asian markets.',
    fullBio: 'Sukhdev is the head of Business Research and Consulting practice in the MEA region. He headed the same practice at Kantar MEA since 2007, building it into the region\'s fastest-growing and most profitable research unit. He possesses over 25 years of experience in Africa & Middle East, Asia and Far-East Asian markets — specialising in market entry strategy, B2B research, government sector advisory, and stakeholder engagement.',
    expertise: ['Market Entry Strategy', 'B2B Research', 'Government Sector', 'Stakeholder Engagement'],
  },
  {
    name: 'Siva Sankar',
    title: 'Director, Insights',
    photo: '/team/siva-sankar.png',
    shortBio: 'More than a decade of experience in business and industrial research across the Middle East, North Africa, India, China, Russia, and Turkey.',
    fullBio: 'Siva has more than a decade of rich experience in Business and Industrial Research across the Middle East, North Africa, India, China, Russia, and Turkey. Deep expertise in market sizing, competitive analysis, geo-mapping, and regulatory intelligence. He has helped clients with market entry and business expansion strategies across opportunity assessment, new product development, channel assessment, network development, and geo-mapping.',
    expertise: ['Market Sizing', 'Competitive Analysis', 'Geo-mapping', 'Regulatory Intelligence'],
  },
  {
    name: 'Sandeep Vaddey',
    title: 'Director, Insights',
    photo: '/team/sandeep-vaddey.png',
    shortBio: '19+ years of research and consulting experience across the Middle East, Africa, Turkey, and Russia. Specialist in oil and gas, energy, construction, and ICT sectors.',
    fullBio: 'Sandeep has more than 19 years of Business Research and Consulting experience across Middle East, Africa, Turkey and Russia, with proven expertise in complex feasibility and market assessment studies. He has advised clients across Oil & Gas, Energy, Construction, Petrochemicals, General Engineering, and ICT — specialising in Market Assessment, Market Entry, Market Expansion, New Product Development, and Geo-mapping.',
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
    fullBio: 'Tarun possesses over 18 years of experience in Market Research across Middle East, Africa, India, including exposure to research projects in North America. He has worked on custom research projects across Branding, Communication, Demand Estimation, Pricing, New Product Development, Channel Dynamics, and Market Landscape. Key clients include Unilever, Daimler, LG, Samsung, Kia Motors, Al-Futtaim, du, Etisalat, and Government entities.',
    expertise: ['Branding Research', 'Demand Estimation', 'Pricing Studies', 'Channel Dynamics'],
  },
  {
    name: 'Anu Param',
    title: 'Sr. Project Management Executive',
    photo: '/team/anu-param.png',
    shortBio: '15+ years in the MR industry. End-to-end client servicing across Telecom, Finance, Retail, and Auto.',
    fullBio: 'Anu has over 15 years in the MR industry, working within Business Consulting since 2020. She is responsible for end-to-end client servicing from project management through final reports — covering questionnaire scripting, interviewer briefing, fieldwork quality monitoring, vendor management, and client coordination across Telecom, Financial Services, Retail, and Auto.',
    expertise: ['Project Management', 'Field Operations', 'Questionnaire Design', 'Client Coordination'],
  },
  {
    name: 'Vamsi Ganti',
    title: 'Senior Consultant',
    photo: '/team/vamsi-ganti.png',
    shortBio: '15+ years specializing in Customer Experience — relationship assessment, mystery shopping, employee engagement.',
    fullBio: 'Vamsi brings more than 15 years of specialization in the Customer Experience domain with experience in relationship assessment, mystery shopping, and employee engagement studies. He has developed CX programs across Telecom, Retail, Oil & Gas, Automotive, SEZ, Finance, and Regulatory bodies — and conducts client engagement workshops to drive CX adoption across organizations.',
    expertise: ['Customer Experience', 'Mystery Shopping', 'Employee Engagement', 'CX Workshops'],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        headline="Born From Excellence."
        subheadline="Built For What's Next."
      />

      {/* Sub-nav */}
      <nav className="bg-white border-b border-border sticky top-16 lg:top-[72px] z-30">
        <div className="container-content">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm font-heading font-medium text-text-muted">
            {[
              { label: 'Our Story', href: '#our-story' },
              { label: 'What We Stand For', href: '#what-we-stand-for' },
              { label: 'Why MEA', href: '#why-mea' },
              { label: 'Our Reach', href: '#geographical-footprint' },
              { label: 'The Team', href: '#our-team' },
              { label: 'How We Work', href: '#how-we-work' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="whitespace-nowrap hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Our Story ── */}
      <section id="our-story" className="bg-white section-padding">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="section-tag">Our Story</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-8">
                <GradientText hoverOnly animationSpeed={2}>Born From Excellence. Built For What's Next.</GradientText>
              </h2>
              <div className="space-y-5 font-body text-text-muted leading-relaxed text-[16px]">
                <p>
                  In 2007, a small focused team within Kantar MENA started doing something different. Not just conducting research — but establishing a new standard for what market intelligence could look like across the Middle East and Africa.
                </p>
                <p>
                  Over the next thirteen years, that team became Kantar MENA's fastest-growing and most profitable research unit. They advised global multinationals, regional conglomerates, and national governments across 40+ markets. They built a reputation for rigour, for listening deeply, and for delivering insight that actually changed decisions.
                </p>
                <p>
                  Then, in 2020, the entire team made a deliberate choice.
                </p>
                <p>
                  They stepped out as one — people, clients, case studies, methodologies, expertise — and founded 4BC Global.
                </p>
                <p className="font-heading font-semibold text-text text-[18px]">
                  Not to start from scratch. But to evolve.
                </p>
                <p>
                  We carried our DNA forward. We left the limitations behind.
                </p>
              </div>

              {/* Three principles */}
              <div className="mt-10 p-6 rounded-2xl bg-bg-soft border border-border">
                <p className="font-heading font-bold text-[22px] text-text mb-2">Method Neutral. Ground-Level. Bespoke.</p>
                <p className="font-body text-text-muted text-[14px]">
                  The three principles that have guided us since day one — and the reason our clients keep coming back.
                </p>
              </div>

              {/* Founding quote */}
              <blockquote className="mt-8 border-l-4 border-accent pl-5">
                <p className="font-heading italic text-[17px] text-text-muted leading-relaxed">
                  "We didn't just bring our clients with us. We brought the mission."
                </p>
                <cite className="font-body text-[13px] text-text-muted/60 not-italic mt-2 block">— Founding Team, 4BC Global</cite>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── What We Stand For ── */}
      <section id="what-we-stand-for" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">What We Stand For</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
              <GradientText hoverOnly animationSpeed={2}>These aren't values on a wall. They shape how we work.</GradientText>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className={`${v.bg} border ${v.border} rounded-2xl p-6 h-full`}>
                  <h3 className={`font-heading font-bold text-[17px] ${v.color} mb-2`}>{v.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MEA ── */}
      <section id="why-mea" className="relative section-dark section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Why MEA Demands Something Different</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-8 leading-tight">
                These are not markets you understand from a distance.
              </h2>
              <div className="space-y-5 font-body text-white/65 leading-relaxed text-[16px]">
                <p>
                  Demographic complexity varies dramatically — from expat-majority urban centres in the UAE and Qatar, to rapidly evolving local populations in Saudi Arabia, to deeply community-rooted markets across Africa. Published data is often scarce. Online panels frequently underdeliver. And the answers that matter most rarely surface in a spreadsheet.
                </p>
                <p>
                  To operate here with confidence, you need people who have spent years in these markets — not working from remote desks, but operating on the ground, understanding the cultural context, the regulatory environment, the business norms, and the human dynamics that shape every outcome.
                </p>
                <p className="text-white/90 font-medium">
                  That's what we bring. Years of presence. Lived understanding. Tested methodologies refined across 450+ engagements.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/15">
                {[
                  { num: '450+', label: 'Engagements' },
                  { num: '40+', label: 'Countries' },
                  { num: '100+', label: 'Years Combined' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-heading font-black text-[2.5rem] text-accent leading-none">{s.num}</div>
                    <div className="font-body text-[12px] text-white/45 uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Geographic Footprint ── */}
      <section id="geographical-footprint" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Our Reach</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
              <GradientText hoverOnly animationSpeed={2}>40+ Countries. 2 Offices. 4 Partner Hubs.</GradientText>
            </h2>
            <p className="font-body text-text-muted max-w-xl mx-auto">
              Operating across the complexity of MEA — with partner offices and collaborators enabling regional depth with local execution.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimatedSection>
              <div className="bg-gradient-hero rounded-2xl p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 800 400" className="w-full h-full" fill="none">
                    {[...Array(50)].map((_, i) => (
                      <circle key={i} cx={50 + (i % 10) * 70} cy={50 + Math.floor(i / 10) * 70} r="3" fill="white" opacity="0.6" />
                    ))}
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { num: '40+', label: 'Countries' },
                      { num: '2', label: 'Offices' },
                      { num: '4', label: 'Partner Hubs' },
                      { num: '11', label: 'Sectors' },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="font-heading font-black text-3xl text-accent">{item.num}</div>
                        <div className="font-body text-xs text-gray-300 mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-3">
                {regions.map((r) => (
                  <div key={r.region} className="flex gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-36 flex-shrink-0">
                      <span className="font-heading font-semibold text-[13px] text-primary">{r.region}</span>
                    </div>
                    <p className="font-body text-[13px] text-text-muted">{r.countries}</p>
                  </div>
                ))}
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/30">
                  <p className="font-heading font-semibold text-[13px] text-accent">Partner Offices</p>
                  <p className="font-body text-[13px] text-text-muted mt-1">India · Saudi Arabia · India · United Kingdom</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section id="our-team" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-4">
            <span className="section-tag">The Team</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
              <GradientText hoverOnly animationSpeed={2}>100+ Years of Combined Research Expertise.</GradientText>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="text-center mb-12">
            <p className="font-body text-[16px] text-text-muted max-w-3xl mx-auto leading-relaxed">
              Our team brings over <strong className="text-text">100 years of combined research and consulting experience</strong> across the Middle East, Africa, Asia, and Europe. Every engagement is led by a research director — so you always work with the person who truly understands your challenge.
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

      {/* ── How We Work ── */}
      <section id="how-we-work" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
              <GradientText hoverOnly animationSpeed={2}>A discipline forged over a decade of MEA research.</GradientText>
            </h2>
            <p className="font-body text-text-muted max-w-xl mx-auto">
              Every engagement follows the same rigorous approach — regardless of sector, scale, or geography.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {howWeWork.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <div className={`${s.bg} border ${s.border} rounded-2xl p-6 h-full`}>
                  <span className={`font-heading font-black text-[64px] leading-none ${s.numColor} block mb-3`}>{s.num}</span>
                  <h3 className={`font-heading font-bold text-[17px] ${s.color} mb-2`}>{s.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50 pointer-events-none" />
        <div className="container-content relative z-10 text-center">
          <AnimatedSection>
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Get in Touch</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready To Work With A Team Built For This Region?
            </h2>
            <p className="font-body text-white/60 text-[16px] max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you're entering a new market, evaluating a strategic opportunity, or seeking to understand the competitive dynamics shaping your category — we're ready to help you move forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <OpenContactButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-dark font-body font-semibold text-[15px] rounded-full px-7 py-3.5 hover:brightness-110 transition-all">
                Start a Conversation <ArrowRight size={16} />
              </OpenContactButton>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/18 transition-all"
              >
                Explore Our Case Studies <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
