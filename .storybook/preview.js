/** @type { import('@storybook/react').Preview } */
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "../src/App";
import '../src/index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={customTheme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];