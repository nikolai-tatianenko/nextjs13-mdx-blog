import { getAllTags } from "@/lib/mdx/getTags";
import Link from "next/link";

/**
 * Renders the tags list page.
 */
const Tags = async () => {
  const tags = await getAllTags();
  return (
    <div>
      <ul>
        {Object.entries(tags).map(([tag, tagData], key) => {
          return (
            <li key={key}>
              <Link href={`/tags/${tag}`}>
                <span className={"hover:underline"}>
                  {tagData.name}
                </span><span className={"ml-2"}>({tagData.count})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
