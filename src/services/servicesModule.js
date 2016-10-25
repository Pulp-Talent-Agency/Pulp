import angular from 'angular';
import talentService from './talentService/talentService.js';

export default angular.module( 'PulpServices', [] )
		.config( config )
		.service( 'talentService', talentService );

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
