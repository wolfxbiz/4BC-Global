'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Decorative curly quotes */}
      <div className="absolute -top-2 left-8 md:left-16 pointer-events-none select-none">
        <svg width="48" height="40" viewBox="0 0 48 40" className="text-accent/30">
          <path d="M0 28.8C0 20.267 2.4 13.6 7.2 8.8 12 4 18.133 1.067 25.6 0l2.4 6.4C22.133 8.533 18.4 11.733 16.8 16c-1.067 2.667-.933 4.533.4 5.6 2.133-.533 4-.8 5.6-.8 3.2 0 5.8 1.067 7.8 3.2 2 2.133 3 4.8 3 8 0 3.2-1.067 5.8-3.2 7.8-2.133 2-4.8 3-8 3-3.733 0-6.733-1.4-9-4.2C11.133 35.8 10 32.533 10 28.8H0zm24 0C24 20.267 26.4 13.6 31.2 8.8 36 4 42.133 1.067 49.6 0L52 6.4C46.133 8.533 42.4 11.733 40.8 16c-1.067 2.667-.933 4.533.4 5.6 2.133-.533 4-.8 5.6-.8 3.2 0 5.8 1.067 7.8 3.2 2 2.133 3 4.8 3 8 0 3.2-1.067 5.8-3.2 7.8-2.133 2-4.8 3-8 3-3.733 0-6.733-1.4-9-4.2-2.267-2.8-3.4-6.067-3.4-9.8H24z" fill="currentColor" />
        </svg>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-colors z-20"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-colors z-20"
        aria-label="Next testimonial"
      >
        <ChevronRight size={18} />
      </button>

      {/* Quote content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="text-center px-14 md:px-20"
        >
          <p className="font-heading text-xl md:text-2xl lg:text-[26px] text-text leading-relaxed mb-6">
            &ldquo;{testimonials[current].quote}&rdquo;
          </p>
          <p className="font-body text-sm">
            <span className="font-semibold text-text">{testimonials[current].author}</span>
            <span className="text-text-muted"> | {testimonials[current].company}</span>
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
