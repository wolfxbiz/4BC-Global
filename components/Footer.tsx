import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo col */}
          <div className="md:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-heading font-bold text-2xl text-white">4BC Global</span>
              <span className="font-body text-[11px] text-accent tracking-wider uppercase mt-1">Research Based Advisory</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Specialist market research & advisory for B2B and B2C enterprises across the MEA region.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-accent mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/team', label: 'Our Team' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/clients', label: 'Clients' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-accent mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { href: '/services#business-research', label: 'Business Research' },
                { href: '/services#customer-experience', label: 'Customer Experience' },
                { href: '/services#impact-assessment', label: 'Impact Assessment' },
                { href: '/services#geolocation-services', label: 'Geolocation' },
                { href: '/tools', label: 'Proprietary Tools' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-accent mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Dubai, UAE</li>
              <li><a href="mailto:info@4bcglobal.com" className="hover:text-accent transition-colors">info@4bcglobal.com</a></li>
              <li><a href="tel:+" className="hover:text-accent transition-colors">(Phone to be added)</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Accent divider */}
        <div className="my-10 h-[3px] w-full bg-gradient-accent rounded-full opacity-60" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 4BC Global. All rights reserved.</p>
          <p>Formerly 4SiGHT Business Consulting · Spun out from Kantar 2020</p>
        </div>
      </div>
    </footer>
  )
}
