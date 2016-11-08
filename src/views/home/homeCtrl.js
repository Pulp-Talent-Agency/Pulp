HomeController.$inject = [
	'$q',
	'$http',
	'photoService'
];

function HomeController( $q, $http, photoService ) {

	const vm = this;

	photoService.getAllPhotos()
		.then( function( photos ) {
			vm.bricks = photos;
		} );





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	// Code here





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	// Code here

}

export default HomeController;
