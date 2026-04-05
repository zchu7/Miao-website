import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowLeft } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { articles } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow section-padding py-0">
          <div className="flex items-center gap-2 mb-4 text-sm text-navy-300">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-gold-400 transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-gold-400 truncate">{article.title}</span>
          </div>
          <Badge label={article.category} variant="white" className="mb-4" />
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-navy-300 text-sm">
            <span>{formatDate(article.date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl">
          <p className="text-navy-500 text-lg leading-relaxed mb-8 border-l-4 border-gold-400 pl-5 italic">
            {article.excerpt}
          </p>
          <div className="prose prose-navy max-w-none text-navy-600 leading-relaxed space-y-4">
            <p>
              This article is a placeholder. Full article content will be added here.
              For personalized advice on your immigration situation, please{' '}
              <Link href="/contact" className="text-gold-500 underline hover:text-gold-400">
                contact our lawyers
              </Link>{' '}
              for a free consultation.
            </p>
          </div>

          <div className="mt-12 border-t border-navy-100 pt-8">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-navy-500 hover:text-gold-500 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-50 border-t border-navy-100">
        <div className="container-narrow section-padding py-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-800 mb-4">
            Have Questions About This Topic?
          </h2>
          <p className="text-navy-500 mb-6 max-w-xl mx-auto">
            Our lawyers can provide personalized advice for your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-navy-900 rounded-md font-semibold hover:bg-gold-300 transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
