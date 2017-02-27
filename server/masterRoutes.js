const talentRoutes = require( './features/talent/talentRoutes.js' );
const photoRoutes = require( './features/photo/photoRoutes.js' );
const companyinfoRoutes = require( './features/companyinfo/companyinfoRoutes.js' );

module.exports = function( app ) {

	talentRoutes( app );
	photoRoutes( app );
	companyinfoRoutes( app );

}
