AboutController.$inject = [
	'dataService'
];

function AboutController( dataService ) {

	const vm = this;

	getAboutText();





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	function getAboutText() {

		dataService
			.getAboutText()
			.then( function( aboutText ) {
				vm.text = aboutText.fields.about;
			} );

	}





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	// Code here

}

export default AboutController;
