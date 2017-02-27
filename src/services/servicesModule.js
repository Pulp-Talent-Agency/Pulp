import navService from './navService/navService.js';
import photoService from './photoService/photoService.js';
import dataService from './dataService/dataService.js';

export default angular.module( 'PulpServices', [] )
	.config( config )
	.factory( 'navService', navService )
	.factory( 'photoService', photoService )
	.factory( 'dataService', dataService );

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
