( function() {

	angular.module( 'PulpComponents', [] )

		.config( config );





	/****************************************************************************\
		# config Definition
	\****************************************************************************/

	function config( $compileProvider ) {

		// https://docs.angularjs.org/guide/production
		$compileProvider.debugInfoEnabled( false );

	}

	config.$inject = [
		'$compileProvider'
	];

} )();
