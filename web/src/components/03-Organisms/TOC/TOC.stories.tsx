import { Meta, Story } from '@storybook/react';
import TableOfContents from './TOC';

export default {
  title: 'Table of Contents',
  component: TableOfContents,
} as Meta;

const Template: Story = () => {
  // Generate dummy headings and paragraphs
  const headings = Array.from({ length: 6 }, (_, index) => ({
    id: `heading${index + 1}`,
    title: `Heading ${index + 1}`,
    level: index + 1,
  }));

  const paragraphs = Array.from({ length: 5 }, (_, index) => (
    <p key={`paragraph${index + 1}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida
      metus vel eros volutpat, a tempus ex scelerisque. Fusce consequat ex et ex
      hendrerit, non lacinia justo rutrum. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Suspendisse
      potenti. Sed ullamcorper ullamcorper semper. Integer in congue velit, sed
      pharetra lacus. Curabitur a mauris ligula. Donec pellentesque orci ut
      ultrices finibus. Sed sit amet augue nec neque eleifend congue. Vestibulum
      nec bibendum nisi. Curabitur elementum mollis dolor, in facilisis sem
      tincidunt nec.
    </p>
  ));

  return (
    <article>
      <h1>{headings[0]?.title}</h1>
      {paragraphs[0]}
      <h2>{headings[1]?.title}</h2>
      {paragraphs[1]}
      <h3>{headings[2]?.title}</h3>
      {paragraphs[2]}
      <h4>{headings[3]?.title}</h4>
      {paragraphs[3]}
      <h5>{headings[4]?.title}</h5>
      {paragraphs[4]}
      <h6>{headings[5]?.title}</h6>
    </article>
  );
};

export const Default = Template.bind({});
