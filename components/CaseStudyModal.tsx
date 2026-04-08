'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, BarChart2, ArrowRight, Target, Lightbulb, TrendingUp, X } from 'lucide-react'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { CaseStudy, sectorConfig } from '@/lib/case-studies-data'
import { useContactModal } from '@/lib/contact-modal-context'

interface CaseStudyModalProps {
  study: CaseStudy
  onClose: () => void
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { openModal: openContactModal } = useContactModal()
  useOutsideClick(ref, onClose)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const cfg = sectorConfig[study.sector] || { gradient: 'from-primary to-plum', bg: 'bg-primary/10', color: 'text-primary' }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      />

      {/* Modal */}
      <div className="fixed inset-0 grid place-items-center z-50 p-4">
        <motion.div
          key={study.id}
          ref={ref}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          className="w-full max-w-2xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Close button */}
          <button
            className="flex absolute top-3 right-3 items-center justify-center bg-white/90 backdrop-blur-sm border border-border rounded-full h-9 w-9 shadow-md z-10 hover:bg-white transition-colors"
            onClick={onClose}
          >
            <X size={15} className="text-text" />
          </button>

          {/* Image */}
          <div className="relative h-56 sm:h-72 flex-shrink-0">
            <Image src={study.image} alt={study.title} fill className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-70`} />
            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <span className="font-heading font-semibold text-[11px] tracking-[0.1em] uppercase text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
                  {study.sector}
                </span>
                {study.clientLogo && (
                  <div className="w-16 h-10 bg-white/95 rounded-xl flex items-center justify-center p-2">
                    <Image src={study.clientLogo} alt="Client" width={60} height={36} className="object-contain w-full h-full" />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {study.stats.map((s) => (
                  <div key={s.label} className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-center">
                    <div className="font-heading font-bold text-white text-base sm:text-lg leading-none">{s.value}</div>
                    <div className="font-body text-white/60 text-[10px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1">
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={13} className="text-text-muted flex-shrink-0" />
                <span className="font-body text-[13px] text-text-muted">{study.geography}</span>
              </div>
              <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-text leading-snug mb-3 tracking-[-0.02em]">
                {study.title}
              </h3>
              <p className="font-body text-[12px] sm:text-[13px] text-text-muted italic mb-6 flex items-center gap-1.5">
                <BarChart2 size={13} className="flex-shrink-0" />
                {study.methodology}
              </p>

              {/* Challenge / Approach / Outcome */}
              <div className="space-y-5">
                {[
                  { icon: Target, label: 'The Challenge', text: study.challenge, color: 'text-primary', bg: 'bg-primary/10' },
                  { icon: Lightbulb, label: 'Our Approach', text: study.approach, color: 'text-plum', bg: 'bg-plum/10' },
                  { icon: TrendingUp, label: 'The Outcome', text: study.outcome, color: 'text-emerald-700', bg: 'bg-emerald-50' },
                ].map(({ icon: Icon, label, text, color, bg }) => (
                  <div key={label} className="flex gap-3">
                    <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon size={14} className={color} />
                    </div>
                    <div>
                      <h4 className={`font-heading font-semibold text-[12px] ${color} uppercase tracking-wider mb-1.5`}>{label}</h4>
                      <p className="font-body text-[14px] text-text-muted leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <button
                  className="inline-flex items-center gap-2 font-body font-semibold text-[14px] text-primary hover:text-primary-light transition-colors"
                  onClick={() => { onClose(); setTimeout(openContactModal, 200) }}
                >
                  Start a similar project <ArrowRight size={14} />
                </button>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 font-body font-medium text-[13px] text-text-muted border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-all"
                  onClick={onClose}
                >
                  View All Case Studies <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
