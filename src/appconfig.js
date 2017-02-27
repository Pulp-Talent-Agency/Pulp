import homeHtml from './views/home/home-tmpl.html';
import aboutHtml from './views/about/about-tmpl.html';
import contactHtml from './views/contact/contact-tmpl.html';

config.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
		'$compileProvider'
	];

export default function config( $stateProvider, $urlRouterProvider, $compileProvider ) {

	// https://docs.angularjs.org/guide/production
	$compileProvider.debugInfoEnabled( false );

	$stateProvider
		.state( 'home', {
			url: '/',
			template: homeHtml,
			controller: 'HomeController',
			controllerAs: 'homeCtrl'
		} )
		.state( 'about', {
			url: '/about',
			template: aboutHtml,
			controller: 'AboutController',
			controllerAs: 'aboutCtrl'
		} )
		.state( 'contact', {
			url: '/contact',
			template: contactHtml,
			controller: 'ContactController',
			controllerAs: 'contactCtrl'
		} );

	$urlRouterProvider.otherwise( '/' );


}
