import { FaSquareEnvelope, FaSquareFacebook, FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6';

import { Table, TableBody, TableCaption, TableCell, TableRow } from './ui/table';

export default function Footer() {
  return (
    <footer className='text-textPrimary p-4 border-t border-gray-300 '>
      <Table className='mx-auto text-center justify-center items-center space-x-3 grid'>
        <TableBody>
          <TableRow>
            <TableCell>
              <FaSquareFacebook size={30} />
            </TableCell>
            <TableCell className='text-lg hover:text-textSecondary pl-0'>
              <a href='https://www.facebook.com/ivndmnks' target='_balnk' className='pr-6'>
                Facebook
              </a>
            </TableCell>
            <TableCell>
              <FaSquareInstagram size={30} />
            </TableCell>
            <TableCell
              className='text-lg hover:text-textSecondary
            pl-0'
            >
              <a href='https://www.instagram.com/ivndmnks' target='_balnk' className='pr-6'>
                Instagram
              </a>
            </TableCell>
            <TableCell>
              <FaSquareGithub size={30} />
            </TableCell>
            <TableCell className='text-lg hover:text-textSecondary pl-0'>
              <a href='https://github.com/IvnDmnks' target='_balnk' className='pr-6'>
                GitHub
              </a>
            </TableCell>
            <TableCell>
              <FaSquareEnvelope size={30} />
            </TableCell>
            <TableCell className='text-lg hover:text-textSecondary pl-0'>
              <a href='mailto:domonkosivan05@gmail.com' target='_balnk' className='pr-6'>
                E-mail
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableCaption>© 2025 Iván Domonkos</TableCaption>
      </Table>
    </footer>
  );
}