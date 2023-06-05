import { PagesHierarchyListGroup } from '@/components/03-Organisms/PagesHierarchy';
import React from 'react';
import SideBar from './SideBar';

type LeftSideBarProps = {
  children?: React.ReactNode;
};
/**
 * Left side bar.
 *
 * @param children
 * @constructor
 */
export const LeftSideBar: React.FC<LeftSideBarProps> = ({ children }) => {
  return (
    <SideBar id="left_sidebar" className="">
      <PagesHierarchyListGroup />
      {children}
    </SideBar>
  );
};

export default LeftSideBar;
