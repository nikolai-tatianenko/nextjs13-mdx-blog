import { Heading, HorizontalLine, MdxContentWrapper } from "@/components";
import TagsList from "@/components/02-Molecules/TagsList/TagsList";
import { getAllPages } from "@/lib/mdx/getPage";
import Link from "next/link";
import { EmptyComponent } from "@/components/01-Atoms/UI/EmptyComponent";

/**
 * Renders the dynamic posts list page.
 * @constructor
 */
const PostList = async (): Promise<JSX.Element> => {
  const pagesContent = await getAllPages("post");


  console.log(pagesContent);
  return (
    <>
      {pagesContent.map((pageContent, key) => (
        <Link href={`${pageContent.type}/${pageContent.file}`} key={key}>
          <div>
            <Heading level={2}>{pageContent.frontmatter.title}</Heading>
            <MdxContentWrapper
              source={pageContent.serializedTrimmed}
              hideHeaders={true}
            />
            <TagsList tagsList={pageContent.frontmatter.tags} />
            <HorizontalLine />
          </div>
        </Link>
      ))}
    </>
  );
};

export default PostList;
