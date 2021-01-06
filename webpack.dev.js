const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist", //for development mode, output bundled content to dist folder.
    host: "0.0.0.0",
  },
});
