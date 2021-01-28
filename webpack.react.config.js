const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js", '.jsx'],
    mainFields: ["main", "module", "browser"]
  },
  entry: "./src/index.tsx",
  target: "electron-renderer", //if this is removed you can view your app on the localhost
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // Exclude node modules because majority are ES5 compatible and it will save time to not go through all the modules to check for compatibility.
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
    contentBase: path.join(__dirname, "../dist/renderer"),
    historyApiFallback: true, // for routes when you have react app, there is a problem with reloading and will lead to the root and lose the history of your navigation. 
    hot: true,
    port: 4000,
    publicPath: "/", // add 
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html' // creates on HTML file for development and production without it, it would create two different one for each envionement.
  })],
};