"use client";

/**
 * @file Menu component
 * @module Menu
 * @description Renders a navigation menu with menu items
 */

import {
  menuItemsDefault
} from "@/components/01-Atoms/UI/Menu/MenuItemsDefault";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

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
 * Renders the logo component with a link to the homepage.
 *
 * @function Logo
 * @returns {JSX.Element} The logo component.
 */

const Logo = () => {
  return (
    <Link href={"/"}>
      <strong className={"text-black dark:text-white"}>SiteName</strong>
    </Link>
  );
};

const defaultClassNames = {
  wrapper: "flex flex-col items-center justify-center w-full h-full",
  "menu-nav": "flex flex-col items-center justify-center w-full h-full",
  "menu-item": "block py-2 text-center text-gray-700 dark:text-gray-200",
  "menu-link": "block py-2 text-center text-gray-700 dark:text-gray-200"
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
  classNames = defaultClassNames
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
    "block py-3 pl-2 pr-3 text-gray-900 rounded  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:underline-offset-1 dark:hover:text-white md:dark:hover:bg-transparent";

  console.log({ isMenuOpen });

  return (
    <nav className={"border-gray-200 bg-white dark:bg-gray-700"}>
      <div
        className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
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
          <span className={"text-xl"}>{isMenuOpen ? "x" : "≡"}</span>
        </button>
        <div
          className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="mt-3 flex flex-col rounded-lg p-3 font-medium md:flex-row md:p-1">
            {menuItems.map((item, index) => (
              <li key={index} className={"p-3"}>
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
