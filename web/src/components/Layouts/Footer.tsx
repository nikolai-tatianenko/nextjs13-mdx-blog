import React from 'react';
import Link from 'next/link';

interface FooterProps {
  // Define any required props
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer bg-gray-100 text-gray-900 p-6 mt-auto ">
      <div
        className={
          'flex flex-wrap items-center max-w-screen-xl justify-between mx-auto p-4'
        }
      >
        <div className="p-3">Copyright</div>
        <nav>
          <ul className="flex flex-wrap justify-center">
            <li className="p-3">
              <Link
                href="#"
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                Link1
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="#"
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                Link2
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
