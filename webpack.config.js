const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/dag.js',

    experiments: {
        outputModule: true,
    },

    output: {
        filename: 'dag.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'module',
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    },

};