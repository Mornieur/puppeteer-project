import { GlobalStyle } from '../src/styles/index';
import React from 'react';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
      theme: themes.light,
      toc: true,
    },
    storySort: {
      order: ['Examples', 'Docs', 'Demo'],
    },
    viewport: {
      viewport: {
        viewports: { ...INITIAL_VIEWPORTS },
      },
      defaultViewport: 'someDefault',
    },

    actions: { argTypesRegex: '^on.*' },
    options: {
      storySort: {
        order: ['Intro', 'Components'],
        method: 'alphabetical',
        locales: 'pt-BR',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, context) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
};

export default preview;

export const InputWithoutAutofill = () => <input type="text" />;

InputWithoutAutofill.parameters = {
  a11y: {
    disable: true,
    config: {
      rules: [
        {
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          id: 'landmark-complementary-is-top-level',
          reviewOnFail: true,
        },
      ],
    },
  },
};

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
);
Inaccessible.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};
