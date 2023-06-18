import Page from '@/components/04-Templates/Layouts/Page';
import { getAllPagesNames, getPage } from '@/lib/mdx/getPage';

/**
 * Retrieves an array of MDX files for a given type.
 *
 * @param {string} type - The type of the MDX files.
 * @returns {string[]} - An array of MDX file paths.
 */
export async function generateStaticParams() {
  const pages = await getAllPagesNames('post');
  return pages.map((val: string) => {
    return { page: val };
  });
}

/**
 * Renders the dynamic page based on the provided parameters.
 *
 * @param {Object} params - The parameters for the dynamic page.
 * @param {string} params.page - The page name.
 * @returns {ReactElement} - The rendered dynamic page.
 */
const PostPage = async ({ params }: { params: { post: string } }) => {
  const pageContent = await getPage('post', params.post);
  return <Page pageContent={pageContent} />;
};

export default PostPage;
