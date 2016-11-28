const config = require( './../../config.js' );
const contentful = require('contentful');

const contentfulSpaceId = process.env.CONTENTFUL_SPACEID || config.contentful.space;
const contentfulAccessToken = process.env.CONTENTFUL_ACCESSTOKEN || config.contentful.accessToken;

const client = contentful.createClient( {
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken
} );

module.exports = {
	getAllPhotos: getAllPhotos,
	getAllFeaturedPhotos: getAllFeaturedPhotos,
	getAllTalentPhotos: getAllTalentPhotos
}





/******************************************************************************\
	All general logic goes above this comment.
	All detailed logic(function definitions) goes below this comment.
\******************************************************************************/

function getAllPhotos( req, res ) {
	client.getEntries( {
  	'content_type': 'photos'
	} )
		.then(function ( photos ) {
		  return res.status( 200 ).send( photos );
		} )
		.catch( function( error ) {
			return res.status( 500 ).send( error );
		} );
}

function getAllFeaturedPhotos( req, res ) {
	client.getEntries( {
  	'content_type': 'photos',
		'fields.isFeatured': true
	} )
		.then(function ( featuredPhotos ) {
		  return res.status( 200 ).send( featuredPhotos );
		} )
		.catch( function( error ) {
			return res.status( 500 ).send( error );
		} );
}

function getAllTalentPhotos( req, res ) {
	client.getEntries( {
  	'content_type': 'photos',
		'fields.talent.sys.id': req.params.talentId
	} )
		.then(function ( talentPhotos ) {
		  return res.status( 200 ).send( talentPhotos );
		} )
		.catch( function( error ) {
			return res.status( 500 ).send( error );
		} );
}





/******************************************************************************\
	# Helper functions
\******************************************************************************/
