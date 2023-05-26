/**
 * Renders the logo component with a link to the homepage.
 *
 * @function Logo
 * @returns {JSX.Element} The logo component.
 */
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <strong className={"text-black dark:text-white"}>SiteName</strong>
    </Link>
  );
};
