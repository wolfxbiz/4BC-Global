'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import PillButton from './PillButton'
import { useContactModal } from '@/lib/contact-modal-context'

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Tools', href: '/tools' },
  { label: 'Case Studies', href: '/case-studies' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { openModal } = useContactModal()
  const [mobileOpen, setMobileOpen] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    const hamburger = hamburgerRef.current
    const menu = mobileMenuRef.current

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.ham-line')
      if (next) {
        gsap.to(lines[0], { rotation: 45, y: 3.5, duration: 0.25, ease: 'power3.out' })
        gsap.to(lines[1], { rotation: -45, y: -3.5, duration: 0.25, ease: 'power3.out' })
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.25, ease: 'power3.out' })
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.25, ease: 'power3.out' })
      }
    }

    if (menu) {
      if (next) {
        gsap.set(menu, { visibility: 'visible' })
        gsap.fromTo(menu, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.22, ease: 'power3.out' })
      } else {
        gsap.to(menu, { opacity: 0, y: 8, duration: 0.18, ease: 'power3.out', onComplete: () => { gsap.set(menu, { visibility: 'hidden' }) } })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container-content h-16 lg:h-[72px] flex items-center justify-between gap-4">

        {/* Logo — left */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/brand/logo-light.svg"
            alt="4BC Global"
            width={110}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav pills — centre */}
        <nav className="hidden lg:flex items-center bg-slate-100 rounded-full px-1 py-1 gap-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative overflow-hidden font-body text-[13.5px] px-4 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-primary font-semibold shadow-sm'
                    : 'text-text hover:bg-white/70 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Contact Us — right, with pill animation */}
        <div className="hidden lg:block flex-shrink-0">
          <PillButton
            href="/contact"
            bgColor="#1A2E5C"
            textColor="#ffffff"
            fillColor="#E8A020"
            hoverTextColor="#1A1A2E"
            className="font-body font-semibold text-[13.5px] px-5 py-2"
          >
            Contact Us
          </PillButton>
        </div>

        {/* Hamburger — mobile */}
        <button
          ref={hamburgerRef}
          className="lg:hidden flex flex-col items-center justify-center gap-[5px] p-2"
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          <span className="ham-line block w-5 h-[2px] bg-text rounded-full" />
          <span className="ham-line block w-5 h-[2px] bg-text rounded-full" />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg"
        style={{ visibility: 'hidden', opacity: 0 }}
      >
        <nav className="container-content py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-[15px] px-4 py-3 rounded-xl transition-colors ${
                pathname === item.href ? 'bg-primary/8 text-primary font-semibold' : 'text-text hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="/contact"
              className="block text-center font-body font-semibold text-[14px] bg-primary text-white rounded-full px-5 py-3 hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
