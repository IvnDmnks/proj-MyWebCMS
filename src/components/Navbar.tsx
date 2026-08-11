import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import LanguageToggle from '@/components/ui/language-toggle';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='text-textPrimary p-4 sticky top-0 border-b border-gray-300 dark:border-gray-800 bg-bgPrimary backdrop-blur-md z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage src='/IvanDomonkosProfilkep.png' alt='Iván Domonkos'/>
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
          <Link 
            href='/homepage' 
            className='text-2xl font-bold focus:outline-none focus:ring-0 hover:text-textSecondary'
          >
            Iván Domonkos
          </Link>
        </div>
        <ul className='flex items-center space-x-6'>
          <li>
            <Link href='/homepage' className='hover:text-textSecondary text-lg text-textPrimary transition-colors'>
              Hi! My name is...
            </Link>
          </li>
          <li>
            <Link href='/ownprojects' className='hover:text-textSecondary text-lg text-textPrimary transition-colors'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/roadmap' className='hover:text-textSecondary text-lg text-textPrimary transition-colors'>
              Roadmap
            </Link>
          </li>
          <li>
            <Link href='/tictactoe' className='hover:text-textSecondary text-lg text-textPrimary transition-colors'>
              TicTacToe
            </Link>
          </li>
          <li>
            <Link href='/webshop' className='hover:text-textSecondary text-lg text-textPrimary transition-colors'>
              WebShop
            </Link>
          </li>
          <li className='flex items-center pl-2'>
            <ThemeToggle />
          </li>
          <li className='flex items-center pl-2'>
            <LanguageToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}