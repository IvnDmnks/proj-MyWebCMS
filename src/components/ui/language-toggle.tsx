'use client';

import { useLanguage } from '@/components/language-provider';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="flex justify-between items-center p-4">
      <button
        onClick={toggleLang}
        className="px-3 py-1 text-sm font-semibold border border-bgSecondary rounded-lg hover:bg-bgSecondary transition-colors"
      >
        {lang === 'hu' ? '🇬🇧 EN' : '🇭🇺 HU'}
      </button>
    </nav>
  );
}