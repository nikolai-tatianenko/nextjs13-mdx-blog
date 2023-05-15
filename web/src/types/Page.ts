import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

/**
 * Defines the structure of the page content.
 */
export type Frontmatter = {
  title: string;
  creationDate: string;
};

export type Post<T> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: T;
};