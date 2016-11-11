import $ from 'jquery';

UploadController.$inject = [
	'$scope',
	'$state',
	'photoService',
	'allTalent'
];

function UploadController( $scope, $state, photoService, allTalent ) {

	const vm = this;

	vm.talents = allTalent;
	vm.uploadPhoto = uploadPhoto;

	$( '#file' ).on( 'change', function ( changeEvent ) {
		var reader = new FileReader();

		reader.onload = function( loadEvent ) {

			const file = loadEvent.target.result;

			$( '.preview-image' )[ 0 ].src = file;

			vm.file = {
				base64: file,
				originalFilename: changeEvent.target.files[ 0 ].name
			}
		}

		reader.readAsDataURL( changeEvent.target.files[ 0 ] );
	} );





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	function uploadPhoto( file, talent, projectTitle ) {
		file.projectTitle = projectTitle;
		photoService.uploadToAWS( file, talent )
			.then( function( response ) {
				$state.go( 'home' );
			} );
	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	// CODE HERE

}

export default UploadController;
