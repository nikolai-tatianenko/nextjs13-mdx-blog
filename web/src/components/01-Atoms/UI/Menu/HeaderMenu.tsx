'use client';

/**
 * @file HeaderMenu component
 * @module Menu
 * @description Renders a navigation menu with menu items
 */
import { Logo } from '@/components/01-Atoms/UI/Logo/Logo';
import { Menu } from '@/components/01-Atoms/UI/Menu/Menu';
import { menuItemsDefault } from '@/components/01-Atoms/UI/Menu/MenuItemsDefault';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

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

/**
 * Renders a navigation menu with menu items.
 *
 * @component HeaderMenu
 * @param {Object} props - The component props.
 * @param {MenuItem[]} props.menuItems - The menu items to render.
 * @returns {JSX.Element} The menu component.
 */

const HeaderMenu: React.FC = ({
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

  const classNames = {
    wrapper: `${isMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`,
    menuNav: 'mt-3 flex flex-col rounded-lg p-3 font-medium md:flex-row md:p-1',
    menuItem: 'p-2',
    menuLink: {
      active: `${listItemClass} underline`,
      default: listItemClass,
    },
  };

  return (
    <>
      <nav className={'border-gray-200 bg-white dark:bg-gray-700'}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Logo />
          <button
            aria-controls="navbar-default"
            aria-expanded="false"
            className="ml-3 inline-flex items-center rounded p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <span className="sr-only">Open main menu</span>
            <span className={'text-xl'}>{isMenuOpen ? 'x' : '≡'}</span>
          </button>
          <Menu menuItems={menuItems} classNames={classNames} />
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  );
};

export default HeaderMenu;
