import { CONTENT_PUBLISHED } from '@/lib/mdx/consts';
import { getPage } from '@/lib/mdx/getPage';
import { getAllMdxFiles } from './mdx';

const kebabCase = (str) => str.toLowerCase().replace(/\s/g, '-');

/**
 * The type for the tags list.
 */
type TagsList = {
  [key: string]: {
    count: number;
    name: string;
  };
};

/**
 * Retrieves all the tags for a given type.
 *
 * @param type
 */
export async function getAllTags(type = 'page'): TagsList {
  const files = await getAllMdxFiles(type);
  console.log('files:::', { files });
  let tagCount: TagsList = {};

  // Iterate through each post, putting all found tags into `tags`
  for (const file of files) {
    const source = await getPage('page', file);
    if (
      !(
        source.frontmatter.tags &&
        source.frontmatter.status === CONTENT_PUBLISHED
      )
    ) {
      continue;
    }
    // return 'test';
    // const source = fs.readFileSync(path.join(root, "data", type, file), "utf8");
    source.frontmatter.tags.forEach((tag) => {
      const newTag = kebabCase(tag);
      if (tagCount[newTag] === undefined) {
        tagCount[newTag] = {
          count: 1,
          name: tag,
        };
      } else {
        tagCount[newTag].count += 1;
      }
    });
  }

  return tagCount;
}

/**
 * Retrieves all the pages for a given tag and type.
 *
 * @param type - The type of pages to retrieve.
 * @param tag - The tag to filter the pages by.
 * @returns A promise that resolves to an array of pages.
 */
export async function getAllPagesForTag(
  type: string = 'page',
  tag: string
): Promise<any[]> {
  const files = await getAllMdxFiles(type);
  const pages = [];

  for (const file of files) {
    const source = await getPage(type, file);
    if (
      !(
        source.frontmatter.tags &&
        source.frontmatter.status === CONTENT_PUBLISHED
      )
    ) {
      continue;
    }

    const preparedTags = source.frontmatter.tags.map((pageTag: string) =>
      kebabCase(pageTag)
    );
    if (preparedTags.includes(tag)) {
      pages.push(source);
    }
  }

  return pages;
}
