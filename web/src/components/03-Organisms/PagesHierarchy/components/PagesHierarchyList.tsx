import React from "react";
import {
  PagesHierarchyListMenuProps
} from "@/components/03-Organisms/PagesHierarchy/types/listLinkType";
import { Heading } from "@/components/01-Atoms/UI";
import {
  PagesHierarchyListMenu
} from "@/components/03-Organisms/PagesHierarchy/components/PagesHierarchyListMenu";

export const PagesHierarchyList: React.FC<PagesHierarchyListMenuProps> = ({
  sectionProps
}) => {
  const { name, pages } = sectionProps;

  return (
    <>
      {name && (
        <Heading
          level={5}
          className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white lg:text-xs"
        >
          {name}
        </Heading>
      )}
      <PagesHierarchyListMenu pages={pages} />
    </>
  );
};
