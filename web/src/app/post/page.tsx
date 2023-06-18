import Page from '@/components/04-Templates/Layouts/Page';
import { getAllPages } from '@/lib/mdx/getPage';
import { HorizontalLine, MdxContentWrapper } from "@/components";
import Link from "next/link";
import TagsList from "@/components/02-Molecules/TagsList";

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
      <HorizontalLine/>
    </Link>
  ));
};

export default PostList;
