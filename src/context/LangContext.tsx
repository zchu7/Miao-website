'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'tc' | 'sc'
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'tc', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('tc')
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

export function t(tc: string, sc: string, lang: Lang) {
  return lang === 'tc' ? tc : sc
}
