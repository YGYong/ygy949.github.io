const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
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
};
