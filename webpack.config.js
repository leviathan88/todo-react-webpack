const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + 3000,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: _path.join(__dirname, 'dist'),
    filanme: 'boundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', 'js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  plugins: {
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  }
}
