photoService.$inject = [
	'$http',
	'$q'
];

function photoService( $http, $q ) {

	let featuredPhotos;

	return {
		getAllFeaturedPhotos: getAllFeaturedPhotos,
		getAllTalentPhotos: getAllTalentPhotos
	};





	/****************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\****************************************************************************/

	function getAllFeaturedPhotos() {
		if( !featuredPhotos ) {
			return $http.get( '/api/photo/featured' )
				.then( function( photos ) {
					photos.data = formatTalentName( photos.data.items )
					return photos.data;
				} );
		} else {
			return $q.when( featuredPhotos );
		}
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
			val.fields.talent.fields.name = val.fields.talent.fields.name.split( ' ' ).join( '_' );
		} );
		return photos;
	}

}

export default photoService;
