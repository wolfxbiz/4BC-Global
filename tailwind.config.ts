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
          DEFAULT: '#2B4A8C',  // --color-secondary: navy blue
          light: '#3A5CA8',    // navy hover
        },
        accent: {
          DEFAULT: '#E8A020',  // --color-primary: golden amber
          warm: '#F5B840',     // --color-amber-light
          light: '#F2A8C8',    // --color-accent-light: soft rose
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
          soft: '#F5F4F0',     // --color-bg: off-white
        },
        border: '#E2DEDE',     // warm-tinted border
      },
      fontFamily: {
        heading: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'stat': ['2.625rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1A1A2E 0%, #2B4A8C 55%, #7D2B5E 100%)',
        'gradient-cta': 'linear-gradient(90deg, #E8A020 0%, #F5B840 100%)',
        'gradient-accent': 'linear-gradient(90deg, #E8A020, #2B4A8C, #7D2B5E)',
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
