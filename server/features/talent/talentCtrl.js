const Talent = require( './Talent.js' );

module.exports = {

	postTalent: function( req, res ) {
		Talent.create( req.body, function( err, talent ) {
			if( err ) {
				return res.json( err );
			} else {
				return res.json( talent );
			}
		} );
	},

	getAllTalent: function( req, res ) {
		Talent.find( {}, function( err, talents ) {
			if( err ) {
				return res.json( err );
			} else {
				return res.json( talents );
			}
		} );
	}

}
