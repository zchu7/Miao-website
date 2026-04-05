import Link from 'next/link'
import { Clock } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import type { Article } from '@/types/article'
import { formatDate } from '@/lib/utils'

type ArticleCardProps = {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-navy-100 hover:shadow-xl transition-shadow"
    >
      {/* Cover image / gradient placeholder */}
      <div className="h-44 bg-gradient-to-br from-navy-700 to-navy-900 flex items-end p-4">
        <Badge label={article.category} variant="white" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif font-bold text-navy-800 text-base leading-snug mb-2 group-hover:text-gold-500 transition-colors line-clamp-3">
          {article.title}
        </h3>
        <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-navy-400 border-t border-navy-100 pt-3 mt-auto">
          <span>{formatDate(article.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>
    </Link>
  )
}
