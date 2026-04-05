'use client'

import Link from 'next/link'
import { useState } from 'react'
import ArticleCard from '@/components/articles/ArticleCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { articles } from '@/lib/data/articles'
import clsx from 'clsx'

const categories = [
  'All',
  ...Array.from(new Set(articles.map((a) => a.category))),
]

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory)

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
            <span className="text-gold-400">Articles</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Immigration Law Blog
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            News &amp; Insights
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl leading-relaxed">
            Stay up to date with the latest developments in Canadian immigration law,
            policy changes, and practical guidance from our legal team.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Browse Articles"
            title="Immigration News &amp; Guides"
          />

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === cat
                    ? 'bg-gold-400 text-navy-900'
                    : 'bg-white text-navy-600 border border-navy-200 hover:border-gold-400 hover:text-gold-500'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-navy-500 text-center py-12">
              No articles found in this category.
            </p>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 border-t-4 border-gold-400">
        <div className="container-narrow section-padding py-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Have Questions About Your Case?
          </h2>
          <p className="text-navy-200 mb-8 max-w-xl mx-auto">
            Our experienced lawyers are ready to provide personalized advice for your
            immigration situation.
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
