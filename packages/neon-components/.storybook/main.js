module.exports = {
    "stories": ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      '@storybook/addon-controls',
    ],
    // to Reload lit element in storybook
    // ref: https://github.com/storybookjs/storybook/issues/12578
    babel: async (options) => {
      Object.assign(options.plugins.find((plugin) => plugin[0].includes('plugin-proposal-decorators'))[1], {
        decoratorsBeforeExport: true,
        legacy: false
      })
      return options;
    }
  };
