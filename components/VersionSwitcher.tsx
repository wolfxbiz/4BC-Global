'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const versions = [
  { label: 'Dark',       sub: 'Classic',       path: '/',   dot: '#1A1A2E' },
  { label: 'Amber',      sub: 'Light Gradient', path: '/v2', dot: '#E8A020' },
  { label: 'Navy',       sub: 'Light Gradient', path: '/v3', dot: '#2B4A8C' },
  { label: 'Plum',       sub: 'Light Gradient', path: '/v4', dot: '#7D2B5E' },
]

export default function VersionSwitcher() {
  const pathname = usePathname()
  const isHomeVariant = ['/', '/v2', '/v3', '/v4'].includes(pathname)

  if (!isHomeVariant) return null

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="bg-white border border-border rounded-xl shadow-card-hover overflow-hidden min-w-[190px]">
        <div className="px-3.5 py-2 border-b border-border bg-bg-soft">
          <p className="font-body text-[9px] font-medium tracking-widest uppercase text-text-muted">
            Design Preview
          </p>
        </div>
        <div className="p-2 flex flex-col gap-0.5">
          {versions.map((v) => {
            const active = pathname === v.path
            return (
              <Link
                key={v.path}
                href={v.path}
                className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-all ${
                  active ? 'bg-dark' : 'hover:bg-bg-soft'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0 ring-1 ring-black/10"
                  style={{ backgroundColor: v.dot }}
                />
                <span className={`font-body text-[12px] font-medium ${active ? 'text-white' : 'text-text'}`}>
                  {v.label}
                </span>
                <span className={`font-body text-[10px] ml-auto ${active ? 'text-white/50' : 'text-text-muted'}`}>
                  {v.sub}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
