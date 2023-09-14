const { addAfterLoader, loaderByName } = require("@craco/craco");
const remarkFrontmatter = require("remark-frontmatter");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
        test: /\.(md|mdx)$/,
        loader: require.resolve("@mdx-js/loader"),
        options: {
          providerImportSource: "@mdx-js/react",
          remarkPlugins: [remarkFrontmatter, { type: "yaml", marker: "-" }],
        },
      });

      return webpackConfig;
    },
  },
};
