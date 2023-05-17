'use client';

/**
 * @file Menu component
 * @module Menu
 * @description Renders a navigation menu with menu items
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

/**
 * Represents a menu item with a path and label.
 *
 * @interface MenuItem
 * @property {string} path - The path of the menu item.
 * @property {string} label - The label of the menu item.
 */

interface MenuItem {
  path: string;
  label: string;
}

// @todo move to configs.
const menuItemsDefault = [
  { path: '/', label: 'Home' },
  { path: '/page1', label: 'Page1' },
  { path: '/page2', label: 'Page2' },
];

/**
 * Renders the logo component with a link to the homepage.
 *
 * @function Logo
 * @returns {JSX.Element} The logo component.
 */

const Logo = () => {
  return (
    <Link href={'/'}>
      <strong className={'text-black dark:text-white'}>SiteName</strong>
    </Link>
  );
};

/**
 * Renders a navigation menu with menu items.
 *
 * @component Menu
 * @param {Object} props - The component props.
 * @param {MenuItem[]} props.menuItems - The menu items to render.
 * @returns {JSX.Element} The menu component.
 */

const Menu: React.FC = ({
  menuItems = menuItemsDefault,
}: {
  menuItems?: MenuItem[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  /**
   * Opens the menu.
   *
   * @function openMenu
   */

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  /**
   * Closes the menu.
   *
   * @function closeMenu
   */

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const listItemClass =
    'block py-3 pl-2 pr-3 text-gray-900 rounded  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:underline-offset-1 dark:hover:text-white md:dark:hover:bg-transparent';

  console.log({ isMenuOpen });

  return (
    <nav className={'bg-white border-gray-200 dark:bg-gray-700'}>
      <div className="flex flex-wrap items-center max-w-screen-xl justify-between mx-auto p-4">
        <Logo />
        <button
          aria-controls="navbar-default"
          aria-expanded="false"
          className="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={isMenuOpen ? closeMenu : openMenu}
        >
          <span className="sr-only">Open main menu</span>
          <span className={'text-xl'}>{isMenuOpen ? 'x' : '≡'}</span>
        </button>
        <div
          className={`${isMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-3 md:p-1 mt-3 rounded-lg md:flex-row">
            {menuItems.map((item, index) => (
              <li key={index} className={'p-3'}>
                <Link
                  className={
                    item.path === pathname
                      ? `${listItemClass} underline` // Add 'underline' class for the active menu item
                      : listItemClass
                  }
                  aria-current="page"
                  href={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
