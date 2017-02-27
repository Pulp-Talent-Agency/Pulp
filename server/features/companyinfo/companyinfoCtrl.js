const config = require( './../../config.js' );
const contentful = require( 'contentful' ); // https://contentful.github.io/contentful.js/contentful/3.7.1/

const contentfulSpaceId = process.env.CONTENTFUL_SPACEID || config.contentful.space;
const contentfulAccessToken = process.env.CONTENTFUL_ACCESSTOKEN || config.contentful.accessToken;

const client = contentful.createClient( {
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken
} );





module.exports = {
	getAboutText: getAboutText,
	getContactInfo: getContactInfo
};





/******************************************************************************\
	All general logic goes above this comment.
	All detailed logic(function definitions) goes below this comment.
\******************************************************************************/

function getAboutText( req, res ) {

	client.getEntry( '6jwFytOZrisW2kmM2GqAwo' )
		.then( function( response ) {
			res.status( 200 ).send( response );
		} )
		.catch( function( err ) {
			res.status( 500 ).send( err );
		} );

}

function getContactInfo( req, res ) {

	client.getEntry( 'wQMjSvO1FIkMMgG8wkssg' )
		.then( function( response ) {
			res.status( 200 ).send( response );
		} )
		.catch( function( err ) {
			res.status( 500 ).send( err );
		} );

}
