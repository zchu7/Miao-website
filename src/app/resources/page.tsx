'use client'
import { useLang, t } from '@/context/LangContext'
import PreFooter from '@/components/layout/PreFooter'

export default function ResourcesPage() {
  const { lang } = useLang()
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-card">
            <p className="page-hero-eyebrow">Albert Arthur Lawyers</p>
            <h1>{t('資源', '资源', lang)}</h1>
          </div>
        </div>
      </div>
      <section className="empty-section">
        <h2>{t('即將推出', '即将推出', lang)}</h2>
        <p>{t('此頁面正在建設中，敬請期待。', '此页面正在建设中，敬请期待。', lang)}</p>
      </section>
      <PreFooter />
    </>
  )
}
