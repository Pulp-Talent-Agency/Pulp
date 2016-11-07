import uiRouter from 'angular-ui-router';

// STYLES
import './all.scss';

// CONFIG & RUN
import config from './appconfig.js';
import run from './apprun.js';

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
	.run( run )
	.controller( 'HomeController', HomeController )
	.controller( 'TalentController', TalentController );
