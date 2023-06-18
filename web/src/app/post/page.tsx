import Page from '@/components/04-Templates/Layouts/Page';
import { getAllPages } from '@/lib/mdx/getPage';

const PostList: () => Promise<JSX.Element> = async () => {
  const pageContent = await getAllPages('post');

  return <Page pageContent={pageContent} />;
};

export default PostList;
