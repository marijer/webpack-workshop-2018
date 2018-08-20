const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({mode = 'production', preset= []}) => {
	return webpackMerge({
		mode: mode,
		output: {
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.jpe?g/, 
					use: [{
						loader: 'url-loader', 
						options:{
							limit: 5000
						}
					}]
				},

			],			
		},
		plugins: [
			new htmlWebpackPlugin(),
			new webpack.ProgressPlugin()
		]
	},
	modeConfig(mode))
};
