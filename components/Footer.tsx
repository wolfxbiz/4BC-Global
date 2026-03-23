import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-content pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">

          {/* Col 1 — Logo + social */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-dark text-sm leading-none">4B</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-[15px] text-white tracking-tight">4BC Global</span>
                <span className="font-body text-[9px] text-accent/80 tracking-widest uppercase">Research Based Advisory</span>
              </div>
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors mt-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>

          {/* Col 2 — Contact blurb */}
          <div className="flex flex-col gap-3">
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Got a question or need a proposal? Contact us and we'll get back to you today.
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
            {[
              { href: '/about', label: 'Our Approach' },
              { href: '/about', label: 'About' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/team', label: 'Team' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — CTA */}
          <div className="flex items-start">
            <Link
              href="/contact"
              className="font-body text-sm font-medium text-white border border-white rounded-full px-5 py-2.5 hover:bg-white hover:text-dark transition-all duration-200 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
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
