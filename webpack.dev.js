const { merge } = require("webpack-merge");
const commom = require("./webpack.common.js");

module.exports = merge(commom, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
