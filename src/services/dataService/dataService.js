dataService.$inject = [
	'$http'
];

function dataService( $http ) {

	return {
		getAboutText: getAboutText,
		getContactInfo: getContactInfo
	};





	/****************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\****************************************************************************/

	function getAboutText() {

		return $http.get( '/api/companyinfo/about' )
			.then( function( about ) {
				return about.data;
			} );

	}

	function getContactInfo() {
		
		return $http.get( '/api/companyinfo/contact' )
			.then( function( contact ) {
				return contact.data.fields;
			} );

	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	// Code here

}

export default dataService;
