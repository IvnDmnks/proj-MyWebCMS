'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import LanguageToggle from '@/components/ui/language-toggle';
import { useLanguage } from '@/components/language-provider';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: '/homepage', label: t.navbar.greetings },
    { href: '/ownprojects', label: t.navbar.proj },
    { href: '/roadmap', label: t.navbar.roadmap },
    { href: '/tictactoe', label: t.navbar.tictactoe },
    { href: '/webshop', label: t.navbar.webshop },
  ];

  return (
    <nav className='text-textPrimary p-4 sticky top-0 border-b border-gray-200 dark:border-gray-800 bg-bgPrimary/90 backdrop-blur-md z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Profil & Név */}
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage src='/IvanDomonkosProfilkep.png' alt='Iván Domonkos' />
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
          <Link
            href='/homepage'
            className='text-xl md:text-2xl font-bold hover:text-textSecondary transition-colors whitespace-nowrap'
          >
            Iván Domonkos
          </Link>
        </div>

        <ul className='hidden xl:flex items-center space-x-6'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='hover:text-textSecondary text-base text-textPrimary transition-colors font-medium whitespace-nowrap'
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className='flex items-center pl-2'>
            <ThemeToggle />
          </li>
          <li className='flex items-center pl-2'>
            <LanguageToggle />
          </li>
        </ul>

        <div className='flex items-center gap-2 xl:hidden'>
          <ThemeToggle />
          <LanguageToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 rounded-lg hover:bg-bgSecondary focus:outline-none border border-gray-200 dark:border-gray-800'
            aria-label='Toggle Menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className='xl:hidden flex flex-col space-y-2 pt-4 pb-2 px-2 border-t border-gray-200 dark:border-gray-800 mt-3'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='block py-2 px-3 rounded-lg hover:bg-bgSecondary text-textPrimary font-medium transition-colors'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}