TalentController.$inject = [
	'$stateParams'
];

function TalentController( $stateParams ) {

	const vm = this;

	vm.talent = {
		name: $stateParams.name.split( '_' ).join( ' ' ),
		dept: $stateParams.category,
		photos: [
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_560eef41-e670-4f84-8544-718b0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_57977d8c-ef4c-46e7-8ee0-142b0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_57b37515-c408-4da5-9797-3e5f0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_578528ba-2844-4709-8c03-03c00a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_57b3752f-bcd8-4c6d-be8a-53580a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_570b854a-9d1c-46b9-9e65-67cc0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_56bb5147-4894-4c81-aeb0-19520a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_57e4413f-b6dc-4e32-954c-35fa0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_57baffe9-2f78-446d-be5c-49580a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_56a9447f-6f6c-4e5b-8ca8-50210a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_556f1dc1-419c-4ab5-a01f-47cd0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_5620de6a-c290-48a6-b7f5-0f3f0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_580dd18c-26a8-484a-9dcd-569a0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_55dc64ce-2dec-4939-bf80-355d0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_55d5f605-c7ac-4ea4-b4d5-53d80a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_56f03c34-a2dc-43be-8318-24010a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_56c359a6-e214-4f99-80b2-4aa50a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_5728d15f-0204-4d2e-8a43-408f0a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_53d01cb4-4088-400e-90ee-0be60a627753.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_57335ce2-1660-48c7-89c5-5ca90a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_57e2ce76-21d0-44f7-bb8d-4cf40a771fd0.jpg'
			},
			{
				src: 'http://assets.lookbookspro.com/bryant-artists/gm_51643a78-413c-44ee-b7ca-68770aa613db.jpg'
			}
		]
	}





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	// Code here





	/**************************************************************************\
		# Helper functions
	\**************************************************************************/

	// Code here

}

export default TalentController;
