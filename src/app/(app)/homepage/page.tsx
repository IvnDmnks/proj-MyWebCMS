'use client';

import { useLanguage } from '@/components/language-provider';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className='container mx-auto'>
      <div className='m-4 p-4 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-lg text-amber-900 dark:text-amber-200'>
        <div className='flex items-center gap-2 font-bold text-lg'>
          <span>🚧</span>
          <span>{t.homepage.notice.title}</span>
        </div>
        <p className='mt-1 text-sm opacity-90'>
          {t.homepage.notice.description}
        </p>
      </div>
      <h1 className='text-4xl p-4 m-4 font-bold text-center border border-bgSecondary rounded-lg bg-bgSecondary'>
        {t.homepage.title}
      </h1>

      <p className='text-2xl p-4 m-4 text-center text-textPrimary'>
        {t.homepage.h2_title}
      </p>

      <div className='p-4 m-4'>
        <h2 className='text-xl font-bold mb-2'>{t.homepage.about.title}</h2>
        <p className='mb-2'>{t.homepage.about.description}</p>
        <p>
          {t.homepage.about.weather_cta}{' '}
          <a
            href={t.homepage.about.weather_url}
            className='hover:text-textSecondary underline font-medium'
          >
            {t.homepage.about.weather_url}
          </a>
        </p>
      </div>
    </div>
  );
}
  //TODO: Responsive design for ALL pages
  //! Need good ideas