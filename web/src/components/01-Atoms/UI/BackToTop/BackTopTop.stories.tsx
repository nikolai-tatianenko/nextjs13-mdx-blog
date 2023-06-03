import { Meta, StoryObj } from '@storybook/react';
import BackToTop from './BackToTop';

/**
 * Component that displays the BackToTopButton storybook.
 */
const BackTopTopComp = () => (
  <>
    <h1>Welcome to the BackToTopButton storybook!</h1>
    <br />
    <p>Scroll down to see the BackToTopButton in action.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    ⬇<br />
    <BackToTop />
  </>
);

/**
 * The meta information for the BackToTopButton storybook.
 */
const meta: Meta = {
  title: 'UI/Components/BackToTop',
  component: BackTopTopComp,
  tags: ['autodocs', 'docsPage'],
};

export default meta;

type Story = StoryObj<typeof BackTopTopComp>;

/**
 * The primary story for the BackToTopButton.
 *
 * More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
 */
export const Primary: Story = {
  args: {
    primary: true,
  },
};
