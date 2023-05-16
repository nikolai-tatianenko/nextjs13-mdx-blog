import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading, { HeaderProps } from './Heading';

export default {
  title: 'UI/Components/Heading',
  component: Heading,
  tags: ['autodocs', 'docsPage'],
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 1,
  children: 'Default Heading',
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  level: 3,
  children: 'Heading with Custom Class',
  className: 'custom-heading',
};

export const WithCustomId = Template.bind({});
WithCustomId.args = {
  level: 2,
  children: 'Heading with Custom ID',
  id: 'custom-id',
};
