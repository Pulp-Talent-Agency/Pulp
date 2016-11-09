'use strict';

/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

const express = require( `express` );
const mongoose = require( `mongoose` );
const bodyParser = require( `body-parser` );
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
