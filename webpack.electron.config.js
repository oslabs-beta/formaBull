const path = require('path');

module.exports = {
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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"), 
    filename: "[name].js",
  },
};
