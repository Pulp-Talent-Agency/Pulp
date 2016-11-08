const Photo = require( './Photo.js' );
const Talent = require( './Talent.js' );

module.exports = {

	postNewPhoto: function( req, res ) {
		Photo.create( req.body, function( err, photo ) {
			if( err ) {
				return res.status( 500 ).json( err );
			} else {
				return res.status( 200 ).json( photo );
			}
		} );
	},

	getAllPhotos: function( req, res ) {
		Photo.find( {}, function( err, photos ) {
			if( err ) {
				return res.json( err );
			} else {
				return res.json( photos );
			}
		} );
	}

}
