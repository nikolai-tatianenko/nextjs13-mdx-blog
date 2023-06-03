import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItems } from './types';

const defaultClassNames = {
  wrapper: `w-full md:block md:w-auto`,
  menuNav: 'mt-3 flex flex-col rounded-lg p-3 font-medium md:flex-row md:p-1',
  menuItem: 'p-2',
  menuLink: {
    active: `underline`,
    default: '',
  },
};
/**
 * Renders a navigation menu with menu items.
 *
 * @param menuItems
 * @param className
 * @constructor
 */
export const Menu = ({
  menuItems,
  classNames = defaultClassNames,
}: {
  menuItems: MenuItems;
  classNames: any;
}) => {
  const pathname = usePathname();
  return (
    <div className={classNames.wrapper}>
      <ul className={classNames.menuNav}>
        {menuItems.map((item, index) => (
          <li key={index} className={classNames.menuItem}>
            <Link
              className={
                item.path === pathname
                  ? classNames.menuLink.active
                  : classNames.menuLink.default
              }
              aria-current="page"
              href={item.path}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
