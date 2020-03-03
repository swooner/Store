
const path = require( 'path' );
const merge = require( 'webpack-merge' );
const baseConfig = require( './base.config.cjs' );

module.exports = merge( baseConfig, {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        path: path.resolve( __dirname, '..', 'dist' ),
        filename: 'bundle.server.js'
    },
})
