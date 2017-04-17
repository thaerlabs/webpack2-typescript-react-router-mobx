const merge = require('webpack-merge');
const path = require('path');
const parts = require('./webpack/parts');

const TARGET = process.env.npm_lifecycle_event;

const commonConfig = merge(
	{
		entry: {
			app: './src/index.ts'
		},
		output: {
			filename: '[name].bundle.js',
			path: path.join(__dirname, 'build')
		},
		resolve: {
			extensions: ['.js']
		}
	},
	parts.typescript,
	parts.tslint,
	parts.html
);

const getConfig = TARGET => {
	switch (TARGET) {
		case 'build':
			return merge(
				commonConfig,
				parts.setEnvVar('process.env.NODE_ENV', 'production')
			);
		case 'start':
		default:
			return merge(
				commonConfig,
				{
					devtool: 'source-map'
				},
				parts.setEnvVar('process.env.NODE_ENV', 'development'),
				parts.devServer
			);
	}
};

module.exports = getConfig(TARGET);
