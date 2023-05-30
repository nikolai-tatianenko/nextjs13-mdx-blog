export type ListLinkType = {
  href: string;
  title: string;
  new?: boolean;
};

export type PagesHierarchyListMenuProps = {
  pages: ListLinkType[];
};

export type PageHierarchySectionProps = {
  name?: string;
  pages: ListLinkType[];
};

export type PagesHierarchyListGroupProps = {
  sectionList?: PageHierarchySectionProps[];
};
