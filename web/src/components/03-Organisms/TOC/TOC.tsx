'use client';
import { TableOfContentsItem } from './TableOfContentsItem';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
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

// Debounce function for resize event
function debounce(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
