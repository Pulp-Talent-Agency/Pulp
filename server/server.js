'use strict';


/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

var express = require( `express` );
var mongoose = require( `mongoose` );
var bodyParser = require( `body-parser` );
var passport = require( `passport` );
var session = require( `express-session` );





/*------------------------------------*\
  #MY DEPENDENCIES
\*------------------------------------*/

var config = require( `./config.js` );





/*------------------------------------*\
  #APP
\*------------------------------------*/

var app = express();

app.use( express.static( `./public` ) ) ;
app.use( express.static( `${__dirname}/../node_modules` ) );
app.use( bodyParser.json( { limit: '50mb' } ) );
app.use( bodyParser.urlencoded( { limit: '50mb', extended: true } ) );
app.use( session( config.session ) );
app.use( passport.initialize() );
app.use( passport.session() );







/*------------------------------------*\
  #PASSPORT
\*------------------------------------*/

passport.serializeUser( function( user, done ) {
  done( null, user._id );
} );
passport.deserializeUser( function( _id, done ) {
  User.findById( _id, function( err, user ) {
    done( err, user );
  } );
} );





/*------------------------------------*\
  #DATABASE
\*------------------------------------*/

mongoose.connect( config.mongo.localmongoURI, function ( err, res ) {
	if ( err ) console.log( 'Error connecting to database' )
	else console.log( 'Yente database now connected!' )
} );





/*------------------------------------*\
  #LISTEN
\*------------------------------------*/

app.listen( config.port, function() {
	console.log( 'Pulp Express server listening on port', config.port );
} );
