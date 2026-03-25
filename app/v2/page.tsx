import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Design Preview — Amber Light — 4BC Global',
}

export default function V2Page() {
  return <HomePageContent variant="amber-light" />
}
