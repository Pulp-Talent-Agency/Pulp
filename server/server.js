'use strict';

/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

const express = require( `express` );
const mongoose = require( `mongoose` );
const bodyParser = require( `body-parser` );
const passport = require( `passport` );
const FacebookStrategy = require( 'passport-facebook' ).Strategy;
const session = require( `express-session` );




/*------------------------------------*\
  #MY DEPENDENCIES
\*------------------------------------*/

const config = require( `./config.js` );





/*------------------------------------*\
  #APP
\*------------------------------------*/

const app = express();

app.use( express.static( `./dist` ) ) ;
app.use( express.static( `${__dirname}/../node_modules` ) ) ;
app.use( bodyParser.json( { limit: '50mb' } ) );
app.use( bodyParser.urlencoded( { limit: '50mb', extended: true } ) );
app.use( session( config.session ) );
app.use( passport.initialize() );
app.use( passport.session() );







/*------------------------------------*\
  #PASSPORT
\*------------------------------------*/

passport.use( new FacebookStrategy( config.facebook, function( token, refreshToken, profile, done ) {
  return done( null, profile );
} ) );

// passport.serializeUser( function( user, done ) {
//   done( null, user._id );
// } );
//
// passport.deserializeUser( function( _id, done ) {
//   User.findById( _id, function( err, user ) {
//     done( err, user );
//   } );
// } );





/*------------------------------------*\
  #DATABASE
\*------------------------------------*/

mongoose.connect( config.mongo.mongoURI, function ( err, res ) {
	if ( err ) console.log( 'Error connecting to database' )
	else console.log( 'Pulp database now connected!' )
} );





/*------------------------------------*\
  #ROUTES
\*------------------------------------*/

require( './masterRoutes.js' )( app );




/*------------------------------------*\
  #LISTEN
\*------------------------------------*/

app.listen( config.port, function() {
	console.log( 'Pulp Express server listening on port', config.port );
} );
