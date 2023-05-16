import { useEffect } from 'react';
import React from 'react';

/**
 * The default theme used when no theme is specified.
 * Upgraded default example to typescript next.js
 * @see https://github.com/Integrayshaun/storybook-tailwind-recipe-example/blob/main/.storybook/withTailwindTheme.decorator.js
 */
export const DEFAULT_THEME: string = 'light';

/**
 * Sets the Tailwind theme for the Storybook story.
 * @param {React.ComponentType} Story - The Storybook story component.
 * @param {any} context - The Storybook context object.
 * @returns {JSX.Element} The wrapped Story component.
 */
export const withTailwindTheme = (
  Story: React.ComponentType,
  context: any
): JSX.Element => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag: HTMLElement = document.documentElement;

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute('data-mode', theme || DEFAULT_THEME);
  }, [theme]);

  return React.createElement(Story);
};
