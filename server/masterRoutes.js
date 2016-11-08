const talentRoutes = require( './features/talent/talentRoutes.js' );
const userRoutes = require( './features/user/userRoutes.js' );
const photoRoutes = require( './features/photo/photoRoutes.js' );

module.exports = function( app ) {

	talentRoutes( app );

	userRoutes( app );

	photoRoutes( app );

}
