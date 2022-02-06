import { ThemeProvider } from "styled-components";
import {
  withThemes
} from "@react-theming/storybook-addon/dist/preview";

import { oneTheme } from "../src/Components/Ui/Themes/themeOne";
import { twoTheme } from "../src/Components/Ui/Themes/themeTwo";





export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Default',
    toolbar: {
      icon: 'switchalt',
      items: ['oneTheme', 'twoTheme'],
      showName: true,
    },
  },
};

const getTheme = (themeName) => {
  switch (themeName) {
    case 'oneTheme':
      return oneTheme;
    default:
      return twoTheme;
  }
};


const WithTest = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
      <ThemeProvider theme={theme}>
        <Story {...context}/>
      </ThemeProvider>
  );
};

// export const  decorators = [WithTest]

export const decorators = [withThemes(ThemeProvider, [twoTheme, oneTheme])];
