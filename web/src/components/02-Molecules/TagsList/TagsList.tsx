import { prepareString } from '@/lib/utils/prepareString';
import Link from 'next/link';

type TagsListProps = {
  tagsList: string[];
};
/**
 * Renders a list of tags for post.
 *
 * @param tagsList
 * @constructor
 */
export const TagsList: React.FC<TagsListProps> = ({ tagsList }) => {
  if (!tagsList) return null;

  return Array.from(tagsList).map((tag) => (
    <Link
      href={`/tags/${prepareString(tag)}`}
      key={tag}
      className="mx-1 my-2 inline-block rounded-lg bg-blue-400 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600"
    >
      {tag}
    </Link>
  ));
};

export default TagsList;
