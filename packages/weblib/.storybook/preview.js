import { ThemeProvider } from '../src'

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider dark={false}>
        <Story />
      </ThemeProvider>
    )
  },
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}