const path = require('path');

const common = {
    devtool: 'source-map',

    optimization: {
        usedExports: true,
    },

    entry: './src/dag.js',    

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
};

const es = {

    experiments: {
        outputModule: true,
    },

    ...common
};

module.exports = [
    // ES module... at this point this is still experimental for webpack :(
    {
        mode: 'production',

        output: {
            filename: 'dag.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'module',
            },
        },
    
        ...es
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
    
        ...es
    },
    // Common JS
    {
        mode: 'production',
        
        output: {
            filename: 'dag.cmj.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'commonjs2',
            },
        },
    
        ...common
    },
    {
        mode: 'development',
        
        output: {
            filename: 'dag.cmj.debug.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'commonjs2',
            },
        },
    
        ...common
    },
];