const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve('./dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [{ loader: 'babel-loader'} ]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html'
		}),
		new cleanWebpackPlugin(['dist'])
	],
	devServer: {
		host: 'localhost',
		port: 3000,
		open: true
	}
}