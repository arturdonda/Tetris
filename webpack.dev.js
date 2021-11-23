const { merge } = require('webpack-merge');
const { join, resolve } = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const dirname = resolve();

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			ENV: JSON.stringify('development'),
		}),
	],
	devServer: {
		// contentBase: join(dirname, './dist'),
		compress: true,
		historyApiFallback: true,
		port: 8080,
	},
});
