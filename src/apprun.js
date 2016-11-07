import $ from 'jquery';

run.$inject = [
		'$rootScope'
	];

export default function run( $rootScope ) {

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		$( '.masonry-brick' ).hover( function() {

		} );
	}

	$rootScope.$on('$stateChangeSuccess', function() {
  	document.body.scrollTop = document.documentElement.scrollTop = 0;
	});

}
