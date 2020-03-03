
const webpack = require( 'webpack' );
const path = require( 'path' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: { compact: false }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ],
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        // splitChunks: {
        //     chunks: 'all',
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendors',
        //             chunks: 'all'
        //       }
        //     }
        // }
    }
}