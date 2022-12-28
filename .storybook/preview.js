import { ThemeProvider } from 'styled-components';

import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import themes from '../src/themes';

const providerFn = ({ children }) => {
  const theme = { ...themes.base, colors: themes.dark };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(null, [{ ...themes.base, colors: themes.dark }], { providerFn }));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
