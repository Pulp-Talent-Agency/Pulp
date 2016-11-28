const config = require( './../../config.js' );
const CircularJSON = require('circular-json'); // https://github.com/WebReflection/circular-json
const contentful = require('contentful'); // https://contentful.github.io/contentful.js/contentful/3.7.1/

const contentfulSpaceId = process.env.CONTENTFUL_SPACEID || config.contentful.space;
const contentfulAccessToken = process.env.CONTENTFUL_ACCESSTOKEN || config.contentful.accessToken;

const client = contentful.createClient( {
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken
} );

module.exports = {
	getAllTalent: getAllTalent
};





/******************************************************************************\
	All general logic goes above this comment.
	All detailed logic(function definitions) goes below this comment.
\******************************************************************************/

function getAllTalent( req, res ) {
	client.getEntries( {
		'content_type': 'talent'
	} )
		.then( function( talents ) {
			return res.status( 200 ).send( CircularJSON.stringify( talents ) );
		} )
		.catch( function( error ) {
			return res.status( 500 ).send( error );
		} );
}





/******************************************************************************\
	# Helper functions
\******************************************************************************/
