import angular from 'angular';
import uiRouter from 'angular-ui-router';

// STYLES
import './all.scss';

// CONFIG
import config from './config.js';

// SERVICES
import './services/servicesModule.js';

// COMPONENTS
import './components/componentsModule.js';

angular.module( 'Pulp', [
	uiRouter,
	'PulpServices', // Custom services placed in their own module
	'PulpComponents'// Custom components placed in their own module
	// 'wu.masonry'
] )
	.config( config );
