const { merge } = require('webpack-merge');
const { join, resolve } = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const dirname = resolve();

module.exports = merge(common, {
	resolveLoader: {
		modules: [join(dirname, 'node_modules')],
	},
	plugins: [
		new webpack.DefinePlugin({
			ENV: JSON.stringify('production'),
		}),
	],
});
