photoService.$inject = [
	'$http'
];

function photoService( $http ) {

	return {
		uploadToAWS: uploadToAWS,
		createObjForAWS: createObjForAWS,
		getAllPhotos: getAllPhotos
	};





	/****************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\****************************************************************************/

	function uploadToAWS( imageObj ) {
		return $http.post( '/api/photo', imageObj );
	}

	function createObjForAWS( base64File, fileName, talent ) {
		const imageExtension = base64File.split( ';' )[ 0 ].split( '/' )[ 1 ];
		return {
      imageName: fileName,
      imageBody: base64File,
      imageExtension: imageExtension,
      talent: 'obama@usa.gov'
    };
	}

	function getAllPhotos() {
		return $http.get( '/api/photo' )
			.then( function( photos ) {
				return photos.data;
			} );
	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	//CODE HERE

}

export default photoService;
