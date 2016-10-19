( function() {

	angular.module( 'PulpComponents', [] )

		.config( config );





	/****************************************************************************\
		# config Definition
	\****************************************************************************/

	function config( ) {

		// https://docs.angularjs.org/guide/production
		$compileProvider.debugInfoEnabled( false );

	}

} )();
