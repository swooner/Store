
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
        filename: 'bundle.client.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.sass$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            },
                        }
                    }
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
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        inline: true
    }
})