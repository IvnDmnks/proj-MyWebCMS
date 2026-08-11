'use client';

import { useLanguage } from '@/components/language-provider';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className='container mx-auto px-4 py-6 md:py-10 max-w-4xl'>
      {/* --- UNDER CONSTRUCTION INFO BLOCK --- */}
      <div className='mb-6 md:mb-8 p-4 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-lg text-amber-900 dark:text-amber-200 shadow-sm'>
        <div className='flex items-center gap-2 font-bold text-base md:text-lg'>
          <span>🚧</span>
          <span>{t.homepage.notice.title}</span>
        </div>
        <p className='mt-1 text-sm md:text-base opacity-90'>
          {t.homepage.notice.description}
        </p>
      </div>
      {/* ------------------------------------- */}

      {/* Főcím: telefonon kisebb, gépen nagyobb */}
      <h1 className='text-3xl md:text-5xl p-4 md:p-6 mb-6 font-extrabold text-center border border-bgSecondary rounded-xl bg-bgSecondary shadow-sm leading-tight'>
        {t.homepage.title}
      </h1>

      {/* Alcím */}
      <p className='text-lg md:text-2xl px-2 md:px-4 mb-8 md:mb-12 text-center text-textPrimary opacity-90 font-medium'>
        {t.homepage.h2_title}
      </p>

      {/* Rólam szekció (Kártya stílusban, hogy jobban elkülönüljön) */}
      <div className='p-6 md:p-8 rounded-xl shadow-sm border border-bgSecondary bg-card'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
          {t.homepage.about.title}
        </h2>
        
        <p className='mb-4 text-base md:text-lg leading-relaxed'>
          {t.homepage.about.description}
        </p>
        
        <p className='text-base md:text-lg leading-relaxed'>
          {t.homepage.about.weather_cta}{' '}
          <a
            href={t.homepage.about.weather_url}
            className='inline-block mt-2 md:mt-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium break-words'
          >
            {t.homepage.about.weather_url}
          </a>
        </p>
      </div>
    </div>
  );
}