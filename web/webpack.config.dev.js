var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    debug: true,
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
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
    }
}