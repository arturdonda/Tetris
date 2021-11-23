const { join, resolve } = require('path');
const HWP = require('html-webpack-plugin');
// const webpack = require('webpack');

const dirname = resolve();

const config = {
	entry: './src/index.ts',
	target: 'web',
	output: {
		filename: 'build.js',
		path: resolve(dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(jpg|gif|png|svg|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: 'url-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json'],
	},
	plugins: [
		new HWP({
			template: join(dirname, 'src/index.html'),
			favicon: './src/assets/favicon.ico',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};

module.exports = config;
