'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react'; // yarn add lucide-react (ha még nincs telepítve)

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  // Meghatározzuk az aktuális nyelvet az URL első szegmenséből (pl. /hu/... vagy /en/...)
  const currentLang = pathname.startsWith('/en') ? 'en' : 'hu';

  const toggleLanguage = () => {
    const newLang = currentLang === 'hu' ? 'en' : 'hu';

    // kicseréljük az URL elején a nyelvi kódot
    let newPathname = pathname;
    if (pathname.startsWith('/hu') || pathname.startsWith('/en')) {
      newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    } else {
      newPathname = `/${newLang}${pathname}`;
    }

    router.push(newPathname);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-label="Nyelv váltása"
    >
      <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <span className="uppercase font-semibold">{currentLang}</span>
    </button>
  );
}