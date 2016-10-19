( function() {

	angular.module( 'PulpServices' )
		.factory( 'talentService', talentService );





	/****************************************************************************\
		# Service Definition
	\****************************************************************************/

	function talentService( $q, $http ) {

		return {
			getAllTalent: getAllTalent
			// TEMPgetAllTalent: TEMPgetAllTalent
		};





		/**************************************************************************\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\**************************************************************************/

		// function getAllTalent() {
		// 	return $q.when( menuItems );
		// }

		function getAllTalent() {
			var menuItems = [];
			return $http.get( '/api/talent' )
				.then( function( talent ) {
					var talentData = talent.data;
					for( var i = 0; i < talentData.length; i++ ) {
						if( talentData[i].department.length === 1 ) {
							var yup = deptExists( talentData[ i ].department[ 0 ], 'title', menuItems );
							pushTalentToMenu( yup, menuItems, talentData, i );
						} else {

						}
					}
					return menuItems;
				} );
		}

		/**************************************************************************\
			Helper functions
		\**************************************************************************/

		function deptExists( dept, prop, list ) {
			var i;
			for ( i = 0; i < list.length; i++ ) {
				if ( list[ i ][ prop ] === dept ) {
					return [ true, i ];
				}
			}
			return [ false ];
		}

		function pushTalentToMenu( arr, list, talent, index ) {
			if( arr[ 0 ] ) {
				list[ arr[ 1 ] ].talent.push( { name: talent[ index ].name } );
			} else {
				list.push( {
					title: talent[ index ].department[ 0 ],
					talent: [ { name: talent[ index ].name } ]
				} );
			}
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
