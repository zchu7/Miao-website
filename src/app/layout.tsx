import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Miao Immigration and Refugee Lawyers',
    template: '%s | Miao Immigration Lawyers',
  },
  description:
    'Expert immigration and refugee legal services in Canada. Compassionate, experienced lawyers helping clients with refugee claims, family sponsorship, work permits, study permits, and more.',
  keywords: [
    'immigration lawyer',
    'refugee lawyer',
    'Canada immigration',
    'family sponsorship',
    'work permit',
    'study permit',
    'Express Entry',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-navy-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
