import talentService from './talentService/talentService.js';
import navService from './navService/navService.js';
import photoService from './photoService/photoService.js';

export default angular.module( 'PulpServices', [] )
	.config( config )
	.factory( 'talentService', talentService )
	.factory( 'navService', navService )
	.factory( 'photoService', photoService );

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
