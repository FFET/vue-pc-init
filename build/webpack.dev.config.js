/**
 * @author Jay
 * @date 2020-2-4
 * @description webpack dev config
 */

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.base.config.js");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.less|css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|woff)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [new CopyPlugin([{ from: "src/json/", to: "json/" }])],
  devServer: {
    host: "0.0.0.0",
    useLocalIp: true,
    hot: true,
    hotOnly: true,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
});
