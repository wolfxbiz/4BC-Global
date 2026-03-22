'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      {/* Large decorative quote */}
      <div className="text-accent text-[120px] font-heading leading-none opacity-30 absolute -top-8 left-0 select-none">"</div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 text-center px-8 md:px-16"
        >
          <p className="font-heading text-xl md:text-2xl text-white leading-relaxed italic mb-6">
            "{testimonials[current].quote}"
          </p>
          <p className="font-body text-accent font-medium">
            — {testimonials[current].author}, <span className="text-gray-400">{testimonials[current].company}</span>
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === current ? 'bg-accent w-6' : 'bg-gray-600'
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
