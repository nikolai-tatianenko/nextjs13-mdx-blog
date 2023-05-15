import { getPage } from '@/lib/mdx/getPage';
import Page from '@/components/Page';

const Home: () => Promise<JSX.Element> = async () => {
  const pageContent = await getPage('page', 'index');

  return <Page pageContent={pageContent} />;
};

export default Home;
