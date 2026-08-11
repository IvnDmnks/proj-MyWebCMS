'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import hu from '@/messages/hu.json';
import en from '@/messages/en.json';

const dictionaries = { hu, en };
export type Locale = 'hu' | 'en';

interface LanguageContextType {
  lang: Locale;
  setLang: (lang: Locale) => void;
  toggleLang: () => void;
  t: typeof hu;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>('hu');

  const toggleLang = () => {
    setLang((prev) => (prev === 'hu' ? 'en' : 'hu'));
  };

  const t = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}