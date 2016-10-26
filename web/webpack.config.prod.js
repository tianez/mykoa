var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    // devtool: 'source-map',
    // entry: [
    //     './app'
    // ],
    // output: {
    //     path: path.join(__dirname, '../dist'),
    //     filename: 'bundle.js',
    //     publicPath: '/static/'
    // },
    entry: {
        app: path.resolve(__dirname, 'app.js'),
        // mobile: path.resolve(__dirname, 'app/mobile.js'),
        vendor: ['react', 'react-dom','react-router']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }, { // LESS
            test: /\.less$/,
            loader: 'style!css!less'
        }],
        postLoaders: [{
            test: /\.js$/,
            loaders: ['es3ify-loader']
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};