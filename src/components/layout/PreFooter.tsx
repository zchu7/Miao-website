'use client'
import Link from 'next/link'
import { useLang, t } from '@/context/LangContext'

export default function PreFooter() {
  const { lang } = useLang()
  return (
    <div className="pre-footer">
      <h2 dangerouslySetInnerHTML={{ __html: t('讓複雜的移民手續<br>變得簡單', '让复杂的移民手续<br>变得简单', lang) }} />
      <Link href="/contact" className="btn-contact-team">
        {t('聯繫我們的團隊', '联系我们的团队', lang)}
      </Link>
    </div>
  )
}
