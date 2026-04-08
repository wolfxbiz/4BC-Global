'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { BarChart2, Users, Zap, MapPin } from 'lucide-react'
import './MagicBento.css'

const DEFAULT_GLOW_COLOR = '132, 0, 255'
const DEFAULT_SPOTLIGHT_RADIUS = 600

const capabilities = [
  {
    label: '01 / 04',
    title: 'Business Research',
    description: 'Marketing strategy, segmentation, market entry, competition mapping, and regulatory evaluation — backed by primary and secondary research across MEA.',
    icon: BarChart2,
    href: '/services#business-research',
    image: '/capabilities/business-research.jpg',
  },
  {
    label: '02 / 04',
    title: 'Customer Experience',
    description: 'Customer journey mapping, NPS, mystery shopping, loyalty programs, and CX measure and management — designed to surface what your customers truly think.',
    icon: Users,
    href: '/services#customer-experience',
    image: '/capabilities/customer-satisfaction.png',
  },
  {
    label: '03 / 04',
    title: 'Impact Assessment',
    description: 'Corporate reputation, economic and social impact measurement — giving governments and corporates the evidence they need to act.',
    icon: Zap,
    href: '/services#impact-assessment',
    image: '/capabilities/impact-assessment.png',
  },
  {
    label: '04 / 04',
    title: 'Geolocation Services',
    description: 'Catchment area assessment, network planning, branch optimisation, and promotion/event performance measurement powered by our geo-analytics platform.',
    icon: MapPin,
    href: '/services#geolocation-services',
    image: '/capabilities/geolocation.png',
  },
]

function GlobalSpotlight({
  gridRef,
  spotlightRadius,
  glowColor,
  disabled,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>
  spotlightRadius: number
  glowColor: string
  disabled: boolean
}) {
  useEffect(() => {
    if (disabled || !gridRef.current) return

    const size = spotlightRadius * 2.5
    const spotlight = document.createElement('div')
    spotlight.className = 'bento-spotlight'
    spotlight.style.cssText = `
      width: ${size}px; height: ${size}px; opacity: 0;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.12) 0%, rgba(${glowColor}, 0.06) 20%,
        rgba(${glowColor}, 0.02) 45%, transparent 70%);
    `
    document.body.appendChild(spotlight)

    const proximity = spotlightRadius * 0.5
    const fadeDistance = spotlightRadius * 0.85

    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return
      const wrapper = gridRef.current.closest('.bento-section-wrapper')
      const rect = wrapper?.getBoundingClientRect()
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

      const cards = gridRef.current.querySelectorAll<HTMLElement>('.bento-card')
      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 })
        cards.forEach(c => c.style.setProperty('--glow-intensity', '0'))
        return
      }

      let minDist = Infinity
      cards.forEach(card => {
        const cr = card.getBoundingClientRect()
        const cx = cr.left + cr.width / 2
        const cy = cr.top + cr.height / 2
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2)
        minDist = Math.min(minDist, dist)
        const intensity = dist <= proximity ? 1 : dist <= fadeDistance ? (fadeDistance - dist) / (fadeDistance - proximity) : 0
        const rx = ((e.clientX - cr.left) / cr.width) * 100
        const ry = ((e.clientY - cr.top) / cr.height) * 100
        card.style.setProperty('--glow-x', `${rx}%`)
        card.style.setProperty('--glow-y', `${ry}%`)
        card.style.setProperty('--glow-intensity', intensity.toString())
        card.style.setProperty('--glow-radius', `${spotlightRadius}px`)
        card.style.setProperty('--glow-color-rgb', glowColor)
      })

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1 })
      const targetOpacity = minDist <= proximity ? 0.9 : minDist <= fadeDistance ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.9 : 0
      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.15 : 0.4 })
    }

    const onLeave = () => {
      gsap.to(spotlight, { opacity: 0, duration: 0.3 })
      gridRef.current?.querySelectorAll<HTMLElement>('.bento-card').forEach(c => c.style.setProperty('--glow-intensity', '0'))
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotlight.parentNode?.removeChild(spotlight)
    }
  }, [gridRef, spotlightRadius, glowColor, disabled])

  return null
}

export default function CapabilitiesBento({
  glowColor = DEFAULT_GLOW_COLOR,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
}: {
  glowColor?: string
  spotlightRadius?: number
}) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const maxDist = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height))
    const ripple = document.createElement('div')
    ripple.style.cssText = `
      position:absolute; border-radius:50%; pointer-events:none; z-index:50;
      width:${maxDist * 2}px; height:${maxDist * 2}px;
      left:${x - maxDist}px; top:${y - maxDist}px;
      background: radial-gradient(circle, rgba(${glowColor},0.35) 0%, rgba(${glowColor},0.15) 35%, transparent 70%);
    `
    el.appendChild(ripple)
    gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.75, ease: 'power2.out', onComplete: () => ripple.remove() })
  }

  return (
    <div className="bento-section-wrapper">
      <GlobalSpotlight gridRef={gridRef} spotlightRadius={spotlightRadius} glowColor={glowColor} disabled={isMobile} />

      <div className="capabilities-grid" ref={gridRef}>
        {capabilities.map((cap, i) => {
          const Icon = cap.icon
          return (
            <a
              key={cap.title}
              href={cap.href}
              className="bento-card bento-card--glow"
              style={{ '--glow-color-rgb': glowColor } as React.CSSProperties}
              onClick={handleClick}
              onMouseMove={e => {
                if (isMobile) return
                const el = e.currentTarget
                const rect = el.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const rotateX = ((y - rect.height / 2) / rect.height) * -12
                const rotateY = ((x - rect.width / 2) / rect.width) * 12
                gsap.to(el, { rotateX, rotateY, duration: 0.15, ease: 'power2.out', transformPerspective: 800 })
              }}
              onMouseLeave={e => {
                if (isMobile) return
                gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.4, ease: 'power3.out' })
              }}
            >
              {/* Photo background */}
              {cap.image && (
                <>
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `url(${cap.image})`,
                      backgroundSize: 'cover', backgroundPosition: 'center',
                      opacity: 0.22,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22,29,48,0.95) 40%, rgba(22,29,48,0.6) 100%)', pointerEvents: 'none' }} />
                </>
              )}

              {/* Header */}
              <div className="magic-bento-card__header" style={{ justifyContent: 'space-between', display: 'flex', position: 'relative', zIndex: 2 }}>
                <div className="magic-bento-card__label" style={{ fontSize: 12, opacity: 0.45, color: 'white' }}>{cap.label}</div>
                <Icon size={18} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
              </div>

              {/* Content */}
              <div className="magic-bento-card__content" style={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', zIndex: 2 }}>
                <h3 className="magic-bento-card__title" style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 500, color: 'white', margin: 0 }}>
                  {cap.title}
                </h3>
                <p className="magic-bento-card__description" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  {cap.description}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
