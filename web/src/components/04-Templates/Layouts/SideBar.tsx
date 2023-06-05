/**
 * Side bar.
 */
type SideBarProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Side bar.
 * @param id
 * @param className
 * @param children
 * @constructor
 */
export const SideBar: React.FC<SideBarProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <aside
      id={id}
      className={`fixed inset-0 z-20 hidden h-full w-72 flex-none lg:static lg:block lg:h-auto lg:w-48 lg:overflow-y-visible lg:pt-0 ${className}`}
    >
      <div
        id="navWrapper"
        className="scrolling-touch max-w-2xs top:24 z-20 h-full overflow-y-auto bg-white dark:bg-gray-900 lg:sticky lg:top-28 lg:mr-0 lg:block lg:h-[calc(100vh-3rem)]"
      >
        {children}
      </div>
    </aside>
  );
};

export default SideBar;
