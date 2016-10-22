const talentCtrl = require( './talentCtrl.js' );

module.exports = function( app ) {

	app.post( '/api/talent', talentCtrl.postNewTalent );
	app.get( '/api/talent', talentCtrl.getAllTalent );

	app.put( '/api/talent/:id', talentCtrl.updateExistingTalent );
	app.delete( '/api/talent/:id', talentCtrl.deleteExistingTalent );

}