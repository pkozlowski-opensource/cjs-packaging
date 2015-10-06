var webpack = require("webpack");

module.exports = {
    entry: {
        angular2: "angular2.js",
        http: "http.js"
    },
    resolve: {
        root: './'
    },
    output: {
        filename: 'dist/webpack/[name].js',
        library: 'dist/webpack/[name]',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("dist/webpack/angular2.common.js")
    ]
};
