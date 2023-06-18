import { HorizontalLine, MdxContentWrapper } from '@/components';
import TagsList from '@/components/02-Molecules/TagsList';
import { getAllPages } from '@/lib/mdx/getPage';
import Link from 'next/link';

/**
 * Renders the dynamic posts list page.
 * @constructor
 */
const PostList: () => Promise<JSX.Element> = async () => {
  const pagesContent = await getAllPages('post');

  console.log(pagesContent);
  return pagesContent.map((pageContent, key) => (
    <Link href={`${pageContent.type}/${pageContent.file}`}>
      <MdxContentWrapper source={pageContent.serializedTrimmed} />
      {/*{pageContent.frontmatter.tags.join(',')}*/}
      <TagsList tagsList={pageContent.frontmatter.tags} />
      <HorizontalLine />
    </Link>
  ));
};

export default PostList;
