talentService.$inject = [
	'$q',
	'$http'
];

function talentService( $q, $http ) {

	let allTalent;
	let menuItems;

	return {
		getMenuItems: getMenuItems,
		getAllTalent: getAllTalent,
		getTalentPhotos: getTalentPhotos
	};





	/**************************************************************************\
		All general logic goes above this comment.
		All detailed logic(function definitions) goes below this comment.
	\**************************************************************************/

	function getMenuItems() {
		if( !menuItems ) {
			return $http.get( '/api/talent' )
				.then( function( talent ) {
					allTalent = talent.data;
					var menuItems = formatDataForMenu( talent.data );
					menuItems.forEach( function( val, index, array ) {
						val.talent.forEach( function( v, i , a ) {
							v.uppercase_name = v.name.toUpperCase();
							v.url_name = v.name.split( ' ' ).join( '_' );
						} );
					} );
					return menuItems;
				} );
		} else {
			return $q.when( menuItems );
		}
	}

	function getAllTalent() {
		if( !allTalent ) {
			return $http.get( '/api/talent' )
				.then( function( talentResponse ) {
					allTalent = talentResponse.data;
					return allTalent;
				} );
		} else {
			return $q.when( allTalent );
		}
	}

	function getTalentPhotos( talentId ) {
		if( !allTalent ) {
			return getAllTalent()
				.then( function( talents ) {
					return findTalentAndReturnPhotos( talentId, talents );
				} );
		} else {
			return $q.when( findTalentAndReturnPhotos( talentId, allTalent ) );
		}
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

	function findTalentAndReturnPhotos( talentId, allTalent ) {
		for( let i = 0; i < allTalent.length; i++ ) {
			if( allTalent[ i ]._id === talentId ) {
				return allTalent[ i ].photos;
			}
		}
	}

}

export default talentService;
