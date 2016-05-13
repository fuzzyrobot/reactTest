var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { 
          screw_ie8: true,
          warnings: false
        }
      })
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
};
