'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Team, this is good work and really helps get a granular understanding of the flow of cargo and each product in the market.",
    author: "VP Growth",
    company: "DP World",
    sector: "Real Estate & Logistics",
    logo: '/logos/03_Real_Estate_and_Construction/dp-world.jpeg',
  },
  {
    quote: "The report looks very good. Sharp and concise analysis.",
    author: "Market Research Manager",
    company: "ENOC",
    sector: "Energy & Fuels",
    logo: '/logos/05_Oil_and_Gas/enoc.png',
  },
  {
    quote: "This is a wonderful piece of work, a giant leap forward for the organization.",
    author: "Senior Manager",
    company: "Al-Futtaim Group",
    sector: "Regional Conglomerates",
    logo: null,
  },
  {
    quote: "The insights and the market strategy is very useful for our roll out. The insights have greater details for developing our strategy.",
    author: "Product Manager",
    company: "Visa",
    sector: "Banking & Finance",
    logo: '/logos/02_Banking_and_Finance/visa.png',
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, paused])

  const t = testimonials[current]

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          {/* Big quote icon */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Quote size={26} className="text-primary" strokeWidth={1.5} />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="font-heading font-semibold text-2xl md:text-[28px] lg:text-[32px] text-text leading-tight mb-10 tracking-[-0.02em] text-wrap-balance">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author + logo */}
          <div className="flex flex-col items-center gap-4">
            {/* Company logo or name badge */}
            {t.logo ? (
              <div className="h-12 w-32 flex items-center justify-center">
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={128}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
            ) : (
              <div className="h-10 px-5 bg-primary/8 border border-primary/15 rounded-xl flex items-center">
                <span className="font-heading font-bold text-primary text-sm tracking-tight">{t.company}</span>
              </div>
            )}

            {/* Divider */}
            <div className="w-8 h-px bg-border" />

            {/* Author */}
            <div>
              <p className="font-heading font-semibold text-[15px] text-text">{t.author}</p>
              <p className="font-body text-[13px] text-text-muted mt-0.5">{t.company} · {t.sector}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-all duration-200 shadow-sm"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-border hover:bg-primary/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-all duration-200 shadow-sm"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
