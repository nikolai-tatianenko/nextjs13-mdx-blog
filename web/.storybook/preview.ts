// .storybook/preview.tsx

// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
