photoService.$inject = [
	'$http'
];

function photoService( $http ) {

	return {
		uploadToAWS: uploadToAWS,
		getAllFeaturedPhotos: getAllFeaturedPhotos,
		getAllTalentPhotos: getAllTalentPhotos
	};





	/****************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\****************************************************************************/

	function uploadToAWS( file, talent ) {
		const awsObj = createObjForAWS( file, talent );
		return $http.post( '/api/photo', awsObj );
	}

	function getAllFeaturedPhotos() {
		return $http.get( '/api/photo/featured' )
			.then( function( photos ) {
				photos.data = formatTalentName( photos.data )
				return photos.data;
			} );
	}

	function getAllTalentPhotos( talentId ) {
		return $http.get( '/api/photo/' + talentId )
			.then( function( photos ) {
				return photos.data;
			} );
	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	function formatTalentName( photos ) {
		photos.forEach( function( val, idx, arr ) {
			val.talent.name = val.talent.name.split( ' ' ).join( '_' );
		} );
		return photos;
	}

	function createObjForAWS( file, talent ) {
		talent.name = talent.name.split( ' ' ).join( '_' );
		const imageExtension = file.base64.split( ';' )[ 0 ].split( '/' )[ 1 ];
		file.projectTitle = file.projectTitle.split( ' ' ).join( '_' );
		return {
			originalFilename: file.originalFilename,
      imageName: file.projectTitle,
      imageBody: file.base64,
      imageExtension: imageExtension,
      talent: {
				name: talent.name,
				id: talent._id
			}
    };
	}

}

export default photoService;
