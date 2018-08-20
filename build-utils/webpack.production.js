const MinicCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = () => ({
	// output: {
	// 	filename: '[chunkhash].js'
	// },
	plugins: [
		new MinicCssExtractPlugin(),
		new WebpackBundleAnalyzer(),
		new CompressionWebpackPlugin()
	],
	module: {
		rules: [
			{ test: /\.css$/,
				use: [MinicCssExtractPlugin.loader, 'css-loader']
			}
		]
	}
});