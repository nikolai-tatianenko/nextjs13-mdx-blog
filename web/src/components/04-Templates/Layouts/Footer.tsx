import { Menu } from '@/components';
import { MenuItems } from '@/components/01-Atoms/UI/Menu/types';

interface FooterProps {
  // Define any required props
}
const menuItems: MenuItems[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/post', label: 'Posts' },
  { path: '/tags', label: 'Tags' },
  { path: '/contact', label: 'Contact' },
];
/**
 * Footer.
 * @constructor
 */
export const Footer = () => {
  const footerMenuClasses = {
    menuNav:
      'mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0',
    menuItem: 'mr-4 hover:underline',
    menuLink: {
      active: `underline`,
      default: '',
    },
  };

  return (
    <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-300 sm:text-center">
          © 2023 All Rights Reserved.
        </span>
        <nav>
          <Menu menuItems={menuItems} classNames={footerMenuClasses} />
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
