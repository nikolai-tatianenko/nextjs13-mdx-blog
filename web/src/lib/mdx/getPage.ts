/**
 * Retrieves the page data for a given file.
 *
 * @param {string} type - The type of the page.
 * @param {string} file - The name of the file.
 * @param {string} fileExtension - The extension of the file (default: 'mdx').
 * @returns {Promise<Post<Frontmatter>>} - The page data.
 */
import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { Frontmatter, Post } from '@/types/Page';

const root = process.cwd();

export async function getPage(
  type: string,
  file: string,
  fileExtension = 'mdx'
): Promise<Post<Frontmatter>> {
  /**
   * Construct the filepath for the given file.
   */
  const filepath = path.join(root, 'data', type, `${file}.${fileExtension}`);

  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, 'utf-8');

  // Serialize the MDX content and parse the frontmatter.
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}
