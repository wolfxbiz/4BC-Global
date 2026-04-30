'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import { CaseStudyModal } from '@/components/CaseStudyModal'
import { caseStudies, CaseStudy } from '@/lib/case-studies-data'

// The 3 case studies shown on the home page grid
const homeCaseStudies = [
  caseStudies.find((cs) => cs.id === 'cs-01')!,
  caseStudies.find((cs) => cs.id === 'cs-02')!,
  caseStudies.find((cs) => cs.id === 'cs-07')!,
]

// Featured case study (section 8)
const featuredStudy = caseStudies.find((cs) => cs.id === 'cs-02')!

export default function HomeCaseStudies() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)

  return (
    <>
      {/* ── Modal ── */}
      <AnimatePresence mode="wait">
        {activeStudy && (
          <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </AnimatePresence>

      {/* ─── FEATURED CASE STUDY ─── */}
      <section className="bg-bg-soft border-t border-border py-20 px-4">
        <div className="container-content">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-14 items-center">
              {/* Left — image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/15 scale-110" />
                  <div className="absolute inset-0 rounded-full border border-primary/8 scale-125" />
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
                    <Image
                      src="/images/case-minibus.jpg"
                      alt="Minibus taxi digitalization research, South Africa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-6 -right-2 bg-primary text-white rounded-2xl px-4 py-3 shadow-xl">
                    <div className="font-heading font-medium text-[13px]">Transport</div>
                    <div className="font-body text-[11px] text-white/60">+ Fintech</div>
                  </div>
                  <div className="absolute top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-border">
                    <div className="font-heading font-medium text-[22px] text-primary">500+</div>
                    <div className="font-body text-[11px] text-text-muted">Interviews conducted</div>
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div>
                <span className="section-tag">Featured Case Study</span>
                <h2 className="font-heading text-h2 md:text-h2-lg text-text mb-6 max-w-[440px]">
                  <GradientText hoverOnly animationSpeed={2}>Why the Best Decisions Come from In-Market Data</GradientText>
                </h2>
                <p className="font-body text-body-sm text-text-muted mb-4 max-w-[48ch]">
                  For a leading card payment company, 4BC Global conducted 500+ in-market interviews across commuters, taxi owners, and associations in South Africa.
                </p>
                <p className="font-body text-body-sm text-text-muted mb-10 max-w-[48ch]">
                  The result: a clear go-to-market strategy for payment digitalization in the informal transport sector — a market most firms had written off.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveStudy(featuredStudy)}
                    className="inline-flex items-center gap-2 bg-accent text-dark font-body font-semibold text-[15px] rounded-full px-7 py-3.5 hover:bg-accent-warm hover:shadow-lg shadow-md hover:scale-[1.02] transition-all duration-200"
                  >
                    Read Case Study <ArrowRight size={15} />
                  </button>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-text-muted hover:text-primary transition-colors"
                  >
                    View All <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDIES GRID ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="flex items-end justify-between mb-8">
            <AnimatedSection>
              <span className="section-tag">Featured Case Studies</span>
              <h2 className="font-heading text-h2 text-text max-w-[380px]"><GradientText hoverOnly animationSpeed={2}>Our MEA market intelligence experience</GradientText></h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Link
                href="/case-studies"
                className="hidden sm:inline-flex items-center gap-2 border border-dark text-dark font-body text-[15px] font-medium rounded-full px-6 py-3 hover:bg-dark hover:text-white transition-all"
              >
                View All Case Studies <ArrowRight size={13} />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {homeCaseStudies.map((cs, i) => (
              <AnimatedSection key={cs.id} delay={i * 0.1} className="h-full">
                <button
                  onClick={() => setActiveStudy(cs)}
                  className="group flex flex-col h-full w-full text-left border border-border rounded-2xl overflow-hidden hover:border-primary/25 hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="h-52 relative overflow-hidden flex-shrink-0">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                    <span className="absolute top-4 left-4 font-body text-[11px] font-medium text-white bg-black/35 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 uppercase tracking-wider">
                      {cs.sector}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-[17px] text-text leading-snug group-hover:text-primary transition-colors mb-3 tracking-[-0.015em]">{cs.title}</h3>
                    <p className="font-body text-body-md text-text-muted flex-1">{cs.challenge}</p>
                    <div className="mt-5 pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-primary group-hover:gap-3 transition-all duration-200">
                        Read Case Study <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 border border-dark text-dark font-body text-[15px] font-medium rounded-full px-6 py-3 hover:bg-dark hover:text-white transition-all">
              View All Case Studies <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
