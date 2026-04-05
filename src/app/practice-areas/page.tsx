import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PracticeAreaCard from '@/components/practice-areas/PracticeAreaCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { practiceAreas } from '@/lib/data/practiceAreas'

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Comprehensive immigration and refugee legal services: refugee claims, family sponsorship, permanent residency, work permits, study permits, visitor visas, citizenship, and appeals.',
}

export default function PracticeAreasPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow section-padding py-0">
          <div className="flex items-center gap-2 mb-4 text-sm text-navy-300">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">Practice Areas</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Our Services
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Practice Areas
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl leading-relaxed">
            Immigration law is complex and ever-changing. Our experienced team provides
            strategic, compassionate representation across all areas of Canadian immigration
            and refugee law.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="How We Can Help"
              title="Comprehensive Legal Services for Every Immigration Situation"
              subtitle="Whether you are newly arrived, facing a removal order, or working toward citizenship, our lawyers are here to guide you."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.id} area={area} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-navy-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-800 mb-4">
              Not Sure Which Service Applies to You?
            </h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto">
              Every immigration situation is unique. Book a free consultation and our
              lawyers will assess your case and recommend the best path forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-navy-900 rounded-md font-semibold hover:bg-gold-300 transition-colors"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
