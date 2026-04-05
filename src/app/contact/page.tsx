import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Contact Miao Immigration and Refugee Lawyers. Book a free consultation with our experienced immigration lawyers in Vancouver, BC.',
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (604) 123-4567',
    href: 'tel:+16041234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@miaolawyers.ca',
    href: 'mailto:info@miaolawyers.ca',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '1200 West 73rd Avenue, Suite 500\nVancouver, BC V6P 6G5',
    href: null,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri: 9:00 AM – 5:30 PM\nSaturday: By Appointment',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow section-padding py-0">
          <div className="flex items-center gap-2 mb-4 text-sm text-navy-300">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">Contact</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Get in Touch
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Book a Consultation
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl leading-relaxed">
            Your first consultation is free. Tell us about your situation and one of
            our experienced lawyers will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8">
              <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-navy-800 rounded-2xl p-6 text-white">
                <h3 className="font-serif font-bold text-lg mb-5 text-white">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-navy-400 text-xs uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-navy-100 text-sm hover:text-gold-400 transition-colors whitespace-pre-line"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-navy-100 text-sm whitespace-pre-line">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-navy-200 rounded-2xl overflow-hidden h-52 flex items-center justify-center">
                <div className="text-center text-navy-500 p-4">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-navy-400" />
                  <p className="text-sm font-medium">1200 West 73rd Avenue</p>
                  <p className="text-xs">Vancouver, BC</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-white rounded-xl border border-navy-100 p-4">
                <p className="text-xs text-navy-400 leading-relaxed">
                  <strong className="text-navy-600">Please note:</strong> Contacting us
                  does not create a lawyer-client relationship. Do not send confidential
                  information until a retainer agreement has been signed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
