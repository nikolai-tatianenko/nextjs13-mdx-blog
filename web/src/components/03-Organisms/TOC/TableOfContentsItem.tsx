import cx from 'classnames';
import React from 'react';

/**
 * Table of Contents Item properties.
 */
export type TableOfContentsItemProps = {
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
export const TableOfContentsItem: React.FC<TableOfContentsItemProps> =
  React.memo(({ id, level, title, isActive }) => {
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
  });
