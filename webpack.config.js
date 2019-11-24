const path = require( 'path' )

module.exports = {
	entry  : './src/app.js' ,
	output : {
		path     : path.resolve( __dirname , 'public' ) ,
		filename : 'bundle.js'
	} ,
	mode : 'development' ,
	// module : {
	// 	rules : [
	// 	  {test : /\.js$/ , exclude : /node_modules/ , loader : 'babel-loader'}
	// 	]
	// }

	module : {
		rules : [
			{
				loader  : 'babel-loader' ,
				test    : /\.j(s || sx)$/ ,
				exclude : /node_modules /
			}
		]
	}

}
