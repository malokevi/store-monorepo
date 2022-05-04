module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5"
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //     type: 'asset/inline',
  //   });

  //   return config;
  // },
}
