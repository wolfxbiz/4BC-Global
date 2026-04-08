import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0F1320]">

      {/* ── Big logo banner ── */}
      <div className="relative z-10 bg-white py-10 px-4">
        <Link href="/" className="block w-full max-w-5xl mx-auto">
          <Image
            src="/brand/logo-dark.svg"
            alt="4BC Global"
            width={1200}
            height={300}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* ── Footer columns ── */}
      <div className="container-content relative z-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">

          {/* Col 1 — Tagline + social */}
          <div className="flex flex-col gap-4">
            <p className="font-heading font-medium text-[13px] text-accent tracking-[0.1em] uppercase">
              Research Based Advisory
            </p>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Specialist B2B &amp; B2C market research for the MEA region — from market entry to competitive intelligence.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors mt-1 self-start"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>

          {/* Col 2 — Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-heading font-semibold text-[13px] text-white tracking-wide uppercase mb-1">Contact</p>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Got a question or need a proposal? We'll get back to you today.
            </p>
            <a href="tel:+" className="font-body text-sm text-white hover:text-accent transition-colors">
              +971 (phone to be added) ↗
            </a>
            <a href="mailto:info@4bcglobal.com" className="font-body text-sm text-white hover:text-accent transition-colors">
              info@4bcglobal.com ↗
            </a>
          </div>

          {/* Col 3 — Site links */}
          <div className="flex flex-col gap-2.5">
            <p className="font-heading font-semibold text-[13px] text-white tracking-wide uppercase mb-1">Navigate</p>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/sectors', label: 'Sectors' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/about#our-team', label: 'Our Team' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — CTA */}
          <div className="flex flex-col gap-4 items-start">
            <p className="font-heading font-semibold text-[13px] text-white tracking-wide uppercase mb-1">Work With Us</p>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Let's bring the same depth of insight to your business challenges.
            </p>
            <Link
              href="/contact"
              className="font-body text-sm font-medium text-dark bg-accent rounded-full px-5 py-2.5 hover:brightness-110 transition-all duration-200 inline-block"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2025 4BC Global. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
