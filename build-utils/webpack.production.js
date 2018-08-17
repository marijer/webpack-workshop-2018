const MinicCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
	// output: {
	// 	filename: '[chunkhash].js'
	// },
	plugins: [
		new MinicCssExtractPlugin()
	],
	module: {
		rules: [
			{ test: /\.css$/,
				use: [MinicCssExtractPlugin.loader, 'css-loader']
			}
		]
	}
});