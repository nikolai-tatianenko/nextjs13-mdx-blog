/**
 * Retrieves the page data for a given file.
 *
 * @param {string} type - The type of the page.
 * @param {string} file - The name of the file.
 * @param {string} fileExtension - The extension of the file (default: 'mdx').
 * @returns {Promise<Post<Frontmatter>>} - The page data.
 */
import { prepareFilePath } from '@/lib/files/files';
import { Frontmatter, Post } from '@/types/Page';
import { getAllMdxFiles, getMdxFileContent } from './mdx';

/**
 * Retrieves the page data for a given file.
 *
 * @param type
 * @param file
 * @param fileExtension
 */
export async function getPage(
  type: string,
  file: string,
  fileExtension = 'mdx'
): Promise<Post<Frontmatter>> {
  /**
   * Construct the filepath for the given file.
   */
  const filePath = prepareFilePath(type, file, fileExtension);
  const fileContent = await getMdxFileContent(filePath);

  return {
    ...fileContent,
    type: type,
    file: file,
  };
}

/**
 * Retrieves all the pages for a given type.
 */

export async function getAllPages(type = 'page') {
  const pages = getAllMdxFiles(type);
  return pages;
}

/**
 * Retrieves all the pages for a given type.
 */
export async function getAllPagesNames(type = 'page') {
  const pages = getAllMdxFiles(type);
  return pages;
}
