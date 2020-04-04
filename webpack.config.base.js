const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	]
};
