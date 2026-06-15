'use client'
import { useState } from 'react'
import { useLang, t } from '@/context/LangContext'
import PreFooter from '@/components/layout/PreFooter'

const accordionItems = [
  {
    tcTitle: '我們的價值觀',
    scTitle: '我们的价值观',
    tcContent: (
      <>
        <h3>誠信</h3>
        <p>我們以誠信為本，在每一個案件中都堅持最高的職業道德標準，確保客戶的利益始終放在首位。</p>
        <h3>創新</h3>
        <p>我們不斷探索創新的法律解決方案，運用最新的法律知識和技術，為客戶提供最有效的服務。</p>
      </>
    ),
    scContent: (
      <>
        <h3>诚信</h3>
        <p>我们以诚信为本，在每一个案件中都坚持最高的职业道德标准，确保客户的利益始终放在首位。</p>
        <h3>创新</h3>
        <p>我们不断探索创新的法律解决方案，运用最新的法律知识和技术，为客户提供最有效的服务。</p>
      </>
    ),
  },
  {
    tcTitle: '我們的使命',
    scTitle: '我们的使命',
    tcContent: (
      <p>我們的使命是讓每一位客戶都能輕鬆應對複雜的澳洲移民程序，以專業知識和個人化服務助力客戶實現移民夢想。</p>
    ),
    scContent: (
      <p>我们的使命是让每一位客户都能轻松应对复杂的澳洲移民程序，以专业知识和个性化服务助力客户实现移民梦想。</p>
    ),
  },
  {
    tcTitle: '我們的律師',
    scTitle: '我们的律师',
    tcContent: (
      <>
        <h3>Albert Liu</h3>
        <p>Albert 擁有超過十年的移民法律經驗，專注於技術移民及商務移民領域，曾成功處理數百個複雜案件。</p>
        <h3>Arthur Mao</h3>
        <p>Arthur 是澳洲註冊移民代理，精通各類家庭移民及人道主義簽證申請，以細緻周到的服務深受客戶信賴。</p>
      </>
    ),
    scContent: (
      <>
        <h3>Albert Liu</h3>
        <p>Albert 拥有超过十年的移民法律经验，专注于技术移民及商务移民领域，曾成功处理数百个复杂案件。</p>
        <h3>Arthur Mao</h3>
        <p>Arthur 是澳洲注册移民代理，精通各类家庭移民及人道主义签证申请，以细致周到的服务深受客户信赖。</p>
      </>
    ),
  },
]

function Accordion({ lang }: { lang: 'tc' | 'sc' }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="acc-wrap">
      {accordionItems.map((item, i) => (
        <div className="acc-item" key={i}>
          <button
            className={`acc-btn${open === i ? ' open' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {t(item.tcTitle, item.scTitle, lang)}
            <span className="acc-chevron">▾</span>
          </button>
          <div className={`acc-body${open === i ? ' open' : ''}`}>
            {lang === 'tc' ? item.tcContent : item.scContent}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  const { lang } = useLang()
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-card">
            <p className="page-hero-eyebrow">Albert Arthur Lawyers</p>
            <h1>{t('關於我們', '关于我们', lang)}</h1>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className="wrap">
          <p className="about-text">
            {t(
              'Albert Arthur Lawyers 是一家位於悉尼的精品移民律師事務所，由經驗豐富的移民律師和註冊移民代理共同創立。我們深耕澳洲移民法律領域多年，致力於為每一位客戶提供專業、高效、個人化的移民法律服務。',
              'Albert Arthur Lawyers 是一家位于悉尼的精品移民律师事务所，由经验丰富的移民律师和注册移民代理共同创立。我们深耕澳洲移民法律领域多年，致力于为每一位客户提供专业、高效、个性化的移民法律服务。',
              lang
            )}
          </p>
          <p className="about-text">
            {t(
              '無論您是尋求技術移民、家庭移民、商務移民，還是面對移民上訴的挑戰，我們的專業團隊都將竭誠為您服務，助您順利實現在澳洲的移民夢想。',
              '无论您是寻求技术移民、家庭移民、商务移民，还是面对移民上诉的挑战，我们的专业团队都将竭诚为您服务，助您顺利实现在澳洲的移民梦想。',
              lang
            )}
          </p>
          <Accordion lang={lang} />
        </div>
      </section>
      <PreFooter />
    </>
  )
}
