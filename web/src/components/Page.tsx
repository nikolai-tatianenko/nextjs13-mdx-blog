import { MdxContentWrapper } from '@/components/MdxContentWrapper';
import { Frontmatter, Post } from '@/types/Page';

/**
 * Renders a page component with the specified content.
 *
 * @param {Object} props - The props containing the page content.
 * @param {PageContent} props.pageContent - The content of the page.
 * @returns {JSX.Element} - The rendered page component.
 */
const Page: React.FC<{ pageContent:  Post<Frontmatter>  }> = ({ pageContent }) => {

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-4">
        <h1 className="text-4xl font-bold mb-2 sm:text-5xl md:text-6xl lg:text-7xl">
          {pageContent.frontmatter.title}
        </h1>
        <p className="text-sm">
          <time dateTime="2008-02-14 20:00">{pageContent.frontmatter.creationDate}</time>
        </p>
      </header>
      <main>
        <MdxContentWrapper source={pageContent.serialized} />
      </main>
    </div>
  );
};

export default Page;
