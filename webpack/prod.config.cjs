
const path = require( 'path' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './base.config.cjs' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = merge( baseConfig, {
    mode: 'production',
    target: 'node',
    entry: {
        client: './src/client/index.js',
        server: './src/server/index.js',
        api: './src/api/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve( __dirname, '../dist' ),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
      }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ],
    },
})