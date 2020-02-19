const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', //punto de entrada 
    output: { // salida de donde vamos a enviar el codigo de producion 
        path: path.resolve(__dirname, 'dist'), //lugar de salida
        filename: 'main.js' //archivo principal
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin([{
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }]),
    ]
}