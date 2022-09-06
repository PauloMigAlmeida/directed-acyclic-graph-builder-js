const path = require('path');

const common = {
    devtool: 'source-map',
    optimization: {
        usedExports: true,
    },

    entry: './src/dag.js',

    experiments: {
        outputModule: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
}

module.exports = [
    {
        mode: 'production',
        
        output: {
            filename: 'dag.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'module',
            },
        },
    
        ...common
    },
    {
        mode: 'development',
        
        output: {
            filename: 'dag.debug.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'module',
            },
        },
    
        ...common
    },
];