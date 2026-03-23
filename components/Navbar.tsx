'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/about', label: 'Our Approach' },
  { href: '/services', label: 'Services' },
  { href: '/sectors', label: 'Sectors' },
  { href: '/tools', label: 'Tools' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/team', label: 'About Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-nav'
          : 'bg-transparent'
      }`}>
        <div className="container-content">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${scrolled ? 'bg-dark' : 'bg-accent'}`}>
                <span className={`font-heading font-bold text-sm leading-none transition-colors duration-300 ${scrolled ? 'text-accent' : 'text-dark'}`}>4B</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-heading font-bold text-[15px] tracking-tight transition-colors duration-300 ${scrolled ? 'text-dark' : 'text-white'}`}>4BC Global</span>
                <span className={`font-body text-[9px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-text-muted' : 'text-white/50'}`}>Research Based Advisory</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[14px] px-3.5 py-2 transition-colors duration-300 ${
                    scrolled
                      ? pathname === link.href ? 'text-primary font-medium' : 'text-text hover:text-primary'
                      : pathname === link.href ? 'text-accent font-medium' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA — outline pill */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={`font-body text-[14px] font-medium rounded-full px-5 py-2 transition-all duration-300 ${
                  scrolled
                    ? 'text-dark border border-dark hover:bg-dark hover:text-white'
                    : 'text-white border border-white/40 hover:bg-white hover:text-dark'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-text' : 'text-white'}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-white pt-16 px-6 overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col gap-1 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-base py-3.5 border-b border-border text-text hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6">
                <Link href="/contact" className="block text-center font-body text-[15px] font-medium text-dark border border-dark rounded-full px-5 py-3 hover:bg-dark hover:text-white transition-all">
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
