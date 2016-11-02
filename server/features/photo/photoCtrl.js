const Photo = require( './Photo.js' );
const Talent = require( './Talent.js' );

module.exports = {

	postNewPhoto: function( req, res ) {
		// req.body should have talent's id
		Photo.create( req.body, function( err, talent ) {
			if( err ) {
				return res.json( err );
			} else {
				// Push to talent photos
			}
		} );
	},

	getAllPhotos: function( req, res ) {
		Photo.find( {}, function( err, talents ) {
			if( err ) {
				return res.json( err );
			} else {
				return res.json( talents );
			}
		} );
	}

}
