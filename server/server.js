'use strict';

/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

const express = require( `express` );
const mongoose = require( `mongoose` );
const bodyParser = require( `body-parser` );
const passport = require( `passport` );
const FacebookStrategy = require( `passport-facebook` ).Strategy;
const session = require( `express-session` );





/*------------------------------------*\
  #MY DEPENDENCIES
\*------------------------------------*/

const config = require( `./config.js` );





/*------------------------------------*\
  #VARIABLES
\*------------------------------------*/

const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI || config.mongo.mongoURI;
const sessionSecret = process.env.SESSION_SECRET || config.session.secret;
const facebookClientID = process.env.FACEBOOK_CLIENT_ID || config.facebook.clientID;
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET || config.facebook.clientSecret;
const facebookCallbackUrl = process.env.FACEBOOK_CALLBACK_URL || config.facebook.callbackURL;





/*------------------------------------*\
  #APP
\*------------------------------------*/

const app = express();

app.use( express.static( `./dist` ) ) ;
app.use( express.static( `${__dirname}/../node_modules` ) ) ;
app.use( bodyParser.json( { limit: '50mb' } ) );
app.use( bodyParser.urlencoded( { limit: '50mb', extended: true } ) );
app.use( session( {
	secret: sessionSecret,
	resave: true,
	saveUninitialized: true
} ) );
app.use( passport.initialize() );
app.use( passport.session() );







/*------------------------------------*\
  #PASSPORT
\*------------------------------------*/

passport.use( new FacebookStrategy( {
	clientID: facebookClientID,
	clientSecret: facebookClientSecret,
	callbackURL: facebookCallbackUrl
}, function( token, refreshToken, profile, done ) {
  return done( null, profile );
} ) );





/*------------------------------------*\
  #DATABASE
\*------------------------------------*/

mongoose.connect( mongoURI, function ( err, res ) {
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

app.listen( port, function() {
	console.log( 'Pulp Express server listening on port', port );
} );
