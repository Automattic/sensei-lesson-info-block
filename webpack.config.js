var webpack = require( 'webpack' ),
	NODE_ENV = process.env.NODE_ENV || 'development',
	webpackConfig = {
		mode: NODE_ENV,
		entry: './script.jsx',
		output: {
			path: __dirname,
			filename: 'script.js',
		},
		module: {
			rules: [
				{
					test: /.jsx$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
			],
		},
		plugins: [
			new webpack.DefinePlugin( {
				'process.env.NODE_ENV': JSON.stringify( NODE_ENV )
			} ),
		]
	};

module.exports = webpackConfig;
