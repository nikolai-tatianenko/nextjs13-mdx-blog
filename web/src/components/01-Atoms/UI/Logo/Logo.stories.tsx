import React from "react";
import { Story, Meta } from "@storybook/react";
import Logo, { LogoProps } from "./Logo";

/**
 * Storybook of the Logo component.
 */
export default {
  title: "Logo",
  component: Logo,
  argTypes: {
    sitename: {
      control: "text",
      defaultValue: "Site Name",
    },
  },
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
