const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/SuperCoolButton/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "SuperCoolButton.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, 'node_modules', 'react'),
            'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
        },
        extensions: ['.js', '.jsx']
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
}