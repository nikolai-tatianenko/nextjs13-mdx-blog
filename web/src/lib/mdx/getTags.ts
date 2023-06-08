import { getAllMdxFiles } from "./mdx";
import { getPage } from "@/lib/mdx/getPage";
import { CONTENT_PUBLISHED } from "@/lib/mdx/consts";

const kebabCase = (str) => str.toLowerCase().replace(/\s/g, "-");

/**
 * The type for the tags list.
 */
type TagsList = {
  [key: string]: {
    count: number;
    name: string;
  };
}

/**
 * Retrieves all the tags for a given type.
 *
 * @param type
 */
export async function getAllTags (type = "page"): TagsList {
  const files = await getAllMdxFiles(type);
  console.log("files:::", { files });
  let tagCount: TagsList = {};

  // Iterate through each post, putting all found tags into `tags`
  for (const file of files) {
    const source = await getPage("page", file);
    if (!(source.frontmatter.tags && source.frontmatter.status ===
      CONTENT_PUBLISHED)) {
      continue;
    }
    // return 'test';
    // const source = fs.readFileSync(path.join(root, "data", type, file), "utf8");
    source.frontmatter.tags.forEach((tag) => {
      const newTag = kebabCase(tag);
      if (tagCount[newTag] === undefined) {
        tagCount[newTag] = {
          count: 1,
          name: tag
        };
      } else {
        tagCount[newTag].count += 1;
      }
    });
  }

  return tagCount;
}
