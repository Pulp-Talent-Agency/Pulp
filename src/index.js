( function() {

	angular.module( 'Pulp', [
		'ui.router',
		'PulpServices',
		'PulpComponents'
	] )
		.config( config );

	function config( $stateProvider, $urlRouterProvider, $compileProvider ) {

		$compileProvider.debugInfoEnabled( false );

		$urlRouterProvider.otherwise( '/' );

		$stateProvider
			.state( 'home', {
				url: '/',
				template: `<h2>HOME</h2>`
			} )
			.state( 'about', {
				url: '/about',
				template: `<h2>ABOUT</h2>`
			} )
			.state( 'contact', {
				url: '/contact',
				template: `<h2>CONTACT</h2>`
			} );

	}

	config.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
		'$compileProvider'
	];

} )();
