'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { sectors } from '@/lib/sectors-data'

// 14 sectors split into rows of 5 / 5 / 4
const ROWS = [
  sectors.slice(0, 5),
  sectors.slice(5, 10),
  sectors.slice(10),
]

export default function SectorGrid() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <>
      {/* ── Desktop / Tablet — expanding flex rows ── */}
      <div className="hidden sm:flex flex-col gap-3">
        {ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-3" style={{ height: 200 }}>
            {row.map((sector) => {
              const Icon = sector.icon
              const isHovered = hovered === sector.slug
              const anyHovered = hovered !== null

              return (
                <Link
                  key={sector.slug}
                  href={`/sectors/${sector.slug}`}
                  className="relative overflow-hidden rounded-2xl min-w-0 cursor-pointer"
                  style={{
                    flex: isHovered ? '2.8 1 0%' : anyHovered ? '0.6 1 0%' : '1 1 0%',
                    transition: 'flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={() => setHovered(sector.slug)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Background */}
                  {sector.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${sector.image})`,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: sector.gradient }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

                  {/* Top badges — fade in on hover */}
                  <div
                    className="absolute top-3.5 left-3.5 w-8 h-8 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20"
                    style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
                  >
                    <Icon size={15} className="text-white" />
                  </div>
                  {sector.engagements && (
                    <div
                      className="absolute top-3.5 right-3.5"
                      style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
                    >
                      <span className="font-body text-[10px] font-medium text-white/80 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/15 whitespace-nowrap">
                        {sector.engagements} engagements
                      </span>
                    </div>
                  )}

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      className="font-heading font-bold text-white leading-snug whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{
                        fontSize: isHovered ? '16px' : '13px',
                        transition: 'font-size 0.35s ease',
                      }}
                    >
                      {sector.name}
                    </h3>

                    {/* Tagline + CTA — slide up on hover */}
                    <div
                      style={{
                        maxHeight: isHovered ? '64px' : '0px',
                        opacity: isHovered ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.4s ease, opacity 0.3s ease 0.05s',
                      }}
                    >
                      <p className="font-body text-[11px] text-white/60 leading-snug mt-1.5 mb-2 line-clamp-2">
                        {sector.tagline}
                      </p>
                      <div className="flex items-center gap-1 font-body text-[12px] font-medium text-white/80">
                        Explore sector <ArrowRight size={11} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ))}
      </div>

      {/* ── Mobile — 2-col grid ── */}
      <div className="sm:hidden grid grid-cols-2 gap-3">
        {sectors.map((sector) => {
          const Icon = sector.icon
          return (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className="group relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '4/3' }}
            >
              {sector.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${sector.image})` }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: sector.gradient }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <Icon size={14} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-[13px] text-white leading-snug">{sector.name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
