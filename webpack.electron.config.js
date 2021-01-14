const path = require('path');
const webpack = require('webpack')


module.exports = {
  target: 'electron-main',
  devServer: {
    publicPath: '/dist/',
    hot: true
  },

  mode: process.env.NODE_ENV,
  entry: './main.ts',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
    // {
    //   test: /\.(ts|tsx)$/,
    //   use: ['ts-loader']
    // },
    {
      test: /\.(js|jsx|ts|tsx)$/,
      // Exclude node modules because majority are ES5 compatible and it will save time to not go through all the modules to check for compatibility.
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
      },
      options: { babelrc: true }
 
    },
      {
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  // If multiple files share the same name but have different extensions, 
  //webpack will resolve the one with the extension listed first in the array and skip the rest.
  resolve: { 
    extensions: ['.tsx', '.ts', '.js', '.jsx' ],
    fallback: {
          "path": require.resolve('path-browserify'),
        }
  }
};



