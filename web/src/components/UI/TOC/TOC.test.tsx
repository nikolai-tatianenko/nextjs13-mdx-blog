import React from 'react';
import { render } from '@testing-library/react';
import TableOfContents from './TOC';

test('renders table of contents with correct items', () => {
  const headings = [
    { id: 'heading1', level: 1, title: 'Heading 1' },
    { id: 'heading2', level: 2, title: 'Heading 2' },
    { id: 'heading3', level: 2, title: 'Heading 3' },
  ];

  const { getByText } = render(<TableOfContents />, {
    wrapper: ({ children }) => (
      <div id="root">
        <div>{children}</div>
        <div>
          {headings.map((heading) => (
            <div key={heading.id}>{heading.title}</div>
          ))}
        </div>
      </div>
    ),
  });

  expect(getByText('Table of contents')).toBeInTheDocument();
  expect(getByText('Heading 1')).toBeInTheDocument();
  expect(getByText('Heading 2')).toBeInTheDocument();
  expect(getByText('Heading 3')).toBeInTheDocument();
});

test('applies active style to the active item', () => {
  const headings = [
    { id: 'heading1', level: 1, title: 'Heading 1' },
    { id: 'heading2', level: 1, title: 'Heading 2' },
  ];

  const { getByText } = render(<TableOfContents />, {
    wrapper: ({ children }) => (
      <div id="root">
        <div>{children}</div>
        <div>
          {headings.map((heading) => (
            <div key={heading.id}>{heading.title}</div>
          ))}
        </div>
      </div>
    ),
  });

  expect(
    getByText('Heading 1').classList.contains('text-accent-fg')
  ).toBeTruthy();
  expect(
    getByText('Heading 2').classList.contains('text-accent-fg')
  ).toBeFalsy();
});
