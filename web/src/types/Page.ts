import { MDXRemoteSerializeResult } from 'next-mdx-remote';

/**
 * Defines the structure of the page content.
 */
export type Frontmatter = {
  title: string;
  creationDate: string;
  status: string;
  summary?: string;
};

export type Post<T> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: T;
  serializedTrimmed: MDXRemoteSerializeResult;
  type: string;
  file: string;
};
