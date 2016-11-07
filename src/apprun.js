run.$inject = [
		'$rootScope'
	];

export default function run( $rootScope ) {

	$rootScope.$on('$stateChangeSuccess', function() {
  	document.body.scrollTop = document.documentElement.scrollTop = 0;
	});

}
