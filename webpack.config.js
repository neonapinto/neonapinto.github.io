const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
             },
             {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
             test: /\.tsx?$/,
             exclude: /node_modules/,
             loader: 'ts-loader'
             }
        ]
        },
        resolve: 
        {
           extensions: [ '.tsx', '.ts', '.js', '.css', '.scss' ]  
        },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./public/index.html'),
            favicon: "./public/favicon.ico",
            manifest: "./public/manifest.json",
       }) 
    ]
}