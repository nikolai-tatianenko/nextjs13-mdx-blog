import Menu from "@/components/UI/Menu/Menu";
import React from "react";

export const Header = ()=> {
  return (<header
    className="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
    <Menu />
  </header>)

}
export default Header;
