const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.js',
		summaryPage: './src/summary.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		clean: true,
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
		},
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			excludeChunks: ['summary'],
			chunks: ['main'],
		}),
		new HtmlWebpackPlugin({
			filename: 'summary.html',
			template: './src/summary.html',
			chunks: ['summary'],
		}),
	],
}
