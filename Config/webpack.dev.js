 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');

 module.exports = merge(common, {
     devtool: 'inline-source-map',
     devServer: {
         contentBase: './dist'
     },
     plugins: [
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('development')
         })
     ],
     module: {
         rules: [
                     {
                         test: /.san$/,
                         use: 'san-loader'
                     }
                 ]
     },
     resolve: {
             alias: {
                 san: process.env.NODE_ENV === 'production'
                     ? 'san/dist/san.js'
                     : 'san/dist/san.dev.js'
             }
         }
 });
