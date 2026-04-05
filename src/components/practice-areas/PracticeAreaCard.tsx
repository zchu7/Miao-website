import { CheckCircle } from 'lucide-react'
import type { PracticeArea } from '@/types/practiceArea'

type PracticeAreaCardProps = {
  area: PracticeArea
}

export default function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  const Icon = area.icon

  return (
    <div className="bg-white rounded-xl border-t-4 border-gold-400 shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-gold-400" />
        </div>
        <h3 className="font-serif font-bold text-navy-800 text-xl leading-tight mt-1">
          {area.title}
        </h3>
      </div>
      <p className="text-navy-500 text-sm leading-relaxed mb-5">{area.description}</p>
      <ul className="space-y-2 mt-auto">
        {area.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-navy-600">
            <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
