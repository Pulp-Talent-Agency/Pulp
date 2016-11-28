const talentCtrl = require( './talentCtrl.js' );

module.exports = function( app ) {

	app.get( '/api/talent', talentCtrl.getAllTalent );

}
