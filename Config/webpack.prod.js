 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');

 module.exports = merge(common, {
     devtool: 'source-map',
     plugins: [
         new UglifyJSPlugin({
             sourceMap: true
         }),
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('production')
         })
     ],
     module: {
         rules: [
             {
                 test: /\.san$/,
                 loader: 'san-loader'
             }
         ]
     },
     resolve: {
         alias: {
             san: 'san/dist/san.js'
         }
     }
 });
