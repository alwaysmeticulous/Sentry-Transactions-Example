const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration} */
const config = {
  target: "web",
  entry: {
    index: path.resolve(__dirname, "src/index.ts"),
    separated: path.resolve(__dirname, "src/separated.ts"),
  },
  resolve: {
    extensions: [".ts", ".js"],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // Cache busting
      filename: "../dist/index.html",
    }),
  ],
};

module.exports = [config];
