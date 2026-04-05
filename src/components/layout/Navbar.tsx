'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Menu, X, Scale } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-800/95 backdrop-blur-sm shadow-lg">
      <Disclosure as="nav" className="container-narrow section-padding py-0">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-navy-900" />
                </div>
                <div className="leading-tight">
                  <span className="block text-white font-serif font-bold text-sm md:text-base leading-none">
                    Miao Immigration
                  </span>
                  <span className="block text-gold-400 text-xs font-sans font-medium tracking-wide">
                    &amp; Refugee Lawyers
                  </span>
                </div>
              </Link>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={clsx(
                      'text-sm font-medium transition-colors pb-0.5',
                      pathname === href
                        ? 'text-gold-400 border-b-2 border-gold-400'
                        : 'text-navy-100 hover:text-gold-400'
                    )}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="ml-2 px-4 py-2 bg-gold-400 text-navy-900 rounded-md text-sm font-semibold hover:bg-gold-300 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Mobile hamburger */}
              <DisclosureButton className="md:hidden p-2 rounded-md text-navy-200 hover:text-white hover:bg-navy-700 transition-colors">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </DisclosureButton>
            </div>

            {/* Mobile menu */}
            <DisclosurePanel className="md:hidden border-t border-navy-700 pb-4 pt-2">
              <div className="flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <DisclosureButton
                    key={href}
                    as={Link}
                    href={href}
                    className={clsx(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname === href
                        ? 'text-gold-400 bg-navy-700'
                        : 'text-navy-100 hover:text-gold-400 hover:bg-navy-700'
                    )}
                  >
                    {label}
                  </DisclosureButton>
                ))}
                <DisclosureButton
                  as={Link}
                  href="/contact"
                  className="mt-2 mx-3 px-4 py-2 bg-gold-400 text-navy-900 rounded-md text-sm font-semibold text-center hover:bg-gold-300 transition-colors"
                >
                  Book Consultation
                </DisclosureButton>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  )
}
