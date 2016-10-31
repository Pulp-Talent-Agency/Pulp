headerNavCtrl.$inject = [
  'talentService',
	'navService'
];

function headerNavCtrl( talentService, navService ) {
  var vm = this;

  talentService.getMenuItems()
		.then( function( menuItems ) {
			vm.menuItems = menuItems;
		} );

	vm.showTalentList = navService.showTalentList;
	vm.hideTalentList = navService.hideTalentList;

}

export default headerNavCtrl;
