var webpack = require('webpack');

module.exports = {
    entry: {
        http: 'http.js'
    },
    resolve: {
        root: './'
    },
    externals: ['angular2/angular2'],
    output: {
        filename: 'dist/webpack/[name].js',
        library: 'http',
        libraryTarget: 'commonjs'
    }
};
