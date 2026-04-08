'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

interface PillButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  bgColor?: string       // pill resting bg
  textColor?: string     // resting text
  fillColor?: string     // circle fill on hover
  hoverTextColor?: string
  className?: string
  ease?: string
}

export default function PillButton({
  href,
  onClick,
  children,
  bgColor = '#E8A020',
  textColor = '#1A1A2E',
  fillColor = '#1A2E5C',
  hoverTextColor = '#ffffff',
  className = '',
  ease = 'expo.out',
}: PillButtonProps) {
  const pillRef = useRef<HTMLElement>(null)
  const circleRef = useRef<HTMLSpanElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const labelHoverRef = useRef<HTMLSpanElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const layout = () => {
      const pill = pillRef.current
      const circle = circleRef.current
      const label = labelRef.current
      const hover = labelHoverRef.current
      if (!pill || !circle) return

      const rect = pill.getBoundingClientRect()
      const { width: w, height: h } = rect
      const R = ((w * w) / 4 + h * h) / (2 * h)
      const D = Math.ceil(2 * R) + 2
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
      const originY = D - delta

      circle.style.width = `${D}px`
      circle.style.height = `${D}px`
      circle.style.bottom = `-${delta}px`

      gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` })
      if (label) gsap.set(label, { y: 0 })
      if (hover) gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 })

      tlRef.current?.kill()
      const tl = gsap.timeline({ paused: true })
      tl.to(circle, { scale: 2.2, xPercent: -50, duration: 0.55, ease, overwrite: 'auto' }, 0)
      if (label) tl.to(label, { y: -(h + 8), duration: 0.55, ease, overwrite: 'auto' }, 0)
      if (hover) tl.to(hover, { y: 0, opacity: 1, duration: 0.55, ease, overwrite: 'auto' }, 0)
      tlRef.current = tl
    }

    layout()
    window.addEventListener('resize', layout)
    document.fonts?.ready?.then(layout).catch(() => {})
    return () => window.removeEventListener('resize', layout)
  }, [ease])

  const handleEnter = () => {
    const tl = tlRef.current
    if (!tl) return
    tweenRef.current?.kill()
    tweenRef.current = tl.tweenTo(tl.duration(), { duration: 0.55, ease, overwrite: 'auto' }) as gsap.core.Tween
  }

  const handleLeave = () => {
    const tl = tlRef.current
    if (!tl) return
    tweenRef.current?.kill()
    tweenRef.current = tl.tweenTo(0, { duration: 0.35, ease, overwrite: 'auto' }) as gsap.core.Tween
  }

  const style = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: '8px',
    background: bgColor,
    color: textColor,
    borderRadius: '9999px',
    cursor: 'pointer',
    userSelect: 'none' as const,
    textDecoration: 'none',
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
    WebkitTapHighlightColor: 'transparent',
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)',
  }

  const circleStyle = {
    position: 'absolute' as const,
    left: '50%',
    borderRadius: '50%',
    background: fillColor,
    zIndex: 1,
    display: 'block',
    pointerEvents: 'none' as const,
  }

  const labelStackStyle = {
    position: 'relative' as const,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: 1,
    zIndex: 2,
  }

  const labelStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    willChange: 'transform',
  }

  const hoverLabelStyle = {
    position: 'absolute' as const,
    left: 0,
    top: 0,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: hoverTextColor,
    zIndex: 3,
    willChange: 'transform, opacity',
    whiteSpace: 'nowrap' as const,
  }

  const inner = (
    <>
      <span ref={circleRef} style={circleStyle} aria-hidden="true" />
      <span style={labelStackStyle}>
        <span ref={labelRef} style={labelStyle}>{children}</span>
        <span ref={labelHoverRef} style={hoverLabelStyle} aria-hidden="true">{children}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        ref={pillRef as React.Ref<HTMLAnchorElement>}
        style={style}
        className={className}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {inner}
      </Link>
    )
  }

  return (
    <button
      ref={pillRef as React.Ref<HTMLButtonElement>}
      style={style}
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {inner}
    </button>
  )
}
