import React from "react";
import {
  PagesHierarchyListMenuProps
} from "@/components/03-Organisms/PagesHierarchy/types/listLinkType";
import NewIcon from "@/components/01-Atoms/NewIcon";

export const PagesHierarchyListMenu: React.FC<PagesHierarchyListMenuProps> = ({
  pages
}) => {
  return (
    <ul className="list-unstyled fw-normal small py-1">
      {pages.map((page, index) => (
        <li key={index}>
          <a
            href={page.href}
            data-sidebar-item=""
            className="relative flex flex-wrap items-center py-2 font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {page.title} {page.new && <NewIcon />}
          </a>
        </li>
      ))}
    </ul>
  );
};
