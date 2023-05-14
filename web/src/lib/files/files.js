/**
 * Retrieves all files recursively from a given folder.
 * @param {string} folder - The path of the folder to search for files.
 * @returns {string[]} - An array containing the paths of all the files found.
 */
import fs from 'fs';
import path from 'path';

const getAllFilesRecursively = (folder) => {
  console.log('folder', folder);

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
  const filePaths = entries.flatMap(entry => {
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

export default getAllFilesRecursively;
