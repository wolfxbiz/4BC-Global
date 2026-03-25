'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  target: number
  suffix?: string
  duration?: number
}

export default function StatCounter({ target, suffix = '', duration = 2000 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="font-heading font-medium text-stat text-accent">
      {count}{suffix}
    </span>
  )
}
