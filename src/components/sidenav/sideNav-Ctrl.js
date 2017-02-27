import $ from 'jquery';

sideNavCtrl.$inject = [
	'$rootScope',
	'navService'
];

function sideNavCtrl( $rootScope, navService ) {
	
	var vm = this;

	$rootScope.$on( '$stateChangeStart',
		function( event, toState, toParams, fromState, fromParams, options ){
			var $sidenav = document.getElementsByClassName( 'sidenav' )[ 0 ];
			if( $sidenav.style.left === '0rem' ) {
				navService.toggleSideNav( vm.menuItems );
			}
		} );

}

export default sideNavCtrl;
