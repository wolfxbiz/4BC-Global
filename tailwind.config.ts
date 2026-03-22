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
          DEFAULT: '#4B2C7A',
          light: '#6B3FA0',
        },
        accent: {
          DEFAULT: '#E8A520',
          warm: '#F5B731',
        },
        blue: {
          brand: '#2A5CAA',
          light: '#3D7DD9',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          surface: '#232340',
        },
        text: {
          DEFAULT: '#2D2D2D',
          muted: '#6B7280',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          soft: '#F8F8FA',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'stat': ['2.625rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1A1A2E 0%, #4B2C7A 60%, #2A5CAA 100%)',
        'gradient-cta': 'linear-gradient(90deg, #E8A520 0%, #F5B731 100%)',
        'gradient-accent': 'linear-gradient(90deg, #E8A520, #4B2C7A, #2A5CAA)',
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
