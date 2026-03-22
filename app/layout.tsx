import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: '4BC Global — Research Based Advisory for MEA',
    template: '%s — 4BC Global',
  },
  description: 'Specialist B2B and B2C market research firm serving 40+ countries across Middle East & Africa. Market entry, customer experience, impact assessment and more.',
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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
