'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import { CaseStudyModal } from '@/components/CaseStudyModal'
import { caseStudies, CaseStudy } from '@/lib/case-studies-data'

const get = (id: string) => caseStudies.find((cs) => cs.id === id)!

const slides = [
  { featured: get('cs-02'), side: [get('cs-01'), get('cs-07')] },
  { featured: get('cs-24'), side: [get('cs-14'), get('cs-29')] },
  { featured: get('cs-08'), side: [get('cs-03'), get('cs-27')] },
  { featured: get('cs-06'), side: [get('cs-25'), get('cs-31')] },
]

const INTERVAL = 5000

export default function HomeCaseStudies() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)
  const [slide, setSlide] = useState(0)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        setSlide((s) => (s + 1) % slides.length)
        setFading(false)
      }, 300)
    }, INTERVAL)
    return () => clearTimeout(t)
  }, [paused, slide])

  const goTo = (i: number) => {
    if (i === slide) return
    setFading(true)
    setTimeout(() => {
      setSlide(i)
      setFading(false)
    }, 300)
    setPaused(true)
  }

  const { featured, side } = slides[slide]

  return (
    <>
      <AnimatePresence mode="wait">
        {activeStudy && (
          <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </AnimatePresence>

      <section
        className="bg-bg-soft section-padding"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="container-content">

          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <AnimatedSection>
              <span className="section-tag">Featured Case Studies</span>
              <h2 className="font-heading text-h2 text-text max-w-[400px]">
                <GradientText hoverOnly animationSpeed={2}>Our MEA market intelligence experience</GradientText>
              </h2>
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

          {/* Bento grid */}
          <AnimatedSection delay={0.1}>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {/* Featured — 2 cols × 2 rows */}
              <button
                onClick={() => setActiveStudy(featured)}
                className="group md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden text-left w-full h-full"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                {/* Top badges */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="font-body text-[10px] font-semibold text-white bg-accent/90 rounded-full px-3 py-1 uppercase tracking-widest">
                    Featured
                  </span>
                  <span className="font-body text-[10px] font-medium text-white bg-black/35 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 uppercase tracking-wider">
                    {featured.sector}
                  </span>
                </div>

                {/* Stat bubble */}
                <div className="absolute top-5 right-5 bg-white rounded-xl px-3 py-2 shadow-lg text-right">
                  <div className="font-heading font-bold text-[20px] text-primary leading-none">{featured.stats[0].value}</div>
                  <div className="font-body text-[10px] text-text-muted mt-0.5">{featured.stats[0].label}</div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-heading font-bold text-[20px] md:text-[24px] text-white leading-snug tracking-[-0.02em] mb-3 max-w-[480px]">
                    {featured.title}
                  </h3>
                  <p className="font-body text-[13px] text-white/65 leading-relaxed mb-5 max-w-[44ch] hidden md:block line-clamp-2">
                    {featured.challenge}
                  </p>
                  <span className="inline-flex items-center gap-2 bg-accent text-dark font-body font-semibold text-[13px] rounded-full px-5 py-2.5 group-hover:brightness-110 transition-all shadow-md">
                    Read Case Study <ArrowRight size={13} />
                  </span>
                </div>
              </button>

              {/* Side cards */}
              {side.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => setActiveStudy(cs)}
                  className="group relative rounded-2xl overflow-hidden text-left w-full h-full"
                >
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />

                  <span className="absolute top-4 left-4 font-body text-[10px] font-medium text-white bg-black/35 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 uppercase tracking-wider">
                    {cs.sector}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading font-bold text-[14px] text-white leading-snug mb-2 tracking-[-0.01em]">
                      {cs.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 font-body text-[12px] font-medium text-white/60 group-hover:text-white group-hover:gap-2.5 transition-all duration-200">
                      Read Case Study <ArrowRight size={11} />
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Dot indicators + progress */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: i === slide ? 32 : 8, backgroundColor: i === slide ? '#2B4A8C' : '#CBD5E1' }}
                >
                  {i === slide && !paused && (
                    <span
                      key={`dot-${slide}`}
                      className="absolute inset-y-0 left-0 rounded-full bg-accent"
                      style={{ animation: `tabProgress ${INTERVAL}ms linear forwards` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Mobile view all */}
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
