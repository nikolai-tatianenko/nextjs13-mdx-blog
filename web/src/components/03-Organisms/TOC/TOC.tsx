'use client';
import { Heading } from '@/components/01-Atoms';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { TableOfContentsItem } from './TableOfContentsItem';
import { useHeadings, useScrollspy } from './hooks';

/**
 * Table of Contents component.
 *
 * @returns {JSX.Element} - Rendered component.
 */
const TableOfContents: React.FC = () => {
  const pathname = usePathname();
  const headings = useHeadings('article :is(h2, h3, h4, h5, h6)', pathname);
  const [activeId, setActiveId] = useState<string | undefined>(headings[0]?.id);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleResize = () => {
    setIsCollapsible(window.innerWidth < 1024);
  };

  useEffect(() => {
    setActiveId(headings[0]?.id);
  }, [headings]);

  useEffect(() => {
    handleResize();
    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  useScrollspy(
    headings.map((heading) => heading.id),
    (newActiveId) => {
      setActiveId(newActiveId);
    }
  );
  if (headings.length === 0) {
    return null;
  }
  if (!isCollapsible) {
    return (
      <div className={'mt-8'}>
        <Heading
          level={5}
          className={
            'mb-2 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white lg:text-xs'
          }
        >
          Table of contents
        </Heading>
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
      <Heading
        level={2}
        className={'mb-4 flex cursor-pointer items-center gap-4 text-center'}
        onClick={toggleCollapse}
      >
        Table of contents
      </Heading>
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

// Debounce function for resize event
function debounce(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
