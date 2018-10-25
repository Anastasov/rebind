const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "rebind-app": "./src/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, "../src/main/webapp/resources/js/"),
    filename: "[name].js",
    publicPath: path.resolve(__dirname, "../src/main/webapp/resources/js/")
  },
  // Generate source maps also in production build
  devtool: "source-map",
  watch: true,
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
        test: /\.gif$/,
        loader: "url-loader",
        options: {
          mimetype: "image/png"
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "url-loader",
        options: {
          mimetype: "application/font-woff"
        }
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
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
