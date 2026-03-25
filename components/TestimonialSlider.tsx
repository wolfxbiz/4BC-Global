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
    <div className="relative max-w-4xl mx-auto py-8 min-h-[220px]">
      {/* Decorative quote mark */}
      <div className="flex justify-center mb-4 pointer-events-none select-none">
        <span className="font-heading text-6xl text-accent/30 leading-none">&ldquo;</span>
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

      {/* Quote content — fixed height, no layout shift */}
      <div className="relative h-[140px] flex items-center justify-center px-14 md:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-14 md:px-20"
          >
            <p className="font-heading text-xl md:text-2xl lg:text-[26px] text-text leading-relaxed mb-6 text-center">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <p className="font-body text-sm text-center">
              <span className="font-medium text-text">{testimonials[current].author}</span>
              <span className="text-text-muted"> | {testimonials[current].company}</span>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
