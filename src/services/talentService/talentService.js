( function() {

	angular.module( 'PulpServices' )
		.factory( 'talentService', talentService );





	/****************************************************************************\
		# Service Definition
	\****************************************************************************/

	function talentService( $q, $http ) {

		return {
			getAllTalent: getAllTalent
		};





		/**************************************************************************\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\**************************************************************************/

		function getAllTalent() {
			var menuItems = {};
			return $http.get( '/api/talent' )
				.then( function( talent ) {
					var talentData = talent.data;
					for( var i = 0; i < talentData.lenth; i++ ) {
						if( menuItems.hasOwnProperty( talentData[i].title ) ) {
							
						}
					}
				} );
		}

	}

	talentService.$inject = [ '$q', '$http' ];





	/**************************************************************************\
		# Data
	\**************************************************************************/

	var menuItems = [
		{
			title: 'HAIR',
			talent: [
				{
					name: 'EDWARD LAMPLEY'
				},
				{
					name: 'DANIEL MARTIN'
				},
				{
					name: 'NEIL MOODIE'
				},
				{
					name: 'MAARIT NIEMELA'
				},
				{
					name: 'JAMES PECIS'
				}
			]
		},
		{
			title: 'MAKE UP',
			talent: [
				{
					name: 'EDWARD LAMPLEY'
				},
				{
					name: 'DANIEL MARTIN'
				},
				{
					name: 'NEIL MOODIE'
				},
				{
					name: 'MAARIT NIEMELA'
				},
				{
					name: 'JAMES PECIS'
				}
			]
		},
		{
			title: 'STYLING',
			talent: [
				{
					name: 'EDWARD LAMPLEY'
				},
				{
					name: 'DANIEL MARTIN'
				},
				{
					name: 'NEIL MOODIE'
				},
				{
					name: 'MAARIT NIEMELA'
				},
				{
					name: 'JAMES PECIS'
				}
			]
		},
		{
			title: 'SET DESIGN',
			talent: [
				{
					name: 'EDWARD LAMPLEY'
				},
				{
					name: 'DANIEL MARTIN'
				},
				{
					name: 'NEIL MOODIE'
				},
				{
					name: 'MAARIT NIEMELA'
				},
				{
					name: 'JAMES PECIS'
				}
			]
		},
		{
			title: 'CASTING',
			talent: [
				{
					name: 'EDWARD LAMPLEY'
				},
				{
					name: 'DANIEL MARTIN'
				},
				{
					name: 'NEIL MOODIE'
				},
				{
					name: 'MAARIT NIEMELA'
				},
				{
					name: 'JAMES PECIS'
				}
			]
		}
	]

} )();
