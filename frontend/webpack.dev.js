/* eslint-disable */
const webpack = require("webpack");

new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("dev")
});
/* eslint-enable */
