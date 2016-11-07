const passport = require( 'passport' );
const FacebookStrategy = require( 'passport-facebook' ).Strategy;
const userCtrl = require( './userCtrl.js' );

module.exports = ( app ) => {

	app.get( '/auth/facebook', passport.authenticate( 'facebook' ) );
	app.get( '/auth/facebook/callback', userCtrl.facebookAuthenticate );

	passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

}
