import $ from 'jquery';

navService.$inject = [];

function navService() {

	window.onresize = function() {
		console.log( window.outerWidth );
	}

	return {
		toggleSideNav: toggleSideNav,
		closeOthers: closeOthers
	};





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	function toggleSideNav( menuItems ) {
		var $sideNav = $( '.sidenav' );

		if( $sideNav.css( 'left' ) === '0px' ) {
			$sideNav.animate( { left: '-100rem' }, 200, 'swing' );
		}
		else {
			$sideNav.animate( { left: '0' }, 200, 'swing' );
		}
		closeOthers( menuItems );
	}

	function toggleHeaderSubNav( menuItems ) {
		var $headerNav = $( '.headernav' );

		if( $headerNav.css( 'left' ) === '0px' ) {
			$headerNav.animate( { left: '-100rem' }, 200, 'swing' );
		}
		else {
			$headerNav.animate( { left: '0' }, 200, 'swing' );
		}
		closeOthers( menuItems );
	}

	function closeOthers( menuItems ) {
		for( var i = 0; i < menuItems.length; i++ ) {
			if( menuItems[ i ].open ) {
				menuItems[ i ].open = false
			}
		}
	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/



}

export default navService;
