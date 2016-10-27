import $ from 'jquery';

headerNavCtrl.$inject = [
  'talentService'
];

function headerNavCtrl( talentService ) {
  var vm = this;

  talentService.getMenuItems()
		.then( function( menuItems ) {
			vm.menuItems = menuItems;
		} );

	

}

export default headerNavCtrl;
