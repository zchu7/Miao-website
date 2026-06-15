'use client'
import { useLang, t } from '@/context/LangContext'
import PreFooter from '@/components/layout/PreFooter'

export default function BookPage() {
  const { lang } = useLang()
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-card">
            <p className="page-hero-eyebrow">Albert Arthur Lawyers</p>
            <h1>{t('預約咨詢', '预约咨询', lang)}</h1>
          </div>
        </div>
      </div>
      <section className="empty-section">
        <h2>{t('即將推出', '即将推出', lang)}</h2>
        <p>{t('線上預約系統正在建設中，請致電或發送電郵預約。', '线上预约系统正在建设中，请致电或发送电邮预约。', lang)}</p>
      </section>
      <PreFooter />
    </>
  )
}
