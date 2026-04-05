import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import Hero from '@/components/home/Hero'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import FeaturedAreas from '@/components/home/FeaturedAreas'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { articles } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Miao Immigration and Refugee Lawyers',
  description:
    'Expert immigration and refugee legal services in Canada. Compassionate, experienced lawyers helping clients with refugee claims, family sponsorship, work permits, and more.',
}

const testimonials = [
  {
    quote:
      "The team at Miao Immigration guided me through my refugee claim with incredible care and expertise. I felt supported every step of the way. I now have my permanent residency and cannot thank them enough.",
    name: 'A.K.',
    detail: 'Refugee Claimant → Permanent Resident',
  },
  {
    quote:
      "After two failed sponsorship applications on my own, Miao's lawyers identified exactly what was going wrong. My wife's visa was approved within eight months. Professional, responsive, and worth every penny.",
    name: 'M.T.',
    detail: 'Family Sponsorship Client',
  },
  {
    quote:
      "I was facing a removal order and felt completely lost. The team filed an urgent stay application and argued my case before the Federal Court. I'm still here with my family because of their work.",
    name: 'S.R.',
    detail: 'Federal Court Review Client',
  },
]

export default function HomePage() {
  const recentArticles = articles.slice(0, 3)

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedAreas />

      {/* Testimonials */}
      <section className="section-padding bg-navy-700">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            subtitle="We measure our success by the lives we help transform."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, name, detail }) => (
              <div
                key={name}
                className="bg-navy-800 rounded-xl p-6 border border-navy-600 relative"
              >
                <Quote className="w-8 h-8 text-gold-400/40 absolute top-4 right-4" />
                <p className="text-navy-200 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="border-t border-navy-600 pt-4">
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-gold-400 text-xs mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="Latest Insights"
              title="Immigration News & Articles"
              subtitle="Stay informed with the latest updates in Canadian immigration law."
            />
            <Link
              href="/articles"
              className="flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-400 transition-colors whitespace-nowrap mb-12 md:mb-0"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group bg-navy-50 rounded-xl overflow-hidden border border-navy-100 hover:shadow-lg transition-shadow"
              >
                {/* Gradient placeholder */}
                <div className="h-40 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                  <Badge label={article.category} variant="white" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-navy-800 text-base leading-snug mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-navy-400">
                    <span>{formatDate(article.date)}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 border-t-4 border-gold-400">
        <div className="container-narrow section-padding py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Case?
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation with our experienced immigration lawyers today.
            Your first step toward a secure future starts here.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-navy-900 rounded-md font-semibold text-base hover:bg-gold-300 transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
