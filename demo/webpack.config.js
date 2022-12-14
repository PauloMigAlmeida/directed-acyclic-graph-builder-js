const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        usedExports: true,
    },

    entry: './src/script.js',

    experiments: {
        outputModule: true,
    },

    output: {
        filename: 'demo.js',
        path: path.resolve(__dirname, 'public'),
        library: {
            type: 'module',
        },
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            scriptLoading: 'module'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
        client: {
            progress: true,
        },
    },

};
