import AnimatedSection from './AnimatedSection'

interface Props {
  headline: string
  subheadline: string
}

export default function PageHeader({ headline, subheadline }: Props) {
  return (
    <section className="bg-gradient-hero py-20 md:py-28 px-4">
      <div className="container-content text-center">
        <AnimatedSection>
          <div className="accent-divider mb-6" />
          <h1 className="font-heading font-medium text-4xl md:text-5xl text-white mb-4">
            {headline}
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto">
            {subheadline}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
