const path = require( 'path' )

module.exports = {
	entry  : './src/app.js' ,
	output : {
		path     : path.resolve( __dirname , 'public' ) ,
		filename : 'bundle.js'
	} ,

	module : {
		rules : [
			{
				loader  : 'babel-loader' ,
				test    : /\.js$/ ,
				exclude : /node_modules /
			}
		]
	},

	devServer: {
		contentBase: "./public",
		hot: true
	},

	mode : 'development'
}
