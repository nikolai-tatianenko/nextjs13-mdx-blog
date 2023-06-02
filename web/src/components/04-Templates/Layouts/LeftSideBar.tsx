import React from "react";
import SideBar from "./SideBar";
import {
  PagesHierarchyListGroup
} from "@/components/03-Organisms/PagesHierarchy";

type LeftSideBarProps = {
  children?: React.ReactNode;
};

export const LeftSideBar: React.FC<LeftSideBarProps> = ({ children }) => {
  return (
    <SideBar id="left_sidebar" className="">
      <PagesHierarchyListGroup />
      {children}
    </SideBar>
  );
};

export default LeftSideBar;
