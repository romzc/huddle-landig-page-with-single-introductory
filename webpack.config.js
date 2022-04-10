const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output:  {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        clean: true
    },

    resolve: {
        extensions: ['.js','.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080
    }
}