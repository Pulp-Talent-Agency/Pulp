import hairTmpl from './views/hair/hair-tmpl.html';
import hairTalentTempl from './views/hair/talent/talent-tmpl.html';
import makeupTmpl from './views/makeup/makeup-tmpl.html';
import makeupTalentTempl from './views/makeup/talent/talent-tmpl.html';
import casting from './views/casting/casting-tmpl.html';
import castingTalentTempl from './views/casting/talent/talent-tmpl.html';
import setdesign from './views/setdesign/setdesign-tmpl.html';
import setdesignTalentTempl from './views/setdesign/talent/talent-tmpl.html';
import styling from './views/styling/styling-tmpl.html';
import stylingTalentTempl from './views/styling/talent/talent-tmpl.html';

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
			.state( 'hair', {
				url: '/hair',
				template: hairTmpl
			} )
				.state( 'hair.talent', {
					url: '/hair/:id/:name',
					parent: 'hair',
					template: hairTalentTempl
				} )
			.state( 'make up', {
				url: '/makeup',
				template: '<h2>MAKE UP PARENT</h2><ui-view></ui-view>'
			} )
				.state( 'make up.talent', {
					url: '/makeup/:id/:name',
					parent: 'make up',
					template: `<h2>MAKE UP CHILD</h2>`
				} )
			.state( 'styling', {
				url: '/styling',
				template: '<h2>STYLING PARENT</h2><ui-view></ui-view>'
			} )
				.state( 'styling.talent', {
					url: '/styling/:id/:name',
					parent: 'styling',
					template: `<h2>STYLING CHILD</h2>`
				} )
			.state( 'set design', {
				url: '/setdesign',
				template: '<h2>SET DESIGN PARENT</h2><ui-view></ui-view>'
			} )
				.state( 'set design.talent', {
					url: '/setdesign/:id/:name',
					parent: 'set design',
					template: `<h2>SET DESIGN CHILD</h2>`
				} )
			.state( 'casting', {
				url: '/casting',
				template: '<h2>CASTING PARENT</h2><ui-view></ui-view>'
			} )
				.state( 'casting.talent', {
					url: '/casting/:id/:name',
					parent: 'casting',
					template: `<h2>CASTING CHILD</h2>`
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
