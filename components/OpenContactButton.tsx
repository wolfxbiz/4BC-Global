'use client'

import { useContactModal } from '@/lib/contact-modal-context'
import PillButton from '@/components/PillButton'
import { ArrowRight } from 'lucide-react'

/** Drop-in pill button that opens the contact modal */
export function OpenContactPill({
  children,
  bgColor = '#E8A020',
  textColor = '#1A1A2E',
  fillColor = '#7D2B5E',
  hoverTextColor = '#ffffff',
  className = '',
}: {
  children?: React.ReactNode
  bgColor?: string
  textColor?: string
  fillColor?: string
  hoverTextColor?: string
  className?: string
}) {
  const { openModal } = useContactModal()
  return (
    <PillButton
      onClick={openModal}
      bgColor={bgColor}
      textColor={textColor}
      fillColor={fillColor}
      hoverTextColor={hoverTextColor}
      className={className}
    >
      {children ?? <>Get Started <ArrowRight size={16} /></>}
    </PillButton>
  )
}

/** Simple styled button that opens the contact modal */
export function OpenContactButton({
  children,
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  const { openModal } = useContactModal()
  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  )
}
