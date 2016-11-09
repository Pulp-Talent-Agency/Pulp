TalentController.$inject = [
	'$stateParams',
	'photoService'
];

function TalentController( $stateParams, photoService ) {

	const vm = this;

	vm.showModalOfPhoto = showModalOfPhoto;

	vm.talent = {
		name: $stateParams.name.split( '_' ).join( ' ' ),
		dept: $stateParams.category
	}

	photoService.getAllPhotos()
		.then( function( photos ) {
			photos.forEach( function( val, idx, arr ) {
				val.desc = 'Project Name';
			} );
			vm.bricks = photos;
		} );





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	function showModalOfPhoto( photo ) {
		vm.selectedPhoto = photo;
	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	// Code here

}

export default TalentController;
