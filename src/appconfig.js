import homeHtml from './views/home/home-tmpl.html';
import talentHtml from './views/talent/talent-tmpl.html';
import aboutHtml from './views/about/about-tmpl.html';
import contactHtml from './views/contact/contact-tmpl.html';
import adminLogin from './views/admin/login/login-tmpl.html';
import adminDashboard from './views/admin/dashboard/dashboard-tmpl.html';
import uploadHtml from './views/upload/upload-tmpl.html';

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
			template: homeHtml,
			controller: 'HomeController',
			controllerAs: 'homeCtrl'
		} )
		.state( 'talent', {
			url: '/:category/:talentid/:talentname',
			template: talentHtml,
			controller: 'TalentController',
			controllerAs: 'talentCtrl',
			resolve: {
				talentPhotos: function( $stateParams, talentService ) {
					return talentService.getTalentPhotos( $stateParams.talentid );
				}
			}
		} )
		.state( 'about', {
			url: '/about',
			template: aboutHtml
		} )
		.state( 'contact', {
			url: '/contact',
			template: contactHtml
		} )
		.state( 'upload', {
			url: '/secretplacewhereicanuploadimages',
			template: uploadHtml,
			controller: 'UploadController',
			controllerAs: 'uploadCtrl',
			resolve: {
				allTalent: function( talentService ) {
					return talentService.getAllTalent();
				}
			}
		} )

		// ADMIN STATES
		.state( 'adminLogin', {
			url: '/admin/login',
			template: adminLogin
		} )
		.state( 'adminDashboard', {
			url: '/admin/dashboard',
			template: adminDashboard
		} );

}
