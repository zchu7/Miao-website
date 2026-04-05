import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { practiceAreas } from '@/lib/data/practiceAreas'

export default function FeaturedAreas() {
  const featured = practiceAreas.slice(0, 4)

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="Our Services"
            title="Practice Areas"
            subtitle="Comprehensive immigration and refugee legal services tailored to your needs."
          />
          <Link
            href="/practice-areas"
            className="flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-400 transition-colors whitespace-nowrap mb-12 md:mb-0"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map(({ id, title, description, icon: Icon, keyPoints }) => (
            <div
              key={id}
              className="bg-white rounded-xl border-t-4 border-gold-400 shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy-800 text-xl leading-tight">
                    {title}
                  </h3>
                </div>
              </div>
              <p className="text-navy-500 text-sm leading-relaxed mb-4">{description}</p>
              <ul className="space-y-1">
                {keyPoints.slice(0, 3).map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-navy-600">
                    <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
