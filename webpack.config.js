var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: {
        all: [
            "./js/support/alert.js",
            "./js/support/windowBlock.js",
            "./js/vue_router_set.js"
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins:[
        new uglifyJsPlugin({
            compress:{
                warnings: false
            }
        })
    ]
};