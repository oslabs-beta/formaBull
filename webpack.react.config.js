const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js", '.jsx'],
    mainFields: ["main", "module", "browser"]
  },
  entry: "./src/index.tsx",
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript", "@babel/plugin-syntax-jsx"],
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/renderer"),
    historyApiFallback: true,
    hot: true,
    port: 4000,
    publicPath: "/",
  },
  output: {
    path: path.resolve(__dirname, "./dist/renderer"),
    filename: "./js/[name].js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
  })],
};
