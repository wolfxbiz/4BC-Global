'use client'
import { useEffect, useRef } from 'react'

const clients = [
  'VISA', 'ENOC', 'Unilever', 'Nestlé', 'Toyota', 'Shell', 'Aramco',
  'DP World', 'DMCC', 'Emaar', 'Samsung', 'Ford', 'Mercedes',
  'HSBC', 'ADCB', 'Bridgestone', 'Savola', 'LG', 'Vodafone',
  'Castrol', 'Emarat', 'ThyssenKrupp', 'Epson', 'Jotun',
]

export default function LogoStrip() {
  const stripRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const speed = 0.7

    const animate = () => {
      if (!pausedRef.current && strip) {
        posRef.current -= speed
        const totalWidth = strip.scrollWidth / 2
        if (Math.abs(posRef.current) >= totalWidth) {
          posRef.current = 0
        }
        strip.style.transform = `translateX(${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const allClients = [...clients, ...clients]

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={stripRef} className="flex items-center gap-16 whitespace-nowrap will-change-transform py-2">
        {allClients.map((client, i) => (
          <span
            key={i}
            className="flex-shrink-0 font-heading font-bold text-2xl tracking-tight text-text-muted/40 hover:text-text-muted/70 transition-colors duration-300 select-none"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  )
}
