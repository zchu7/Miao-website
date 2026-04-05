import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

const stats = [
  { label: 'Cases Handled', value: '500+' },
  { label: 'Years of Experience', value: '15+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Languages Served', value: '10+' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-hero-gradient overflow-hidden">
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="relative container-narrow section-padding pt-32 md:pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Immigration & Refugee Law
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Protecting Your Future,{' '}
            <span className="text-gold-400">One Case at a Time</span>
          </h1>

          {/* Subheading */}
          <p className="text-navy-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Compassionate, experienced legal representation for immigrants and refugees
            in Canada. We stand with you through every step of your journey.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-400 text-navy-900 rounded-md font-semibold text-base hover:bg-gold-300 transition-colors"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400 text-gold-400 rounded-md font-semibold text-base hover:bg-gold-400/10 transition-colors"
            >
              Our Practice Areas
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-navy-600 mt-16">
        <div className="container-narrow section-padding py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-gold-400">
                  {value}
                </p>
                <p className="text-navy-300 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
