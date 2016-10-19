( function() {

	angular.module( 'PulpComponents' )
		.controller( 'sideNavCtrl', sideNavCtrl );
	
	sideNavCtrl.$inject = [
		'talentService'
	];





	/****************************************************************************\
		# sideNavCtrl Definition
	\****************************************************************************/

	function sideNavCtrl( talentService ) {
		var vm = this;
		
		talentService.getMenuItems()
			.then( function( menuItems ) {
				vm.menuItems = menuItems;
			} );

		vm.toggleSideNav = toggleSideNav;
		vm.closeOthers = closeOthers;



		/****************************************************************************\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\****************************************************************************/

		function toggleSideNav() {
			var $sideNav = $( '.sidenav' );

			if( $sideNav.css( 'left' ) === '0px' ) {
				$sideNav.animate( { left: '-100rem' }, 200, 'swing' );
			}
			else {
				$sideNav.animate( { left: '0' }, 200, 'swing' );
			}
			closeOthers();
		}

		function closeOthers() {
			for( var i = 0; i < vm.menuItems.length; i++ ) {
				if( vm.menuItems[ i ].open ) {
					vm.menuItems[ i ].open = false
				}
			}
		}

	}

} )();
