const path = require("path");
// const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      const svgRule = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      };

      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (rule.oneOf) {
          return {
            ...rule,
            oneOf: [svgRule, ...rule.oneOf],
          };
        }
        return rule;
      });

      webpackConfig.resolve.alias["@icons"] = path.resolve(
        __dirname,
        "src/assets/icons"
      );

      return webpackConfig;
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: require("craco-less"),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://172.20.10.2:8888",
  //       changeOrigin: true,
  //       pathRewrite: { "^/api": "" },
  //     },
  //   },
  // },
};
