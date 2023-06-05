import Link from 'next/link';

interface FooterProps {
  // Define any required props
}

/**
 * Footer.
 * @constructor
 */
const Footer = () => {
  return (
    <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-300 sm:text-center">
          © 2023 All Rights Reserved.
        </span>
        <nav>
          <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/" className="mr-4 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="mr-4 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="mr-4 hover:underline">
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
