const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.typescript = {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx']
	}
};

module.exports.tslint = {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				enforce: 'pre',
				loader: 'tslint-loader'
			}
		]
	}
};

module.exports.html = {
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};

module.exports.devServer = {
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		watchOptions: {
			poll: true
		},
		hot: true,
		compress: true,
		overlay: {
			errors: true,
			warnings: true
		}
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports.setEnvVar = (name, value) => {
	return {
		plugins: [
			new webpack.DefinePlugin({
				[name]: JSON.stringify(value)
			})
		]
	};
};
