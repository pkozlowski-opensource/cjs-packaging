var webpack = require("webpack");

module.exports = {
    entry: {
        angular2: "angular2.js"
    },
    resolve: {
        root: './'
    },
    output: {
        filename: 'dist/webpack/[name].js',
        library: 'angular2',
        libraryTarget: 'commonjs'
    }
};
