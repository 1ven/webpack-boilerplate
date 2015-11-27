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
        extensions: ['', '.react.js', '.js', '.jsx'],
        modulesDirectories: ['source', 'node_modules']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js'],
    },
    devServer: {
        contentBase: __dirname + '/build'
    }
};
