import React from 'react';

/**
 * A component representing an accessibility link to skip to the main content.
 * @returns JSX.Element
 */
const A11yLink = (): JSX.Element => {
  return (
    <a
      href="#main-content-anchor"
      tabIndex={0}
      className={
        'absolute left-1/2 transform -translate-x-1/2 z-50 bg-gray-700 bg-opacity-60 text-white text-xs leading-4 py-1 px-2 rounded-b-lg border-b-0 outline-none opacity-0 focus:opacity-100 focus:outline-1 focus-visible:outline-1 hover:outline-1 hover:underline focus:underline focus-visible:underline'
      }
    >
      Skip to main content
    </a>
  );
};

/**
 * A component representing an accessibility anchor for the main content.
 * @returns JSX.Element
 */
const A11yAnchor = (): JSX.Element => {
  return <a id="main-content-anchor" tabIndex={-1}></a>;
};

export default A11yLink;
export { A11yAnchor };
