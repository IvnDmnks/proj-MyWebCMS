import {
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
} from 'react-icons/fa6';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://www.facebook.com/ivndmnks',
      label: 'Facebook',
      icon: <FaSquareFacebook size={26} />,
    },
    {
      href: 'https://www.instagram.com/ivndmnks',
      label: 'Instagram',
      icon: <FaSquareInstagram size={26} />,
    },
    {
      href: 'https://github.com/IvnDmnks',
      label: 'GitHub',
      icon: <FaSquareGithub size={26} />,
    },
    {
      href: 'mailto:domonkosivan05@gmail.com',
      label: 'E-mail',
      icon: <FaSquareEnvelope size={26} />,
    },
  ];

  return (
    <footer className='text-textPrimary p-4 md:p-6 border-t border-gray-200 dark:border-gray-800 bg-bgPrimary'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-4'>

        <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:text-textSecondary text-base md:text-lg font-medium transition-colors p-1'
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <p className='text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center mt-1'>
          ©{year} Iván Domonkos
        </p>
      </div>
    </footer>
  );
}