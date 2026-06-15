'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLang, t } from '@/context/LangContext'

export default function Header() {
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/services', tc: '我們的服務', sc: '我们的服务' },
    { href: '/resources', tc: '資源', sc: '资源' },
    { href: '/about', tc: '關於我們', sc: '关于我们' },
    { href: '/contact', tc: '聯繫我們', sc: '联系我们' },
  ]

  return (
    <>
      <div className="topbar">
        <span className="topbar-left"></span>
        <div className="lang-toggle">
          <button
            className={`lang-btn${lang === 'tc' ? ' active' : ''}`}
            onClick={() => setLang('tc')}
          >
            繁體
          </button>
          <button
            className={`lang-btn${lang === 'sc' ? ' active' : ''}`}
            onClick={() => setLang('sc')}
          >
            简体
          </button>
        </div>
      </div>
      <header>
        <div className="header-inner">
          <Link href="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 38 38" fill="none">
              <polygon points="19,2 36,34 2,34" fill="#0d1b4b"/>
              <text x="19" y="28" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">AA</text>
            </svg>
            <div className="logo-text">
              <span className="name">Albert Arthur Lawyers</span>
              <span className="sub">{t('移民律師 · 移民代理', '移民律师 · 移民代理', lang)}</span>
            </div>
          </Link>

          <nav className={menuOpen ? 'open' : ''}>
            {navLinks.map(link => (
              <div className="nav-item" key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-btn nav-underline${pathname === link.href ? ' active-page' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.tc, link.sc, lang)}
                </Link>
              </div>
            ))}
          </nav>

          <Link href="/book" className="btn-consult">
            {t('預約咨詢', '预约咨询', lang)}
          </Link>

          <button
            className="mob-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  )
}
