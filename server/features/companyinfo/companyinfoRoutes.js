const companyinfoCtrl = require( './companyinfoCtrl.js' );

module.exports = function( app ) {

	app.get( '/api/companyinfo/about', companyinfoCtrl.getAboutText );
	app.get( '/api/companyinfo/contact', companyinfoCtrl.getContactInfo );

};
