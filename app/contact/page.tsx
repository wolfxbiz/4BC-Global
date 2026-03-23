'use client'
import { useState } from 'react'
import type { Metadata } from 'next'
import { MapPin, Mail, Phone, Linkedin, Send } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const countries = [
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
  'Egypt', 'Algeria', 'Morocco', 'Kenya', 'Ghana', 'South Africa',
  'India', 'Pakistan', 'United Kingdom', 'Other',
]

const serviceAreas = [
  'Business Research',
  'Customer Experience',
  'Impact Assessment',
  'Geolocation Services',
  'Advisory / Strategy',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: '',
    serviceArea: '',
    projectBrief: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, integrate with your form handler/API
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-hero py-20 md:py-28 px-4">
        <div className="container-content text-center">
          <div className="h-[3px] w-20 mx-auto bg-gradient-accent rounded-full mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">Get in Touch</h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto">
            Let's talk about your next research project
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-card border border-border shadow-card p-8">
                  <h2 className="font-heading font-bold text-2xl text-text mb-2">Send Us a Message</h2>
                  <p className="font-body text-sm text-text-muted mb-8">
                    Fill in the form below and our team will respond within 1–2 business days.
                  </p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={28} className="text-accent" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-text mb-2">Message Received!</h3>
                      <p className="font-body text-text-muted">
                        Thank you for reaching out. Our team will be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-heading font-medium text-sm text-text block mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="font-heading font-medium text-sm text-text block mb-1.5">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="companyName"
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-heading font-medium text-sm text-text block mb-1.5">Job Title</label>
                        <input
                          name="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors"
                          placeholder="Head of Strategy"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-heading font-medium text-sm text-text block mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="font-heading font-medium text-sm text-text block mb-1.5">Phone Number</label>
                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors"
                            placeholder="+971 50 000 0000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-heading font-medium text-sm text-text block mb-1.5">Country</label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors bg-white"
                          >
                            <option value="">Select country</option>
                            {countries.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="font-heading font-medium text-sm text-text block mb-1.5">Service Area</label>
                          <select
                            name="serviceArea"
                            value={formData.serviceArea}
                            onChange={handleChange}
                            className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors bg-white"
                          >
                            <option value="">Select service</option>
                            {serviceAreas.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="font-heading font-medium text-sm text-text block mb-1.5">Project Brief</label>
                        <textarea
                          name="projectBrief"
                          value={formData.projectBrief}
                          onChange={handleChange}
                          rows={4}
                          className="w-full border border-border rounded-lg px-4 py-2.5 font-body text-sm text-text focus:outline-none focus:border-primary transition-colors resize-none"
                          placeholder="Tell us about your research challenge or project..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full text-center">
                        Submit Request →
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-card border border-border shadow-card p-6">
                  <h3 className="font-heading font-semibold text-lg text-text mb-5">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-medium text-sm text-text">Dubai, UAE</p>
                        <p className="font-body text-xs text-text-muted">Full address to be confirmed</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-medium text-sm text-text">Email</p>
                        <a href="mailto:info@4bcglobal.com" className="font-body text-xs text-plum hover:text-primary transition-colors">
                          info@4bcglobal.com
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-medium text-sm text-text">Phone</p>
                        <p className="font-body text-xs text-text-muted">To be added</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Linkedin size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-medium text-sm text-text">LinkedIn</p>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-plum hover:text-primary transition-colors">
                          Follow us on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-card border border-border shadow-card overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-plum/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={32} className="text-primary mx-auto mb-2" />
                      <p className="font-heading font-semibold text-sm text-primary">Dubai, UAE</p>
                      <p className="font-body text-xs text-text-muted">MEA Research Hub</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <div className="bg-primary/5 border border-primary/20 rounded-card p-5">
                  <h4 className="font-heading font-semibold text-sm text-primary mb-2">Partner Offices</h4>
                  <div className="flex flex-wrap gap-2">
                    {['India', 'Kenya', 'Algeria', 'South Africa'].map((loc) => (
                      <span key={loc} className="text-xs font-body text-text-muted bg-white border border-border rounded-full px-3 py-1">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-dark section-padding">
        <div className="container-content text-center">
          <AnimatedSection>
            <blockquote className="font-heading text-xl md:text-2xl text-gray-300 italic max-w-2xl mx-auto mb-8 leading-relaxed">
              "Whether you need a quick market snapshot or a full strategic study — we're ready to design the right research for you."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@4bcglobal.com" className="btn-primary">
                Email Us Directly
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
