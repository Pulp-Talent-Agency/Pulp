import $ from 'jquery';

UploadController.$inject = [
	'$scope',
	'$state',
	'photoService'
];

function UploadController( $scope, $state, photoService ) {

	const vm = this;

	vm.uploadPhoto = uploadPhoto;

	$( '#file' ).on( 'change', function ( changeEvent ) {
		var reader = new FileReader();

		reader.onload = function( loadEvent ) {

			const file = loadEvent.target.result;
			console.log(file);

			$( '.preview-image' )[ 0 ].src = file;
			vm.file = photoService.createObjForAWS( file, changeEvent.target.files[ 0 ].name );
		}

		reader.readAsDataURL( changeEvent.target.files[ 0 ] );
	} );





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	function uploadPhoto( file ) {
		photoService.uploadToAWS( file )
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
