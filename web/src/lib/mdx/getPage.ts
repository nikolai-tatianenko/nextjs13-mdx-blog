/**
 * Retrieves the page data for a given file.
 *
 * @param {string} type - The type of the page.
 * @param {string} file - The name of the file.
 * @param {string} fileExtension - The extension of the file (default: 'mdx').
 * @returns {Promise<Post<Frontmatter>>} - The page data.
 */
import { Frontmatter, Post } from "@/types/Page";
import { getAllMdxFiles, getMdxFileContent } from "./mdx";
import { prepareFilePath } from "@/lib/files/files";

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
  return await getMdxFileContent(filePath);
}

/**
 * Retrieves all the pages for a given type.
 */

export async function getAllPages() {
  const pages = getAllMdxFiles('page');
  return pages;
}

/**
 * Retrieves all the pages for a given type.
 */
export async function getAllPagesNames() {
  const pages = getAllMdxFiles('page');
  return pages;
}
