import AnimatedSection from './AnimatedSection'
import Grainient from './Grainient'

interface Props {
  headline: string
  subheadline: string
}

export default function PageHeader({ headline, subheadline }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Grainient WebGL background */}
      <div className="absolute inset-0">
        <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/15 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/15 via-transparent to-dark/30 pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute right-0 top-0 w-[50%] h-full opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 600 400" className="w-full h-full" fill="none">
          <circle cx="500" cy="200" r="350" stroke="white" strokeWidth="1" />
          <circle cx="500" cy="200" r="250" stroke="white" strokeWidth="0.8" />
          <circle cx="500" cy="200" r="150" stroke="white" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="container-content relative z-10 pt-20 pb-28 md:pt-28 md:pb-32 px-4 text-center">
        <AnimatedSection>
          <div className="accent-divider mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {headline}
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            {subheadline}
          </p>
        </AnimatedSection>
      </div>

      {/* Wave bottom — same as hero */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,80 L0,50 Q360,5 720,50 Q1080,95 1440,45 L1440,80 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}
