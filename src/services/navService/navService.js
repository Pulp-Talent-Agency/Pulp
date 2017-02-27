import $ from 'jquery';

navService.$inject = [];

function navService() {

	return {
		toggleSideNav: toggleSideNav
	};





	/****************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\****************************************************************************/

	function toggleSideNav( menuItems ) {
		var $sideNav = document.getElementsByClassName( 'sidenav' )[ 0 ];

		if( $sideNav.style.left === '0rem' ) {
			document.getElementById( 'hamburger-symbol' ).innerHTML = '☰';
			moveAnimation( $sideNav, 'left', 0, -50, 'rem' );
		}
		else {
			document.getElementById( 'hamburger-symbol' ).innerHTML = '✕';
			moveAnimation( $sideNav, 'left', -50, 0, 'rem' );
		}
	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	function moveAnimation( elem, prop, startValue, endValue, unit ) {

    function frame() {
			if( startValue < endValue ) {
				startValue++;
				startAnimation();
			} else {
				startValue--;
				startAnimation();
			}
			function startAnimation() {
	      elem.style[ prop ] = startValue + unit; // show frame

	      if ( startValue === endValue ) { // check finish condition
	        clearInterval( id );
				}
			}
    }

    var id = setInterval( frame, 5 ); // draw every 10ms
  }

}

export default navService;
