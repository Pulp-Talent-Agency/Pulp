( function() {

	angular.module( 'Pulp', [ 'ui.router' ] )
		.config( config );

	function config( $stateProvider, $urlRouterProvider, $compileProvider ) {

		$compileProvider.debugInfoEnabled( false );

		$urlRouterProvider.otherwise( '/' );

		$stateProvider
			.state( 'home', {
				url: '/'
			} );

	}

	config.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
		'$compileProvider'
	];

} )();
