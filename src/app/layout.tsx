import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/context/LangContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '移民律師及註冊移民代理 - Albert Arthur Lawyers',
  description: 'Albert Arthur Lawyers - Sydney boutique immigration law firm',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
