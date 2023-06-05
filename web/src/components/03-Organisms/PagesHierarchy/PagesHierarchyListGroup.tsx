import React from 'react';
import { PagesHierarchyList } from './components';
import { defaultSectionList } from './data/defaultSectionListItems';
import { PagesHierarchyListGroupProps } from './types/listLinkType';

export const PagesHierarchyListGroup: React.FC<
  PagesHierarchyListGroupProps
> = ({ sectionList = defaultSectionList }) => {
  return (
    <nav
      id="nav"
      className="sticky?lg:h-(screen-18) px-1 pb-10 pl-3 pt-16 text-base font-normal lg:pb-20 lg:pl-0 lg:pt-2 lg:text-sm"
      aria-label="Docs navigation"
    >
      <ul className="list-unstyled mb-0">
        {sectionList.map((sectionProps, index) => (
          <li key={index} className="mt-8">
            <PagesHierarchyList sectionProps={sectionProps} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
