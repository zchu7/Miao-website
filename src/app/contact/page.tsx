'use client'
import { useState } from 'react'
import { useLang, t } from '@/context/LangContext'
import PreFooter from '@/components/layout/PreFooter'

export default function ContactPage() {
  const { lang } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '', consent: false })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-card">
            <p className="page-hero-eyebrow">Albert Arthur Lawyers</p>
            <h1>{t('聯繫我們', '联系我们', lang)}</h1>
          </div>
        </div>
      </div>
      <section className="contact-section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-left">
              <p className="eyebrow">{t('聯絡資訊', '联络信息', lang)}</p>
              <h1>{t('與我們取得聯繫', '与我们取得联系', lang)}</h1>
              <p className="about-text">
                {t(
                  '如有任何移民法律問題，歡迎隨時聯繫我們的專業團隊。我們將在一個工作日內回覆您的查詢。',
                  '如有任何移民法律问题，欢迎随时联系我们的专业团队。我们将在一个工作日内回复您的查询。',
                  lang
                )}
              </p>
              <p className="about-text">
                <strong>{t('電話：', '电话：', lang)}</strong><a href="tel:+61272255253">+61 272 255 253</a><br />
                <strong>{t('電郵：', '电邮：', lang)}</strong><a href="mailto:info@albertarthurlawyers.com">info@albertarthurlawyers.com</a><br />
                <strong>{t('地址：', '地址：', lang)}</strong>Level 11, 60 Castlereagh Street, Sydney NSW 2000
              </p>
            </div>
            <div className="form-wrap">
              <form onSubmit={handleSubmit}>
                <div className="f-row">
                  <div className="f-group">
                    <label>{t('名字', '名字', lang)}</label>
                    <input type="text" required value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
                  </div>
                  <div className="f-group">
                    <label>{t('姓氏', '姓氏', lang)}</label>
                    <input type="text" required value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
                  </div>
                </div>
                <div className="f-group">
                  <label>{t('電郵地址', '电邮地址', lang)}</label>
                  <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="f-group">
                  <label>{t('電話號碼', '电话号码', lang)}</label>
                  <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div className="f-group">
                  <label>{t('留言', '留言', lang)}</label>
                  <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <div className="f-check">
                  <input type="checkbox" id="consent" required checked={form.consent} onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))} />
                  <label htmlFor="consent">
                    {t(
                      '我同意 Albert Arthur Lawyers 根據其隱私政策收集和使用我的個人資料以回覆此查詢。',
                      '我同意 Albert Arthur Lawyers 根据其隐私政策收集和使用我的个人资料以回复此查询。',
                      lang
                    )}
                  </label>
                </div>
                <button type="submit" className="btn-submit">
                  {t('提交查詢', '提交查询', lang)}
                </button>
                {submitted && (
                  <p className="submit-msg">
                    {t('感謝您的查詢！我們將盡快與您聯繫。', '感谢您的查询！我们将尽快与您联系。', lang)}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <PreFooter />
    </>
  )
}
