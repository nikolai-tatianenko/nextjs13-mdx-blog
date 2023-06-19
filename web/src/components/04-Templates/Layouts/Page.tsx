import { Heading } from '@/components/01-Atoms/UI';
import { MdxContentWrapper } from '@/components/04-Templates/General/MdxContentWrapper';
import { Frontmatter, Post } from '@/types/Page';
import React from 'react';

/**
 * Renders a page component with the specified content.
 *
 * @param {Object} props - The props containing the page content.
 * @param {PageContent} props.pageContent - The content of the page.
 * @returns {JSX.Element} - The rendered page component.
 */
const Page: React.FC<{ pageContent: Post<Frontmatter> }> = ({
  pageContent,
}) => {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-4">
        <Heading
          level={1}
          className="mb-2 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {pageContent.frontmatter.title}
        </Heading>
        <p className="text-sm">
          <time dateTime={pageContent.frontmatter.creationDate}>
            {pageContent.frontmatter.creationDate}
          </time>
        </p>
      </header>
      <article>
        <MdxContentWrapper source={pageContent.serialized} />
      </article>
    </div>
  );
};

export default Page;
