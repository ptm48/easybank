//Webpack requires this to work with directories
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], //scss files are proocessed by sass/css then style loader.
      },
      {
        test: /\.(png|jpg|gif)$/, //process images with file-loaders.
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", //use the original name.ext as the exported name
              outputPath: "assets/images/", //save to assets/images folder
            },
          },
        ],
      },
      {
        test: /\.svg$/, //process images with file-loaders.
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", //use the original name.ext as the exported name
              outputPath: "assets/images/", //save to assets/images folder
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      myPageHeader: "Easy-bank",
      title: "Easy Bank",
      template: "./src/index.html",
      filename: "index.html", //relative root of the application
    }),
  ],
};
