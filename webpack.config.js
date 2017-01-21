var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: {
        all: [
            "./lib/exif/exif.js",
            "./js/support.js",
            "./js/support/alert.js",
            "./js/support/windowBlock.js",
            "./js/left_example/page_login.js",
            "./js/left_example/page_upload_img.js",
            "./js/main/page_mainBase.js",
            "./js/main/page_index.js",
            "./js/vue_router_set.js",
            "./js/main.js"
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
  ]
};