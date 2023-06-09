import { useCallback, useEffect, useState } from 'react';

/**
 * Heading type.
 */
type Heading = {
  id: string;
  title: string;
  level: number;
};

/**
 * Custom hook to retrieve headings from the document based on the given query.
 *
 * @param {string} [headingQuery='article :is(h1, h2, h3, h4, h5, h6)'] - Query selector for headings.
 * @param {string} pathname - Current pathname.
 * @returns {Heading[]} - Array of headings.
 */
export const useHeadings = (
  headingQuery = 'article :is(h1, h2, h3, h4, h5, h6)',
  pathname: string
): Heading[] => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const getHeaders = useCallback(() => {
    if (!document || !document.querySelectorAll) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(headingQuery)
    ).reduce<Heading[]>((acc, element) => {
      if (element.id) {
        acc.push({
          id: element.id,
          title: element.textContent || '',
          level: Number(element.tagName.substring(1)),
        });
      }
      return acc;
    }, []);

    setHeadings(elements);
  }, [headingQuery]);

  /**
   * Get headings on mount and when pathname changes.
   */
  useEffect(() => {
    getHeaders();
  }, [getHeaders, pathname]);

  return headings;
};

export default useHeadings;
