import path from 'path';
import getAllFilesRecursively from '../files/files';

const root = process.cwd();

/**
 * Retrieves MDX files based on the specified type and locale.
 *
 * @param {string} type - The type of MDX files to retrieve.
 * @param {string} [locale=''] - The locale of the files (optional).
 * @returns {string[]} - An array containing the prepared file names.
 */
export function getMdxFiles (type = 'page', locale = '') {
  const prefixPaths = path.join(root, 'data', type);

  // Retrieve all files recursively
  const files = getAllFilesRecursively(prefixPaths);

  // Filter files by locale and extensions
  const filteredFiles = filterFileByLocale(files, locale, ['mdx', 'md']);

  // Prepare file names
  const preparedFiles = prepareFileNames(filteredFiles, ['mdx', 'md'],
    prefixPaths);

  return preparedFiles;
}

/**
 * Filters files based on the specified locale and extensions.
 *
 * @param {string[]} files - The array of file paths.
 * @param {string} [locale=''] - The locale to filter by.
 * @param {string[]} [extension=['md']] - The file extensions to filter by.
 * @returns {string[]} - An array containing the filtered file paths.
 */
function filterFileByLocale (files: string[], locale = '', extension = ['md']) {
  return files.filter((filePath) => {
    const fileExtension = path.extname(filePath).replace('.', '');
    const baseName = path.basename(filePath, '.' + fileExtension);
    const test = (baseName.match(/\./g) || []).length;

    if (locale === '') {
      return (baseName.match(/\./g) || []).length === 0 &&
        extension.includes(fileExtension);
    } else {
      return baseName.endsWith(`.${locale}`) &&
        extension.includes(fileExtension);
    }
  });
}

/**
 * Prepares file names based on the specified extensions and prefix paths.
 *
 * @param {string[]} files - The array of file paths.
 * @param {string[]} [extension=['mdx', 'md']] - The file extensions to consider.
 * @param {string} prefixPaths - The prefix path to remove from file paths.
 * @returns {string[]} - An array containing the prepared file names.
 */
function prepareFileNames (
  files: string[], extension = ['mdx', 'md'], prefixPaths: string) {
  return files.map((file) => {
    const filePath = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
    const fileExtension = path.extname(filePath);
    const baseFileName = path.basename(filePath, fileExtension);
    return baseFileName;
  });
}
