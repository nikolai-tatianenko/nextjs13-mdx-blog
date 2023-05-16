import React, { useEffect, useState } from 'react';

type Heading = {
  id: string;
  title: string;
  level: number;
};

/**
 * Custom hook to retrieve headings from the document based on the given query.
 *
 * @param {string} [headingQuery='article :is(h1, h2, h3, h4, h5, h6)'] - Query selector for headings.
 * @returns {Heading[]} - Array of headings.
 */
export const useHeadings = (
  headingQuery = 'article :is(h1, h2, h3, h4, h5, h6)'
): Heading[] => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  return headings;
};

export default useHeadings;
