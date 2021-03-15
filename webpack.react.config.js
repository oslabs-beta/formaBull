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
          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  devServer: {
<<<<<<< HEAD
    contentBase: path.join(__dirname, "./dist/renderer"),
    historyApiFallback: true, // for routes when you have react app, there is a problem with reloading and will lead to the root and lose the history of your navigation. 
    hot: true,
    port: 4000,
    publicPath: "./", // add 
=======
    contentBase: path.join(__dirname, "../dist/renderer"),
    historyApiFallback: true,
    hot: true,
    port: 4000,
    publicPath: "/",
>>>>>>> 141bf7b4609dc34b6545921116fd105f36963bbd
  },
  output: {
    path: path.resolve(__dirname, "./dist/renderer"),
    filename: "./js/[name].js",
  },
  plugins: [new HtmlWebpackPlugin({
<<<<<<< HEAD
    template: './index.html' // creates on HTML file for development and production, without it, it would create two different one for each envionement.
=======
    template: "./index.html"
>>>>>>> 141bf7b4609dc34b6545921116fd105f36963bbd
  })],
};
