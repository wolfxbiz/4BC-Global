'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
      className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left — Quote */}
      <div className="relative">
        {/* Decorative giant quote mark */}
        <span
          aria-hidden
          className="absolute -top-6 -left-2 text-[100px] leading-none font-serif text-white/8 select-none pointer-events-none"
        >
          &ldquo;
        </span>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative font-heading font-semibold text-[22px] md:text-[28px] lg:text-[32px] text-white leading-snug tracking-[-0.02em]"
          >
            &ldquo;{t.quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>

        {/* Dots — desktop below quote */}
        <div className="hidden lg:flex items-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-accent'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right — Author card + navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          {/* Logo card */}
          {t.logo ? (
            <div className="bg-white rounded-2xl p-5 h-20 w-44 flex items-center justify-center shadow-lg">
              <Image
                src={t.logo}
                alt={t.company}
                width={140}
                height={60}
                className="object-contain w-full h-full"
              />
            </div>
          ) : (
            <div className="bg-white/10 border border-white/15 rounded-2xl px-5 py-3 inline-flex w-fit">
              <span className="font-heading font-bold text-white text-sm tracking-tight">{t.company}</span>
            </div>
          )}

          {/* Author info */}
          <div className="border-l-2 border-accent pl-4">
            <p className="font-heading font-semibold text-white text-[15px]">{t.author}</p>
            <p className="font-body text-white/50 text-[13px] mt-0.5">{t.company}</p>
            <span className="mt-2 inline-block bg-accent/15 text-accent text-[11px] font-body font-medium px-3 py-1 rounded-full tracking-wide">
              {t.sector}
            </span>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={17} />
            </button>

            {/* Dots — mobile */}
            <div className="flex lg:hidden items-center gap-1.5 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-5 h-1.5 bg-accent'
                      : 'w-1.5 h-1.5 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
