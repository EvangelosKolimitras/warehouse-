const path = require( 'path' )
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry  : './src/app.js' ,
	output : {
		path     : path.resolve( __dirname , './public' ) ,
		filename : './src/bundle.js'
	} ,

	module : {
		rules : [
			{
				loader  : 'babel-loader' ,
				test    : /\.js$/ ,
				exclude : /node_modules/
			}
		]
	},

	plugins: [
		new HTMLWebpackPlugin({
			title: "Title",
			template: "src/index.html",
			filename:"index.html"
		}),
	],

	devServer: {
		contentBase: "./public",
		hot: true,
		port : 9999
	},

	mode : 'development',
	devtool: "cheap-module-eval-source-map"
}
