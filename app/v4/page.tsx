import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Design Preview — Plum Light — 4BC Global',
}

export default function V4Page() {
  return <HomePageContent variant="plum-light" />
}
