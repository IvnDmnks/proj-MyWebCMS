import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <nav className='text-textPrimary p-4 sticky top-0 border-b border-gray-300 bg-bgPrimary'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage src='/IvanDomonkosProfilkep.png' alt='Iván Domonkos'/>
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
          <a className='text-2xl font-bold focus:outline-none focus:ring-0 hover:text-textSecondary' href='/homepage'>Iván Domonkos</a>
        </div>
        <ul className='flex space-x-4'>
          <li>
            <a href='/homepage' className='hover:text-textSecondary text-lg text-textPrimary'>
              Hi! My name is...
            </a>
          </li>
          <li>
            <a href='/projects' className='hover:text-textSecondary text-lg text-textPrimary'>
              Projects
            </a>
          </li>
          <li>
            <a href='/roadmap' className='hover:text-textSecondary text-lg text-textPrimary'>
              Roadmap
            </a>
          </li>
          <li>
            <a href='/tictactoe' className='hover:text-textSecondary text-lg text-textPrimary'>
              TicTacToe
            </a>
          </li>
          <li>
            <a href='/webshop' className='hover:text-textSecondary text-lg text-textPrimary'>
              WebShop
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}