'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Heading } from './01-Atoms/UI';

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
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  h4: (props: any) => <Heading level={4} {...props} />,
  h5: (props: any) => <Heading level={5} {...props} />,
  h6: (props: any) => <Heading level={6} {...props} />,
  Heading: (props: any) => <Heading {...props} />,
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
