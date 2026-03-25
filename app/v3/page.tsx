import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Design Preview — Navy Light — 4BC Global',
}

export default function V3Page() {
  return <HomePageContent variant="navy-light" />
}
