'use client';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
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
};

export default TableOfContents;
