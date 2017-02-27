HomeController.$inject = [
	'$q',
	'$http',
	'photoService',
	'dataService'
];

function HomeController( $q, $http, photoService, dataService ) {

	const vm = this;

	photoService.getAllFeaturedPhotos()
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
