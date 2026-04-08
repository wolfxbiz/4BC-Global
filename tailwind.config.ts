import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B4A8C',  // navy blue — headers, cards, navigation
          light: '#3A5CA8',    // navy hover
        },
        accent: {
          DEFAULT: '#E8A020',  // golden amber — buttons, highlights, brand accents
          warm: '#F5B840',     // amber hover
          light: '#F2A8C8',    // soft rose — pills, light backgrounds
        },
        plum: {
          DEFAULT: '#7D2B5E',  // --color-accent: deep plum
          light: '#9D3B7E',    // plum hover
        },
        mauve: '#C890B0',      // --color-mauve: dusty mauve
        dark: {
          DEFAULT: '#1A1A2E',  // --color-text: deep charcoal
          surface: '#24243E',  // dark card surface
        },
        text: {
          DEFAULT: '#1A1A2E',  // --color-text
          muted: '#6B7280',
        },
        bg: {
          DEFAULT: '#FFFFFF',  // --color-surface
          soft: '#EEF3FF',     // light navy tint
        },
        border: '#E2DEDE',     // warm-tinted border
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        body:    ['var(--font-jakarta)', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        sans:    ['var(--font-jakarta)', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Hero H1 — 56px, tight
        'hero':    ['3.5rem',   { lineHeight: '1.08', letterSpacing: '-0.04em', fontWeight: '800' }],
        // Section H2 — 36px
        'h2':      ['2.25rem',  { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        // H2 large — 44px
        'h2-lg':   ['2.75rem',  { lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '700' }],
        // H3
        'h3':      ['1.375rem', { lineHeight: '1.3',  letterSpacing: '-0.015em', fontWeight: '600' }],
        // Label / eyebrow
        'label':   ['0.875rem', { lineHeight: '1',    letterSpacing: '0.1em',  fontWeight: '600' }],
        // Standard body
        'body-lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '0.005em', fontWeight: '400' }],
        // Card body
        'body-md': ['1rem',     { lineHeight: '1.6',  letterSpacing: '0.005em', fontWeight: '400' }],
        // Small / meta
        'body-sm': ['0.9375rem',{ lineHeight: '1.55', letterSpacing: '0.005em', fontWeight: '400' }],
        // CTA
        'cta':     ['1rem',     { lineHeight: '1',    letterSpacing: '-0.01em', fontWeight: '600' }],
        // Stat number
        'stat':    ['2.625rem', { lineHeight: '1.1',  letterSpacing: '-0.03em', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1A1A2E 0%, #2B4A8C 55%, #7D2B5E 100%)',
        'gradient-cta': 'linear-gradient(90deg, #E8A020 0%, #F5B840 100%)',
        'gradient-accent': 'linear-gradient(90deg, #2B4A8C, #7D2B5E, #E8A020)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1)',
        nav: '0 2px 8px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        card: '12px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
