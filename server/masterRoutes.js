const talentRoutes = require( './features/talent/talentRoutes.js' );
const userRoutes = require( './features/user/userRoutes.js' );

module.exports = function( app ) {

	talentRoutes( app );

	userRoutes( app );

}
