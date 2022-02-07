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

export const decorators = [withThemes(ThemeProvider, [twoTheme, oneTheme])];
