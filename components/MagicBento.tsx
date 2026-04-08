'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ArrowRight, Plus } from 'lucide-react'
import { sectors } from '@/lib/sectors-data'
import './MagicBento.css'

interface MagicBentoProps {
  enableSpotlight?: boolean
  enableBorderGlow?: boolean
  clickEffect?: boolean
  spotlightRadius?: number
  glowColor?: string // RGB string e.g. "132, 0, 255"
  disableAnimations?: boolean
}

const MOBILE_BREAKPOINT = 768

// ── Spotlight that follows the mouse across the whole grid ──────────────────
function GlobalSpotlight({
  gridRef,
  enabled,
  spotlightRadius,
  glowColor,
  disableAnimations,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>
  enabled: boolean
  spotlightRadius: number
  glowColor: string
  disableAnimations: boolean
}) {
  useEffect(() => {
    if (disableAnimations || !enabled || !gridRef.current) return

    const spotlightSize = spotlightRadius * 2.5
    const spotlight = document.createElement('div')
    spotlight.className = 'bento-spotlight'
    spotlight.style.cssText = `
      width: ${spotlightSize}px;
      height: ${spotlightSize}px;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.12) 0%,
        rgba(${glowColor}, 0.06) 20%,
        rgba(${glowColor}, 0.02) 45%,
        transparent 70%
      );
      opacity: 0;
    `
    document.body.appendChild(spotlight)

    const proximity = spotlightRadius * 0.5
    const fadeDistance = spotlightRadius * 0.85

    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return
      const section = gridRef.current.closest('.bento-section-wrapper')
      const rect = section?.getBoundingClientRect()
      const inside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

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

        let intensity = 0
        if (dist <= proximity) intensity = 1
        else if (dist <= fadeDistance) intensity = (fadeDistance - dist) / (fadeDistance - proximity)

        const rx = ((e.clientX - cr.left) / cr.width) * 100
        const ry = ((e.clientY - cr.top) / cr.height) * 100
        card.style.setProperty('--glow-x', `${rx}%`)
        card.style.setProperty('--glow-y', `${ry}%`)
        card.style.setProperty('--glow-intensity', intensity.toString())
        card.style.setProperty('--glow-radius', `${spotlightRadius}px`)
        card.style.setProperty('--glow-color-rgb', glowColor)
      })

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1 })

      const targetOpacity =
        minDist <= proximity
          ? 0.9
          : minDist <= fadeDistance
          ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.9
          : 0

      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.15 : 0.4 })
    }

    const onLeave = () => {
      gsap.to(spotlight, { opacity: 0, duration: 0.3 })
      gridRef.current?.querySelectorAll<HTMLElement>('.bento-card').forEach(c =>
        c.style.setProperty('--glow-intensity', '0')
      )
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotlight.parentNode?.removeChild(spotlight)
    }
  }, [gridRef, enabled, spotlightRadius, glowColor, disableAnimations])

  return null
}

// ── Main component ───────────────────────────────────────────────────────────
export default function MagicBento({
  enableSpotlight = true,
  enableBorderGlow = true,
  clickEffect = true,
  spotlightRadius = 600,
  glowColor = '132, 0, 255',
  disableAnimations = false,
}: MagicBentoProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const shouldDisable = disableAnimations || isMobile

  // ── Click ripple ────────────────────────────────────────────────────────
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!clickEffect || shouldDisable) return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const maxDist = Math.max(
      Math.hypot(x, y),
      Math.hypot(x - rect.width, y),
      Math.hypot(x, y - rect.height),
      Math.hypot(x - rect.width, y - rect.height)
    )
    const ripple = document.createElement('div')
    ripple.style.cssText = `
      position: absolute;
      width: ${maxDist * 2}px;
      height: ${maxDist * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(${glowColor}, 0.35) 0%, rgba(${glowColor}, 0.15) 35%, transparent 70%);
      left: ${x - maxDist}px;
      top: ${y - maxDist}px;
      pointer-events: none;
      z-index: 50;
    `
    el.appendChild(ripple)
    gsap.fromTo(ripple, { scale: 0, opacity: 1 }, {
      scale: 1, opacity: 0, duration: 0.75, ease: 'power2.out',
      onComplete: () => ripple.remove(),
    })
  }

  return (
    <div className="bento-section-wrapper">
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
          disableAnimations={shouldDisable}
        />
      )}

      <div className="bento-grid" ref={gridRef}>
        {sectors.map((sector, i) => {
          const Icon = sector.icon
          const isWide = i < 2

          return (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className={`bento-card${enableBorderGlow ? ' bento-card--glow' : ''}`}
              onClick={handleClick}
            >
              {/* Gradient reveal */}
              <div
                className="bento-card__gradient"
                style={{ background: sector.gradient }}
              />

              {/* Ghost icon */}
              <div className="bento-card__icon">
                <Icon size={isWide ? 90 : 65} strokeWidth={1} />
              </div>

              {/* Top row — arrow button */}
              <div className="bento-card__top">
                <div className="bento-card__btn">
                  <Plus size={isWide ? 14 : 11} className="text-text-muted group-hover:hidden" strokeWidth={2.5} style={{ color: '#6b7280' }} />
                </div>
              </div>

              {/* Bottom — name + tagline */}
              <div className="bento-card__bottom">
                <span className="bento-card__name">{sector.name}</span>
                {sector.tagline && (
                  <span className="bento-card__tagline">{sector.tagline}</span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
