( function() {

	angular.module( 'PulpComponents' )
		.controller( 'sideNavCtrl', sideNavCtrl );





	/****************************************************************************\
		# Controller Definition
	\****************************************************************************/

	function sideNavCtrl( talentService ) {
		var vm = this;
		

		talentService.getAllTalent()
			.then( function( menuItems ) {
				vm.menuItems = menuItems;
			} );

		vm.toggleSideNav = toggleSideNav;





		/****************************************************************************\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\****************************************************************************/

		function toggleSideNav() {
			var $sideNav = $( '.sidenav' );

			if( $sideNav.css( 'left' ) === '0px' ) {
				$sideNav.animate( { left: '-50rem' }, 200, 'swing' );
			}
			else {
				$sideNav.animate( { left: '0' }, 200, 'swing' )
			}
		}

	}

	sideNavCtrl.$inject = [ 'talentService' ];

} )();
