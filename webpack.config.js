var path = require( 'path' );

module.exports = {
	entry: {
		pulp: path.join( __dirname, 'src' )
	},
	output: {
		path: path.join( __dirname, '/dist/bundle' ),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: /src/,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				include: /src/,
				loaders: [ "style", "css", "autoprefixer", "sass" ]
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				// IMAGES
			  test: /\.(png|jpg|gif|svg)$/,
			  loader: "file-loader?name=assets/icons/[name].[ext]"
			}
		]
	}
};
