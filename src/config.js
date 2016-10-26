import talentTmpl from './views/talent/talent-tmpl.html';

config.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
		'$compileProvider'
	];

export default function config( $stateProvider, $urlRouterProvider, $compileProvider ) {

	// https://docs.angularjs.org/guide/production
	$compileProvider.debugInfoEnabled( false );

	$urlRouterProvider.otherwise( '/' );

		$stateProvider
			.state( 'home', {
				url: '/',
				template: `<h2>HOME</h2>`
			} )
			.state( 'talent', {
				url: '/:category/:id/:name',
				template: talentTmpl
			} )
			.state( 'about', {
				url: '/about',
				templateUrl: './views/about/about-tmpl.html'
			} )
			.state( 'contact', {
				url: '/contact',
				templateUrl: './views/contact/contact-tmpl.html'
			} );

}
