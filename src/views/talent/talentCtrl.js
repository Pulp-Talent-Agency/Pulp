TalentController.$inject = [
	'$stateParams',
	'talentPhotos'
];

function TalentController( $stateParams, talentPhotos ) {

	const vm = this;

	vm.bricks = talentPhotos;
	vm.showModalOfPhoto = showModalOfPhoto;

	vm.talent = {
		name: $stateParams.talentname.split( '_' ).join( ' ' ),
		dept: $stateParams.category
	}





	/****************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\****************************************************************************/

	function showModalOfPhoto( photo ) {
		vm.selectedPhoto = photo;
	}





	/****************************************************************************\
		# Helper functions
	\****************************************************************************/

	// Code here

}

export default TalentController;
