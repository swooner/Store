
const path = require( 'path' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './base.config.cjs' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = merge( baseConfig, {
    mode: 'development',
    entry: {
        client: './src/client/index.js',
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.client.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    resolve: {
        modules: [ path.resolve( __dirname ), 'node_modules' ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase : '../public',
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        inline: true
    }
})