import $ from 'jquery';

sideNavCtrl.$inject = [
	'$rootScope',
	'talentService',
	'navService'
];

function sideNavCtrl( $rootScope, talentService, navService ) {
	var vm = this;

	$rootScope.$on( '$stateChangeStart',
		function( event, toState, toParams, fromState, fromParams, options ){
				if( $( '.sidenav' ).css( 'left' ) === '0px' ) {
					navService.toggleSideNav( vm.menuItems );
				}
		} )

	talentService.getMenuItems()
		.then( function( menuItems ) {
			vm.menuItems = menuItems;
		} );


	vm.toggleSideNav = navService.toggleSideNav;
	vm.closeOthers = navService.closeOthers;

}

export default sideNavCtrl;
