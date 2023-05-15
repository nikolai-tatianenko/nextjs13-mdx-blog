import { getMdxFiles } from '../../lib/mdx/mdx';
import { getPage } from '@/lib/mdx/getPage';
import Page from '@/components/Page';

export async function generateStaticParams () {
  const pages = getMdxFiles('page');
  return pages.map((val: string) => {
      return { page: val };
    }
  );
}

const DynamicPage = async ({ params }: { params: { page: string } }) => {
  const pageContent = await getPage("page", params.page);
  return <Page pageContent={pageContent} />;
};
export default DynamicPage;
