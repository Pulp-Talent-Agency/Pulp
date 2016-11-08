import sideNav from './sidenav/sidenav.js';
import headerNav from './headernav/headernav.js';

export default angular.module( 'PulpComponents', [] )
	.config( config )
	.component( 'sideNav', sideNav )
	.component( 'headerNav', headerNav );

config.$inject = [
	'$compileProvider'
];





/******************************************************************************\
	# config Definition
\******************************************************************************/

function config( $compileProvider ) {

	// https://docs.angularjs.org/guide/production
	$compileProvider.debugInfoEnabled( false );

}
