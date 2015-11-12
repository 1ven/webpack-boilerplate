'use strict';

module.exports = {
    context: __dirname + '/source',
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js'],
    },
    watch: true,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: __dirname + '/build'
    }
};
