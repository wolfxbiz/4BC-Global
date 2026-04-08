'use client'
import { useEffect, useRef, useState } from 'react'

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = '', duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0)
  const ref = useRef<ReturnType<typeof setInterval> | null>(null)
  const started = useRef(false)
  const elRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const steps = 40
        const step = to / steps
        let current = 0
        ref.current = setInterval(() => {
          current += step
          if (current >= to) { setVal(to); if (ref.current) clearInterval(ref.current) }
          else setVal(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (elRef.current) observer.observe(elRef.current)
    return () => { observer.disconnect(); if (ref.current) clearInterval(ref.current) }
  }, [to, duration])

  return <span ref={elRef}>{val}{suffix}</span>
}

// ── Sparkline SVG (animated path draw) ───────────────────────────────────────
function Sparkline({ values, color, height = 48 }: { values: number[]; color: string; height?: number }) {
  const pathRef = useRef<SVGPathElement>(null)
  const areaRef = useRef<SVGPathElement>(null)
  const [drawn, setDrawn] = useState(false)

  const w = 220, h = height
  const min = Math.min(...values), max = Math.max(...values)
  const norm = (v: number) => h - ((v - min) / (max - min)) * (h - 6) - 3
  const pts = values.map((v, i) => [i * (w / (values.length - 1)), norm(v)] as [number, number])
  const d = pts.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(' ')
  const area = d + ` L${pts[pts.length - 1][0]},${h} L0,${h} Z`

  useEffect(() => {
    const el = pathRef.current
    if (!el) return
    const len = el.getTotalLength()
    el.style.strokeDasharray = `${len}`
    el.style.strokeDashoffset = `${len}`
    const timer = setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.4s ease'
      el.style.strokeDashoffset = '0'
      setDrawn(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height }} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sg-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={drawn ? 0.25 : 0} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#sg-${color.replace('#','')})`} style={{ transition: 'fill-opacity 0.6s ease', fillOpacity: drawn ? 1 : 0 }} />
      <path ref={pathRef} d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Animated bar chart ────────────────────────────────────────────────────────
function BarChart({ bars, color }: { bars: { label: string; value: number }[]; color: string }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const max = Math.max(...bars.map(b => b.value))

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setAnimated(true), 200); observer.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex items-end gap-1.5 h-12">
      {bars.map((b, i) => (
        <div key={b.label} className="flex flex-col items-center gap-1 flex-1">
          <div className="w-full rounded-sm overflow-hidden" style={{ height: 40, background: 'rgba(0,0,0,0.05)' }}>
            <div
              className="w-full rounded-sm"
              style={{
                height: animated ? `${(b.value / max) * 100}%` : '0%',
                background: color,
                transition: `height 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s`,
                marginTop: 'auto',
                display: 'block',
                position: 'relative',
                top: animated ? `${100 - (b.value / max) * 100}%` : '100%',
              }}
            />
          </div>
          <span style={{ fontSize: 9, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.04em' }}>{b.label}</span>
        </div>
      ))}
    </div>
  )
}

// ── Donut chart ───────────────────────────────────────────────────────────────
function Donut({ segments }: { segments: { value: number; color: string; label: string }[] }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<SVGSVGElement>(null)
  const total = segments.reduce((s, x) => s + x.value, 0)
  const r = 28, cx = 36, cy = 36, stroke = 9
  const circumference = 2 * Math.PI * r
  let offset = 0

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setAnimated(true), 200); observer.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <svg ref={ref} viewBox="0 0 72 72" width={72} height={72} style={{ transform: 'rotate(-90deg)' }}>
      {segments.map((seg, i) => {
        const dash = (seg.value / total) * circumference
        const gap = circumference - dash
        const currentOffset = offset
        offset += dash
        return (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${animated ? dash : 0} ${circumference}`}
            strokeDashoffset={-currentOffset}
            strokeLinecap="butt"
            style={{ transition: `stroke-dasharray 0.8s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s` }}
          />
        )
      })}
    </svg>
  )
}

// ── Pulse dot ─────────────────────────────────────────────────────────────────
function PulseDot({ color }: { color: string }) {
  return (
    <span className="relative inline-flex w-2 h-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: color }} />
      <span className="relative inline-flex rounded-full w-2 h-2" style={{ background: color }} />
    </span>
  )
}

// ── Live ticker ───────────────────────────────────────────────────────────────
const tickers = [
  { label: 'Retail MEA', delta: '+4.2%', up: true },
  { label: 'Banking UAE', delta: '+2.8%', up: true },
  { label: 'FMCG KSA', delta: '-1.1%', up: false },
  { label: 'Telco Egypt', delta: '+6.5%', up: true },
  { label: 'Logistics GCC', delta: '+3.3%', up: true },
  { label: 'Real Estate', delta: '-0.8%', up: false },
]

function Ticker() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % tickers.length), 1800)
    return () => clearInterval(t)
  }, [])
  const item = tickers[idx]
  return (
    <div className="flex items-center justify-between" key={idx} style={{ animation: 'fadeSlideIn 0.35s ease' }}>
      <span style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>{item.label}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: item.up ? '#16a34a' : '#dc2626' }}>{item.delta}</span>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function HeroDashboard() {
  return (
    <div className="w-full" style={{ display: 'grid', gridTemplateRows: 'auto auto', gap: 10 }}>
      <style>{`
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      `}</style>

      {/* ── TOP CARD — Engagement trend line chart ── */}
      <div style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: 18,
        padding: '22px 24px',
        backdropFilter: 'blur(12px)',
        animation: 'floatY 6s ease-in-out infinite',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Engagement Index</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: '#1A1A2E', lineHeight: 1 }}>
              <Counter to={94} suffix="%" duration={1600} />
            </div>
          </div>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', fontStyle: 'italic' }}>12-month trend</div>
        </div>
        <Sparkline values={[42, 55, 48, 61, 58, 70, 65, 78, 74, 85, 81, 94]} color="#7D2B5E" height={68} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          {['Jan','Mar','May','Jul','Sep','Nov'].map(m => (
            <span key={m} style={{ fontSize: 10, color: 'rgba(0,0,0,0.25)', letterSpacing: '0.04em' }}>{m}</span>
          ))}
        </div>
      </div>

      {/* ── BOTTOM ROW — two cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 10 }}>

        {/* Bottom-left — Sector breakdown donut */}
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: 18,
          padding: '20px 20px',
          animation: 'floatY 7s ease-in-out infinite 1s',
        }}>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Sector Mix</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Donut segments={[
              { value: 32, color: '#7D2B5E', label: 'Retail' },
              { value: 24, color: '#1A2E5C', label: 'Banking' },
              { value: 20, color: '#E8A020', label: 'Energy' },
              { value: 14, color: '#2B4A8C', label: 'Telco' },
              { value: 10, color: '#C07010', label: 'Other' },
            ]} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { label: 'Retail', color: '#7D2B5E', pct: '32%' },
                { label: 'Banking', color: '#1A2E5C', pct: '24%' },
                { label: 'Energy', color: '#E8A020', pct: '20%' },
                { label: 'Telco', color: '#2B4A8C', pct: '14%' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.55)' }}>{s.label}</span>
                  <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.3)', marginLeft: 'auto' }}>{s.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom-right — Market ticker + bar chart */}
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: 18,
          padding: '20px 20px',
          animation: 'floatY 8s ease-in-out infinite 2s',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Market Signal</div>
          <Ticker />
          <BarChart
            bars={[
              { label: 'Q1', value: 68 },
              { label: 'Q2', value: 74 },
              { label: 'Q3', value: 71 },
              { label: 'Q4', value: 89 },
            ]}
            color="rgba(125,43,94,0.7)"
          />
        </div>

      </div>
    </div>
  )
}
