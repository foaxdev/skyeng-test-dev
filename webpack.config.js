const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "bundle.js": path.resolve(__dirname, "./src/main.js"),
    "style.css": path.resolve(__dirname, "./src/sass/style.scss"),
  },
  output: {
    filename: "[name]",
    path: path.join( __dirname, "public")
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join( __dirname, "public"),
    publicPath: "/",
    compress: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            "sass-loader?outputStyle=expanded"
          ]
        })
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name]"),
  ]
};
