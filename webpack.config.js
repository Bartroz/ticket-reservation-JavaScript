const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.js',
	
	},
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
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
}
