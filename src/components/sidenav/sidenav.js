import sideNavHtml from './sidenav-tmpl.html';
import sideNavCtrl from './sidenav-ctrl.js';

// ICONS
import './assets/icons/Facebook_Solid.svg';
import './assets/icons/Instagram_Solid.svg';

const sideNavOptions = {
	template: sideNavHtml,
	controller: sideNavCtrl,
	controllerAs: 'snCtrl'
};

export default sideNavOptions;
