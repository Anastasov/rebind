const path = require("path");
const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "rebind-app": "./src/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, "../src/main/webapp/resources/js/"),
    filename: "[name].js",
    publicPath: "/resources/js/"
  },
  // Generate source maps also in production build
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: [
          path.resolve(__dirname, "./src"),
          path.resolve(__dirname, "./node_modules/react-icons/fa/")
        ],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "../",
          publicPath: "/"
        }
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 3000,
    proxy: {
      "/": {
        target: "http://localhost:5000",
        secure: false,
        prependPath: false
      }
    },
    hot: true,
    contentBase: "../src/main/webapp/resources/js/",
    publicPath: path.resolve(__dirname, "../src/main/webapp/resources/js/"),
    public: "http://localhost:3000",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    jquery: "jQuery"
  }
};
