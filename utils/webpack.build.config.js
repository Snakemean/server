var webpack = require('webpack')
var cssPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/core/client/index.js',

  output: {
    path: './build/public/',
    filename: 'index.js',
    publicPath: '/public/',
  },

  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: cssPlugin.extract('css-loader')
    },{
      test: /\.svg$/,
      loader: 'raw-loader'
    },{
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new cssPlugin('[name].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true) 
      }
    }),
    //new webpack.optimize.UglifyJsPlugin()
  ],
}
