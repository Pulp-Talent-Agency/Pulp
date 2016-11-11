const Talent = require( './Talent.js' );

module.exports = {

	postNewTalent: function( req, res ) {
		Talent.create( req.body, function( err, talent ) {
			if( err ) {
				return res.status( 500 ).json( err );
			} else {
				return res.status( 200 ).json( talent );
			}
		} );
	},

	getAllTalent: function( req, res ) {
		Talent.find( {} )
			.populate( 'photos' )
			.exec( function( err, talents ) {
				if( err ) {
					return res.status( 500 ).json( err );
				} else {
					return res.status( 200 ).json( talents );
				}
			} );
	},

	updateExistingTalent: function(arguments) {
		// body
	},

	deleteExistingTalent: function(arguments) {
		// body
	}

}
