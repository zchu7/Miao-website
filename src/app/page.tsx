'use client'
import Link from 'next/link'
import { useLang, t } from '@/context/LangContext'
import PreFooter from '@/components/layout/PreFooter'

const tcServices = ['技術移民', '配偶簽證', '父母簽證', '學生簽證', '訪客簽證', '商務簽證', '僱主擔保簽證', '其他簽證']
const scServices = ['技术移民', '配偶签证', '父母签证', '学生签证', '访客签证', '商务签证', '雇主担保签证', '其他签证']

const tcAppeals = ['AAT 上訴', '聯邦法院', '部長干預', 'IGIS 投訴']
const scAppeals = ['AAT 上诉', '联邦法院', '部长干预', 'IGIS 投诉']

const newsCards = [
  {
    tcTitle: '2024年技術移民最新政策解析',
    scTitle: '2024年技术移民最新政策解析',
    date: '2024-06-01',
    tcCat: '移民資訊',
    scCat: '移民资讯',
    tcExcerpt: '閱讀更多 →',
    scExcerpt: '阅读更多 →',
  },
  {
    tcTitle: '配偶簽證申請流程全攻略',
    scTitle: '配偶签证申请流程全攻略',
    date: '2024-05-15',
    tcCat: '簽證指南',
    scCat: '签证指南',
    tcExcerpt: '閱讀更多 →',
    scExcerpt: '阅读更多 →',
  },
]

export default function Home() {
  const { lang } = useLang()
  const services = lang === 'tc' ? tcServices : scServices
  const appeals = lang === 'tc' ? tcAppeals : scAppeals

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-chevron" />
        <div className="hero-blue" />
        <div className="hero-inner">
          <span className="hero-eyebrow">Albert Arthur Lawyers</span>
          <h1>{t('移民律師及/\n註冊移民代理', '移民律师及/\n注册移民代理', lang)}</h1>
          <p className="hero-desc">
            {t(
              '我們是悉尼精品移民律師事務所，專注於澳洲移民法律服務，提供專業、高效、個人化的移民諮詢與申請服務。',
              '我们是悉尼精品移民律师事务所，专注于澳洲移民法律服务，提供专业、高效、个性化的移民咨询与申请服务。',
              lang
            )}
          </p>
          <div className="hero-awards">
            <div className="award-row">
              <div className="award-circle gold">2024<br/>Best<br/>Firm</div>
              <div className="award-circle gold">Top<br/>Rated<br/>2024</div>
              <div className="award-circle">Excellence<br/>Award</div>
            </div>
          </div>
          <Link href="/contact" className="btn-enquire">
            {t('免費諮詢', '免费咨询', lang)}
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">{t('我們的服務', '我们的服务', lang)}</h2>
          <div className="service-cols">
            <div className="service-col">
              {services.slice(0, 4).map(s => (
                <Link href="/services" className="service-link" key={s}>
                  <span>{s}</span>
                  <span className="arrow">›</span>
                </Link>
              ))}
            </div>
            <div className="service-col">
              {services.slice(4).map(s => (
                <Link href="/services" className="service-link" key={s}>
                  <span>{s}</span>
                  <span className="arrow">›</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appeals */}
      <section className="section alt">
        <div className="wrap">
          <h2 className="section-title">{t('上訴 / 豁免', '上诉 / 豁免', lang)}</h2>
          <div className="appeal-grid">
            {appeals.map(a => (
              <Link href="/services" className="appeal-item" key={a}>
                <span>{a}</span>
                <span className="arr">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">{t('最新資訊', '最新资讯', lang)}</h2>
          <div className="news-grid">
            {newsCards.map((card, i) => (
              <div className="news-card" key={i}>
                <div className="news-img" />
                <div className="news-body">
                  <div className="news-cats">
                    <span className="news-cat">{t(card.tcCat, card.scCat, lang)}</span>
                  </div>
                  <h3>{t(card.tcTitle, card.scTitle, lang)}</h3>
                  <p className="news-date">{card.date}</p>
                  <p className="news-excerpt">{t(card.tcExcerpt, card.scExcerpt, lang)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="news-controls">
            <button className="nc-arrow">‹</button>
            <button className="nc-arrow">›</button>
            <Link href="/resources" className="btn-resources">
              {t('查看所有資源', '查看所有资源', lang)}
            </Link>
          </div>
        </div>
      </section>

      <PreFooter />
    </>
  )
}
