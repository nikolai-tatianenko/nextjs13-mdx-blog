import Link from "next/link";
import React from "react";

export type LogoProps = {
  sitename?: string;
}

/**
 * Renders the logo component with a link to the homepage.
 *
 * @function Logo
 * @returns {JSX.Element} The logo component.
 */
export const Logo: React.FC<LogoProps> = ({ sitename = "Site Name" }) => {
  return (
    <Link href="/">
      <strong className="text-black dark:text-white">{sitename}</strong>
    </Link>
  );
};

export default Logo;
