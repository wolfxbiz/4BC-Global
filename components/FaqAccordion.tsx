'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How can 4BC Global help my business?',
    a: '4BC Global helps B2B and B2C enterprises make informed strategic decisions. We design custom quantitative and qualitative research studies — from market entry assessments and brand tracking to customer satisfaction programs and network planning.',
  },
  {
    q: 'What makes 4BC Global different from other research firms?',
    a: 'Our method-neutral approach means we diagnose your business challenge first, then design the optimal research methodology. Every engagement is led by senior practitioners with 15+ years of MEA experience — never delegated to junior researchers.',
  },
  {
    q: 'Which geographies do you cover?',
    a: 'We have registered offices in Dubai (UAE) and partner offices in India, Kenya, Algeria, and South Africa. We conduct research across 40+ countries, with a primary focus on the GCC, Levant, and Africa regions.',
  },
  {
    q: 'Can you handle large-scale research projects?',
    a: 'Yes. We have executed engagements involving 4,500+ quantitative interviews, 100+ expert IDIs, and 1,500+ GPS-mapped locations — all within single projects. Our network of field partners across MEA enables large-scale execution.',
  },
  {
    q: 'What research methodologies do you use?',
    a: 'We blend quantitative surveys (CATI, online, face-to-face), qualitative in-depth interviews (IDIs), focus groups, mystery shopping, observation research, secondary desk research, and geo-mapping — choosing the right mix for each unique challenge.',
  },
  {
    q: 'Do you have proprietary research tools?',
    a: 'Yes. We have built three proprietary platforms: 4BC InFuse (secondary research intelligence), 4BC Landscape (geo-mapping and network planning), and 4BC ImpactIQ (socio-economic impact assessment framework).',
  },
  {
    q: 'How do I get a proposal?',
    a: 'Fill in the contact form on our Contact page with a brief description of your research challenge. Our team will respond within 1–2 business days with an initial approach and proposal.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-bg-soft section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-plum mb-3 inline-block">FAQs</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text leading-tight mb-4">
              Learn more about our MEA market research services
            </h2>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
              Here are some frequently asked questions about working with 4BC Global.
            </p>
            <p className="font-body text-sm text-text-muted">
              Contact us today if you have any questions about your next research project.
            </p>
            <Link href="/contact" className="inline-block mt-5 font-body text-sm font-medium text-primary hover:underline">
              Get in touch →
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-body text-[15px] text-text font-medium">{faq.q}</span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted">
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>
                {open === i && (
                  <p className="font-body text-sm text-text-muted leading-relaxed pb-4">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
