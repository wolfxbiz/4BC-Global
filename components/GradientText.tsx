'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion'
import './GradientText.css'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  showBorder?: boolean
  direction?: 'horizontal' | 'vertical' | 'diagonal'
  pauseOnHover?: boolean
  yoyo?: boolean
  /** When true, text is black by default and gradient only appears on hover */
  hoverOnly?: boolean
}

export default function GradientText({
  children,
  className = '',
  colors = ['#4A72C4', '#8B4FA0', '#F5A31A', '#4A72C4'],
  animationSpeed = 3,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true,
  hoverOnly = false,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const progress = useMotionValue(0)
  const elapsedRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)

  const animationDuration = animationSpeed * 1000

  // When hoverOnly, only run animation while hovered
  const shouldAnimate = hoverOnly ? isHovered : !isPaused

  useAnimationFrame((time) => {
    if (!shouldAnimate) {
      lastTimeRef.current = null
      return
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time
      return
    }

    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time
    elapsedRef.current += deltaTime

    if (yoyo) {
      const fullCycle = animationDuration * 2
      const cycleTime = elapsedRef.current % fullCycle
      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100)
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100)
      }
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100)
    }
  })

  useEffect(() => {
    elapsedRef.current = 0
    progress.set(0)
  }, [animationSpeed, progress, yoyo])

  // Reset progress when hover ends (hoverOnly mode)
  useEffect(() => {
    if (hoverOnly && !isHovered) {
      elapsedRef.current = 0
      progress.set(0)
    }
  }, [hoverOnly, isHovered, progress])

  const backgroundPosition = useTransform(progress, (p) => {
    if (direction === 'vertical') return `50% ${p}%`
    return `${p}% 50%`
  })

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    if (pauseOnHover) setIsPaused(true)
  }, [pauseOnHover])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    if (pauseOnHover) setIsPaused(false)
  }, [pauseOnHover])

  const gradientAngle =
    direction === 'vertical' ? 'to bottom' : direction === 'diagonal' ? 'to bottom right' : 'to right'
  const gradientColors = [...colors, colors[0]].join(', ')

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === 'vertical' ? '100% 300%' : '300% 100%',
    backgroundRepeat: 'repeat' as const,
  }

  // When hoverOnly and not hovered: keep text color inherited (black)
  const showGradient = !hoverOnly || isHovered
  const textStyle = showGradient
    ? { ...gradientStyle, backgroundPosition, color: 'transparent' as const }
    : { color: 'inherit' as const }

  return (
    <motion.span
      className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline', borderRadius: 0, backdropFilter: 'none', overflow: 'visible' }}
    >
      {showBorder && (
        <motion.div className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} />
      )}
      <motion.span className="text-content" style={textStyle}>
        {children}
      </motion.span>
    </motion.span>
  )
}
