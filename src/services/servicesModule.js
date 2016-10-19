( function() {

	angular.module( 'PulpServices', [] )
		.config( config );
	
	config.$inject = [
		'$compileProvider'
	];





	/****************************************************************************\
		# config Definition
	\****************************************************************************/

	function config( $compileProvider ) {

		// https://docs.angularjs.org/guide/production
		$compileProvider.debugInfoEnabled( false );

	}

} )();
