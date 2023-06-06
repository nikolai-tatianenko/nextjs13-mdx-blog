/**
 * Retrieves all files recursively from a given folder.
 * @param {string} folder - The path of the folder to search for files.
 * @returns {string[]} - An array containing the paths of all the files found.
 */
import fs from 'fs';
import path from 'path';

/**
 * Retrieves all files recursively from a given folder.
 * @param folder
 * @returns {string[]}
 */
export const getAllFilesRecursively = (folder) => {
  /**
   * Retrieve all files and directories within the specified folder.
   * @type {fs.Dirent[]}
   */
  const entries = fs.readdirSync(folder, { withFileTypes: true });

  /**
   * Recursively traverse the folder structure to find all files.
   * @param {string} folderPath - The path of the folder to search.
   * @returns {string[]} - An array containing the paths of all the files found.
   */
  const filePaths = entries.flatMap((entry) => {
    const fullPath = path.join(folder, entry.name);

    if (entry.isFile()) {
      return [fullPath];
    } else if (entry.isDirectory()) {
      return getAllFilesRecursively(fullPath);
    }

    return [];
  });

  return filePaths;
};

/**
 * Retrieves all files recursively from a given folder.
 *
 * @param folderPath
 * @param level
 * @returns {*[]}
 */

export function getFilesInFolder(folderPath, level = 0) {
  const files = [];

  // Read the contents of the folder
  const folderContents = fs.readdirSync(folderPath);

  // Iterate over each item in the folder
  for (const item of folderContents) {
    // Get the full path of the item
    const itemPath = path.join(folderPath, item);

    // Retrieve the item's stats
    const stats = fs.statSync(itemPath);

    if (stats.isFile()) {
      // Add file information to the array
      files.push({
        filepath: itemPath,
        level: level,
      });
    } else if (stats.isDirectory()) {
      // Recursively call the function for nested folders
      files.push(...getFilesInFolder(itemPath, level + 1));
    }
  }

  return files;
}
export default getAllFilesRecursively;
