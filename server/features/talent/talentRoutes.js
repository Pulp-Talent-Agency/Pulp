const talentCtrl = require( './talentCtrl.js' );

module.exports = function( app ) {

	app.post( '/api/talent', talentCtrl.postTalent );
	app.get( '/api/talent', talentCtrl.getAllTalent );

}
