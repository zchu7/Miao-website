import Link from 'next/link'
import { Scale, Phone, Mail, MapPin, Clock } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
]

const practiceLinks = [
  { href: '/practice-areas', label: 'Refugee Claims' },
  { href: '/practice-areas', label: 'Family Sponsorship' },
  { href: '/practice-areas', label: 'Permanent Residency' },
  { href: '/practice-areas', label: 'Work Permits' },
  { href: '/practice-areas', label: 'Study Permits' },
  { href: '/practice-areas', label: 'Appeals & Hearings' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="container-narrow section-padding pb-0 border-b border-navy-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-navy-900" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-serif font-bold text-sm leading-none">
                  Miao Immigration
                </span>
                <span className="block text-gold-400 text-xs font-sans font-medium tracking-wide">
                  &amp; Refugee Lawyers
                </span>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed mb-4">
              Compassionate, experienced immigration and refugee legal services.
              We stand by our clients every step of the way.
            </p>
            <p className="text-xs text-navy-500 leading-relaxed">
              The information on this website is for general informational
              purposes only and does not constitute legal advice.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {practiceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+16041234567"
                  className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                >
                  +1 (604) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@miaolawyers.ca"
                  className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                >
                  info@miaolawyers.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-navy-300">
                  1200 West 73rd Avenue, Suite 500<br />
                  Vancouver, BC V6P 6G5
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-navy-300">
                  Mon–Fri: 9:00 AM – 5:30 PM<br />
                  Sat: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-narrow px-4 md:px-8 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-navy-500">
          <p>
            &copy; {new Date().getFullYear()} Miao Immigration and Refugee Lawyers. All rights reserved.
          </p>
          <p>
            Contacting us does not create a lawyer-client relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
