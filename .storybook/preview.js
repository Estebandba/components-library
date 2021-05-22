import React from 'react';
import { ThemeProvider } from 'styled-components';
import {defaultTheme, darkTheme} from '../src/utils'

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
      items: ['defaultTheme', 'darkTheme'],
    },
  },
};

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
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
}
