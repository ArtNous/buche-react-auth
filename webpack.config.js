const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = args => ({
    entry: './app/main.js',
    devServer: {
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /.s[ac]ss$/,
                use: [
                    args.mode === 'development' ? 'style-loader' : MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            title: 'Buche Auth'
        })
    ]
})