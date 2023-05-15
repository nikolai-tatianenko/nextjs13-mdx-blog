"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

/**
 * The properties for the MDX content component.
 */
type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

/**
 * A mapping of MDX components used for rendering.
 */
const mdxComponentsMap = {
};

/**
 * Renders the MDX content wrapped in an MDXRemote component.
 *
 * @param {MdxContentProps} props - The properties for the MDX content component.
 * @returns {JSX.Element} - The rendered MDX content.
 */
export function MdxContentWrapper({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={mdxComponentsMap} />;
}
