const photoCtrl = require( './photoCtrl.js' );

module.exports = function( app ) {

	app.post( '/api/photo', photoCtrl.postNewPhoto );
	app.get( '/api/photo', photoCtrl.getAllPhotos );

}
