import Page from '@/components/04-Templates/Layouts/Page';
import { getAllPagesForTag } from '@/lib/mdx/getTags';
import React from 'react';

/**
 * Renders the tags list page.
 * @param {string} params.tag - The tag to render.
 * @returns {JSX.Element} The tags list page.
 */
const Tags = async ({ params }: { params: { tag: string } }) => {
  const tags = await getAllPagesForTag('page', params.tag);

  return tags.map((pageContent: string, key) => {
    return <Page key={key} pageContent={pageContent} />;
  });
};

export default Tags;
