import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ContactModalProvider } from '@/lib/contact-modal-context'
import ContactModal from '@/components/ContactModal'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '4BC Global — Research Based Advisory for MEA',
    template: '%s — 4BC Global',
  },
  description: 'Specialist B2B and B2C market research firm serving 40+ countries across Middle East & Africa. Market entry, customer experience, impact assessment and more.',
  icons: {
    icon: '/brand/logo-dark.svg',
    shortcut: '/brand/logo-dark.svg',
  },
  openGraph: {
    type: 'website',
    siteName: '4BC Global',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>
        <ContactModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  )
}
