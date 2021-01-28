const path = require('path');

module.exports = {
  // If multiple files share the same name but have different extensions, 
  //webpack will resolve the one with the extension listed first in the array and skip the rest.
  resolve: { 
    extensions: [".tsx", ".ts", ".js", '.jsx'],
  },
  devtool: "source-map",
  entry: "./main.ts",
  target: "electron-main",
  module: {
    rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          // Exclude node modules because majority are ES5 compatible and it will save time to not go through all the modules to check for compatibility.
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
    ]
  },
  // node: {
  //   __dirname: false,
  // },
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "[name].js",
  },
};
