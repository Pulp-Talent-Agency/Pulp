import talentHtml from './views/talent/talent-tmpl.html';
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

	$urlRouterProvider.otherwise( '/' );

	$stateProvider
		.state( 'home', {
			url: '/',
			template: `<h2>HOME</h2>`
		} )
		.state( 'talent', {
			url: '/:category/:id/:name',
			template: talentHtml
		} )
		.state( 'about', {
			url: '/about',
			template: aboutHtml
		} )
		.state( 'contact', {
			url: '/contact',
			template: contactHtml
		} );

}
