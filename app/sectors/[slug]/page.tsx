import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2, Users } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import { sectors, getSectorBySlug } from '@/lib/sectors-data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug)
  if (!sector) return {}
  return {
    title: `${sector.name} — 4BC Global`,
    description: sector.description,
  }
}

export default function SectorPage({ params }: Props) {
  const sector = getSectorBySlug(params.slug)
  if (!sector) notFound()

  const Icon = sector.icon

  // Find adjacent sectors for navigation
  const currentIndex = sectors.findIndex((s) => s.slug === sector.slug)
  const prevSector = currentIndex > 0 ? sectors[currentIndex - 1] : null
  const nextSector = currentIndex < sectors.length - 1 ? sectors[currentIndex + 1] : null

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] flex items-center overflow-hidden"
        style={!sector.image ? { background: sector.gradient } : undefined}
      >
        {/* Photo background */}
        {sector.image && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${sector.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
          </>
        )}
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 container-content py-16 pt-28 sm:py-24 sm:pt-36 lg:py-32 lg:pt-44">
          <AnimatedSection>
            {/* Back link */}
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 text-white/55 hover:text-white font-body text-sm mb-10 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              All Sectors
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              {/* Left — title */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon size={28} className="text-white sm:hidden" />
                    <Icon size={36} className="text-white hidden sm:block" />
                  </div>
                  {sector.engagements && (
                    <span className="font-body text-[12px] font-medium text-white/70 bg-black/20 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 uppercase tracking-wider">
                      {sector.engagements} engagements
                    </span>
                  )}
                </div>
                <h1 className="font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-5">
                  {sector.name}
                </h1>
                <p className="font-body text-lg text-white/70 leading-relaxed max-w-xl">
                  {sector.tagline}
                </p>
              </div>

              {/* Right — research capability pills */}
              <div className="hidden lg:block">
                <p className="font-body text-[11px] font-medium text-white/45 uppercase tracking-widest mb-4">
                  What we research
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.researchList.map((item) => (
                    <span
                      key={item}
                      className="font-body text-[13px] text-white/80 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Wave */}
        <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 70" className="w-full block" preserveAspectRatio="none">
            <path d="M0,70 L0,35 Q360,0 720,35 Q1080,70 1440,25 L1440,70 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── OVERVIEW + WHAT WE RESEARCH ── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — description */}
            <AnimatedSection>
              <span className="section-tag">Overview</span>
              <h2 className="font-heading font-medium text-3xl md:text-4xl text-text mb-5">
                <GradientText hoverOnly animationSpeed={2}>Our {sector.name} Practice</GradientText>
              </h2>
              <p className="font-body text-text-muted text-lg leading-relaxed mb-6">
                {sector.description}
              </p>
              <p className="font-body text-text-muted leading-relaxed mb-8">
                Every engagement in this sector is led by senior practitioners with deep regional expertise — never delegated to junior researchers. We design bespoke research solutions tailored to the specific dynamics of {sector.name.toLowerCase()} markets across MEA.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body font-medium text-[15px] rounded-full px-7 py-3.5 text-white transition-colors"
                style={{ backgroundColor: sector.accentHex }}
              >
                Discuss Your Project <ArrowRight size={15} />
              </Link>
            </AnimatedSection>

            {/* Right — research list */}
            <AnimatedSection delay={0.2}>
              <span className="section-tag">What We Research</span>
              <h2 className="font-heading font-medium text-3xl text-text mb-6">
                <GradientText hoverOnly animationSpeed={2}>Research Capabilities</GradientText>
              </h2>
              <div className="space-y-3">
                {sector.researchList.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-bg-soft hover:border-primary/20 transition-colors">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-body text-[15px] text-text">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── KEY ENGAGEMENTS ── */}
      {sector.engagementsList.length > 0 && (
        <section className="bg-bg-soft section-padding">
          <div className="container-content">
            <AnimatedSection className="mb-10">
              <span className="section-tag">Our Work</span>
              <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
                <GradientText hoverOnly animationSpeed={2}>Key Engagements</GradientText>
              </h2>
              <p className="font-body text-text-muted mt-3">
                A sample of research projects we have executed in this sector.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sector.engagementsList.map((eng, i) => (
                <AnimatedSection key={eng} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-6 hover:border-primary/20 hover:shadow-card transition-all duration-200">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-white font-heading font-medium text-sm"
                      style={{ backgroundColor: sector.accentHex }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="font-body text-[15px] text-text leading-relaxed">{eng}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CLIENTS ── */}
      {(sector.logoImages.length > 0 || sector.clientList.length > 0) && (
        <section className="bg-white section-padding">
          <div className="container-content">
            <AnimatedSection className="text-center mb-10">
              <span className="section-tag">Clients</span>
              <h2 className="font-heading font-medium text-3xl md:text-4xl text-text">
                <GradientText hoverOnly animationSpeed={2}>Who We've Worked With</GradientText>
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              {sector.logoImages.length > 0 ? (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {sector.logoImages.map((src, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center bg-white border border-border rounded-2xl p-5 h-28 hover:border-primary/25 hover:shadow-md transition-all duration-200"
                    >
                      <Image
                        src={src}
                        alt={`Client logo ${i + 1}`}
                        width={140}
                        height={70}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3 justify-center">
                  {sector.clientList.map((client) => (
                    <div
                      key={client}
                      className="font-heading font-medium text-sm text-text bg-bg-soft border border-border rounded-xl px-5 py-3 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden section-padding"
        style={{ background: sector.gradient }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-content text-center relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-white" />
            </div>
            <h2 className="font-heading font-medium text-4xl text-white mb-4">
              Ready to Start a {sector.name} Research Project?
            </h2>
            <p className="font-body text-white/65 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Our senior team has deep experience in this sector. Let's talk about what you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white font-body font-medium text-[16px] rounded-full px-8 py-4 hover:bg-white/90 transition-colors shadow-lg"
              style={{ color: sector.accentHex }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTOR NAVIGATION ── */}
      <section className="bg-white border-t border-border py-10 px-4">
        <div className="container-content">
          <div className="flex items-center justify-between gap-4">
            {prevSector ? (
              <Link href={`/sectors/${prevSector.slug}`} className="group flex items-center gap-3 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowLeft size={16} />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider">Previous</p>
                  <p className="font-heading font-medium text-sm text-text group-hover:text-primary transition-colors">{prevSector.name}</p>
                </div>
              </Link>
            ) : <div />}

            <Link href="/sectors" className="font-body text-sm font-medium text-text-muted hover:text-primary transition-colors">
              All Sectors
            </Link>

            {nextSector ? (
              <Link href={`/sectors/${nextSector.slug}`} className="group flex items-center gap-3 text-right hover:text-primary transition-colors">
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider">Next</p>
                  <p className="font-heading font-medium text-sm text-text group-hover:text-primary transition-colors">{nextSector.name}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  )
}
