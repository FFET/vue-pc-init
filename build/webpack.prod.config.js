/**
 * @author Jay
 * @date 2020-2-4
 * @description webpack prod config
 */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CloudStorageWebpackPlugin = require("cloud-storage-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.base.config.js");

module.exports = merge(common, {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "js/[name].[hash:6].js",
    chunkFilename: "js/[name].[hash:6].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.less|css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.(png|svg|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100,
              name: "image/[hash:6].[ext]"
              // outputPath: "image/",
              // publicPath: ".."
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({}),
    // cloud storage
    // new CloudStorageWebpackPlugin(require("../config/cloudStorage.json")),
    new MiniCssExtractPlugin({
      filename: "css/[contenthash].css",
      chunkFilename: "css/[contenthash].css"
    })
  ],
  optimization: {
    // runtimeChunk: {
    //   name: "mainfest"
    // },
    minimizer: [
      // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
      new TerserPlugin({
        terserOptions: {
          parallel: true,
          cache: true,
          compress: { warnings: true, drop_console: true },
          output: {
            comments: false
            // comments: /Build in/i
          }
        },
        extractComments: false
      })
    ]
    // splitChunks: {
    //   chunks: "all",
    //   minChunks: 1,
    //   //   minSize: 30000,
    //   //   maxSize: 300000,
    //   maxInitialRequests: 5,
    //   automaticNameDelimiter: ".",
    //   name: false, // vender
    //   cacheGroups: {
    //     // packaged css in one file
    //     // styles: {
    //     //   name: "styles",
    //     //   test: /\.(less|css|scss)$/,
    //     //   chunks: "all",
    //     //   minChunks: 1,
    //     //   reuseExistingChunk: true,
    //     //   enforce: true
    //     // },
    //     vendor: {
    //       chunks: "initial",
    //       test: /node_modules/,
    //       name: "vendor",
    //       priority: 10,
    //       enforce: true
    //     }
    //   }
    // }
  }
});
