'use client';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { useHeadings, useScrollspy } from './hooks';

type TableOfContentsItemProps = {
  id: string;
  level: number;
  title: string;
  isActive: boolean;
};

/**
 * Table of Contents Item component.
 *
 * @param {TableOfContentsItemProps} props - Component properties.
 * @returns {JSX.Element} - Rendered component.
 */
const TableOfContentsItem: React.FC<TableOfContentsItemProps> = React.memo(
  ({ id, level, title, isActive }) => {

    const headerClassname =
      'block border-b-2 p-2 m-2 w-full text-md mb-3 w-[50%] text-center';
    const focusItemClass = 'font-bold text-gray-900 border-l-gray-900';

    const hoverItemClass = focusItemClass
      .split(' ')
      .map((val) => `hover:${val}`)
      .join(' ');

    const activeItemClass = focusItemClass
      .split(' ')
      .map((val) => `active:${val}`)
      .join(' ');

    const linkClassNames = cx(
      `level-${level}`,
      'block border-l-2 border-accent-2 p-2 text-sm transition-all duration-500 focus:outline-none focus:ring hover:bg-gray-200',
      hoverItemClass,
      activeItemClass,
      {
        [`${focusItemClass}`]: isActive,
        'active-toc-item': isActive,
      }
    );

    const paddingSize = 8;
    const paddingLeft = (level - 1) * paddingSize;

    if (level === 1) {
      return (
        <a href={`#${id}`} className={headerClassname} style={{ paddingLeft }}>
          {title}
        </a>
      );
    }

    return (
      <a href={`#${id}`} className={linkClassNames} style={{ paddingLeft }}>
        {title}
      </a>
    );
  }
);

/**
 * Table of Contents component.
 *
 * @returns {JSX.Element} - Rendered component.
 */
const TableOfContents: React.FC = () => {
  const headings = useHeadings('article :is(h2, h3, h4, h5, h6)');

  const [activeId, setActiveId] = useState<string | undefined>(headings[0]?.id);
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setActiveId(headings[0]?.id);
  }, [headings]);

  useScrollspy(
    headings.map((heading) => heading.id),
    (newActiveId) => {
      setActiveId(newActiveId);
    }
  );

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsible(window.innerWidth < 1024);
    };

    handleResize(); // Check initial screen width

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  if (!isCollapsible) {
    return (
      <div>
        <div className="mb-4 flex items-center gap-4">
          <div>Table of contents</div>
        </div>
        <div>
          {headings.map((heading) => (
            <TableOfContentsItem
              key={heading.id}
              id={heading.id}
              level={heading.level}
              title={heading.title}
              isActive={heading.id === activeId}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 w-full bg-white opacity-60 lg:hidden">
      <div
        className="mb-4 flex cursor-pointer items-center gap-4"
        onClick={toggleCollapse}
      >
        <div>Table of contents</div>
      </div>
      {!isCollapsed && (
        <div>
          {headings.map((heading) => (
            <TableOfContentsItem
              key={heading.id}
              id={heading.id}
              level={heading.level}
              title={heading.title}
              isActive={heading.id === activeId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TableOfContents;
