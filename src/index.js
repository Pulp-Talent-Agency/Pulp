// import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import 'angular-masonry';

// STYLES
import './all.scss';

// CONFIG
import config from './config.js';

// SERVICES
import './services/servicesModule.js';

// COMPONENTS
import './components/componentsModule.js';

// CONTROLLERS
import HomeController from './views/home/homeCtrl.js';
import TalentController from './views/talent/talentCtrl.js';

angular.module( 'Pulp', [
	uiRouter,
	'wu.masonry',
	'PulpServices', // Custom services placed in their own module
	'PulpComponents'// Custom components placed in their own module
] )
	.config( config )
	.controller( 'HomeController', HomeController )
	.controller( 'TalentController', TalentController );
