// Define the default section list
import { PageHierarchySectionProps } from '@/components/03-Organisms/PagesHierarchy/types/listLinkType';

export const defaultSectionList: PageHierarchySectionProps[] = [
  {
    name: 'Base Pages',
    pages: [
      { href: '/page1', title: 'Page1' },
      { href: '/page2', title: 'Page2', new: true },
      { href: '/page3', title: 'Page3' },
    ],
  },
  {
    name: 'Second Group',
    pages: [
      { href: '/page4', title: 'Page4' },
      { href: '/page5', title: 'Page5' },
      { href: '/page6', title: 'Page6', new: true },
      { href: '/page7', title: 'Page7' },
    ],
  },
];

export default defaultSectionList;
