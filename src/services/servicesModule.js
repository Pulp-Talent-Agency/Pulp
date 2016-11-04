// import angular from 'angular';
import talentService from './talentService/talentService.js';
import navService from './navService/navService.js';

export default angular.module( 'PulpServices', [] )
		.config( config )
		.service( 'talentService', talentService )
		.service( 'navService', navService );

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
