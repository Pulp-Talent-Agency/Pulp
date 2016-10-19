( function() {

	angular.module( 'PulpServices' )
		.factory( 'talentService', talentService );
	
	talentService.$inject = [
		'$q',
		'$http'
	];





	/****************************************************************************\
		# talentService Definition
	\****************************************************************************/

	function talentService( $q, $http ) {

		return {
			getMenuItems: getMenuItems
		};





		/**************************************************************************\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\**************************************************************************/

		function getMenuItems() {
			return $http.get( '/api/talent' )
				.then( function( talent ) {
					return formatDataForMenu( talent.data );
				} );
		}





		/**************************************************************************\
			# Helper functions
		\**************************************************************************/

		function formatDataForMenu( talentData ) {
			var menuItems = [];
			for( var i = 0; i < talentData.length; i++ ) {
				if( talentData[i].department.length === 1 ) {
					var yup = deptExists( talentData[ i ].department[ 0 ], 'title', menuItems );
					pushTalentToMenu( yup, menuItems, talentData, i );
				} else {
					// handle talent with multiple departments
				}
			}
			return menuItems;
		}

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
				list[ arr[ 1 ] ].talent.push(
					{
						name: talent[ index ].name,
						id: talent[ index ]._id
					}
				);
			} else {
				list.push( {
					open: false,
					title: talent[ index ].department[ 0 ],
					talent: [ 
						{
							name: talent[ index ].name,
							id: talent[ index ]._id
						}
					]
				} );
			}
		}

	}

} )();
