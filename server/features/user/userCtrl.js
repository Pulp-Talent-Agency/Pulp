const passport = require( 'passport' );
const User = require( './User.js' );

module.exports = {

	facebookAuthenticate: ( req, res, next ) => {
		passport.authenticate( 'facebook', function( err, user, info ) {
	    if ( err ) { return next( err ); }
	    if ( !user ) { return res.redirect( '/#/admin/login' ); }



			User.find( { facebook: { id: user.id } }, ( error, admin ) => {
				console.log(error, admin);
				if( error ) { return next( error ); }
				// if( admin === [] ) {

				// }


				// if( admin ) { console.log(admin); }
				else {
					req.logIn( user, function( err ) {
			      if ( err ) { return next( err ); }
			      return res.redirect( '/#/admin/dashboard' );
			    } );
				}
			} );

	  } )( req, res, next );
	}

}
