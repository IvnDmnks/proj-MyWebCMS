import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

export default function Navbar() {
  return (
    <nav className=' text-primary-text-color p-4 sticky top-0 border-b border-gray-300 bg-primary-color'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <Avatar>
            <AvatarImage src='/IvanDomonkosProfilkep.png' />
            <AvatarFallback>ID</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger className='text-2xl font-bold hover:text-secondary-text-color focus:outline-none focus:ring-0'>
              Iván Domonkos
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {
                //? What should be here?
              }
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ul className='flex space-x-4'>
          <li>
            <a href='/homepage' className='hover:text-secondary-text-color text-lg text-primary-text-color '>
              Hi! My name is...
            </a>
          </li>
          <li>
            <a href='/projects' className='hover:text-secondary-text-color text-lg text-primary-text-color'>
              Projects
            </a>
          </li>
          <li>
            <a href='/roadmap' className='hover:text-secondary-text-color text-lg text-primary-text-color'>
              Roadmap
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}