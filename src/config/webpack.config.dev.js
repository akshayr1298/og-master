const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'
      ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add this line to support importing .jsx files without specifying the extension
  },
  plugins: [
    new Dotenv({ path: '../.env.devK' }),
    new MiniCssExtractPlugin(),
  ],
  // other configuration options...
};