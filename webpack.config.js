const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        static: './'
    },
    resolve: {
        alias: { '@': path.join(__dirname, '/') }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ]
}
