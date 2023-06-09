import { getAllTags } from "@/lib/mdx/getTags";
import Link from "next/link";

/**
 * Renders the tags list page.
 */
const Tags = async () => {
  const tags = await getAllTags();
  return (
    <div>
      <ul className={"max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"}>
        {Object.entries(tags).map(([tag, tagData], key) => (
          <li key={key} >
            <Link href={`/tags/${tag}`}>
              <span className="hover:underline">{tagData.name}</span>
            </Link>
            <span className="ml-2">({tagData.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
