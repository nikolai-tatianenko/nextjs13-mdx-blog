import Page from '@/components/04-Templates/Layouts/Page';
import { getAllPages } from '@/lib/mdx/getPage';

const PostList: () => Promise<JSX.Element> = async () => {
  const pagesContent = await getAllPages('post');

  return  pagesContent.map(pageContent => (<Page pageContent={pageContent} />))
};

export default PostList;
