import React from "react";
import Link from "next/link";

interface FooterProps {
  // Define any required props
}

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div
        className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-600 sm:text-center dark:text-gray-300">© 2023 All Rights Reserved.
    </span>
        <nav>
          <ul
            className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                href="/"
                className="mr-4 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="mr-4 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="mr-4 hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
