'use client'
import { useEffect, useRef } from 'react'

const clients = [
  'VISA', 'ENOC', 'Unilever', 'Nestlé', 'Toyota', 'Shell', 'Aramco',
  'DP World', 'DMCC', 'Emaar', 'du', 'Samsung', 'Ford', 'Mercedes',
  'HSBC', 'ADCB', 'Bridgestone', 'Savola', 'LG', 'Vodafone',
  'e& (Etisalat)', 'Castrol', 'Emarat', 'BARCO', 'Epson',
]

export default function LogoStrip() {
  const stripRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const speed = 0.5

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
      <div ref={stripRef} className="flex gap-12 whitespace-nowrap will-change-transform">
        {allClients.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 font-heading font-semibold text-sm text-text-muted hover:text-primary transition-colors duration-200 px-4 py-2 border border-border rounded-lg bg-white"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  )
}
