'use client';
import { EmptyComponent } from '@/components/01-Atoms/UI/EmptyComponent';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import React, { useState } from 'react';
import { Heading } from '../../01-Atoms/UI';

/**
 * The properties for the MDX content component.
 */
type MdxContentProps = {
  source: MDXRemoteSerializeResult;
  maxLength?: number;
  hideHeaders?: boolean;
};

/**
 * A mapping of MDX components used for rendering.
 */
const mdxComponentsMapDefault = {
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
export const MdxContentWrapper: React.FC<MdxContentProps> = ({
  source,
  maxLength = 200,
  hideHeaders = false,
}) => {
  const [trimmedContent, setTrimmedContent] = useState<boolean>(true);

  const handleClickReadMore = () => {
    setTrimmedContent(false);
  };

  let mdxComponentsMap = { ...mdxComponentsMapDefault };

  /**
   * Hide Headers for trimmed content.
   */
  if (hideHeaders) {
    mdxComponentsMap = {
      ...mdxComponentsMapDefault,
      h1: EmptyComponent,
      h2: EmptyComponent,
      h3: EmptyComponent,
      h4: EmptyComponent,
      h5: EmptyComponent,
      h6: EmptyComponent,
    };
  }

  if (maxLength && trimmedContent && source.length > maxLength) {
    const trimmedText = source.slice(0, maxLength);
    const lastSpaceIndex = trimmedText.lastIndexOf(' ');
    const trimmedContentWithEllipsis =
      trimmedText.slice(0, lastSpaceIndex) + '...';

    return (
      <>
        {trimmedContentWithEllipsis}
        <button
          onClick={handleClickReadMore}
          className="text-blue-500 hover:underline"
        >
          Read More
        </button>
      </>
    );
  }

  return (
    <>
      <MDXRemote {...source} components={mdxComponentsMap} />
      {maxLength && !trimmedContent && (
        <button
          onClick={handleClickReadMore}
          className="text-blue-500 hover:underline"
        >
          Read More
        </button>
      )}
    </>
  );
};

export default MdxContentWrapper;
