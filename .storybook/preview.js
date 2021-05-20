import React from 'react';

import { ThemeProvider } from 'styled-components';
import {defaultTheme, darkTheme} from '../src/utils'
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

const MyThemes = {
  defaultTheme,
  darkTheme
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'defaultTheme',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['defaultTheme', 'darkTheme'],
    },
  },
};

// Function to obtain the intended theme
const getTheme = (themeName) => {
  return MyThemes[themeName]
}

const withThemeProvider=(Story,context)=>{
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider, withKnobs, withA11y];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
