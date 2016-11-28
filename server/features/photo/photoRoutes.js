const photoCtrl = require( './photoCtrl.js' );

module.exports = function( app ) {

	app.get( '/api/test', photoCtrl.test );
	app.get( '/api/photo', photoCtrl.getAllPhotos );

	app.get( '/api/photo/featured', photoCtrl.getAllFeaturedPhotos );
	app.get( '/api/photo/:talentId', photoCtrl.getAllTalentPhotos );

}
