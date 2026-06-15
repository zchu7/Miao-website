'use client'
import { useLang, t } from '@/context/LangContext'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-contact-col">
          <h4>{t('聯繫我們', '联系我们', lang)}</h4>
          <a href="tel:+61272255253">+61 272 255 253</a>
          <a href="mailto:info@albertarthurlawyers.com">info@albertarthurlawyers.com</a>
          <p>Level 11, 60 Castlereagh Street,<br />Sydney NSW 2000</p>
          <div className="social-row">
            <button className="soc-btn" aria-label="LinkedIn">in</button>
            <button className="soc-btn" aria-label="WeChat">W</button>
          </div>
        </div>
        <div className="footer-right-col">
          <div className="footer-awards-row">
            <div className="footer-award">2024<br/>Best<br/>Firm</div>
            <div className="footer-award">Top<br/>Rated<br/>2024</div>
            <div className="footer-award">Excellence<br/>Award</div>
          </div>
          <p className="footer-acknowledge">
            We acknowledge the Traditional Custodians of the land on which we work and live, and recognise their continuing connection to land, water and community. We pay respect to Elders past, present and emerging, and extend that respect to all Aboriginal and Torres Strait Islander peoples.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Albert Arthur Lawyers</p>
        <div className="footer-bottom-links">
          <button>{t('隱私政策', '隐私政策', lang)}</button>
          <button>{t('使用條款', '使用条款', lang)}</button>
          <button>{t('免責聲明', '免责声明', lang)}</button>
        </div>
      </div>
    </footer>
  )
}
