/**
 * A component representing an accessibility link to skip to the main content.
 * @returns JSX.Element
 */
const A11yLink = (): JSX.Element => {
  return (
    <a
      href="web/src/components/01-Atoms/UI#main-content-anchor"
      tabIndex={0}
      className={
        'absolute left-1/2 z-50 -translate-x-1/2 transform rounded-b-lg border-b-0 bg-gray-700 bg-opacity-60 px-2 py-1 text-xs leading-4 text-white opacity-0 outline-none hover:underline hover:outline-1 focus:underline focus:opacity-100 focus:outline-1 focus-visible:underline focus-visible:outline-1'
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
