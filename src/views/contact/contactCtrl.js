ContactController.$inject = [
	'dataService'
];

function ContactController( dataService ) {

	const vm = this;

	getContactInfo();





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	function getContactInfo() {

		dataService
			.getContactInfo()
			.then( function( contactinfo ) {
				vm.contactinfo = contactinfo;
			} );

	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	// Code here

}

export default ContactController;
