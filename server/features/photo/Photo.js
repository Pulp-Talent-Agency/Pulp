const mongoose = require( 'mongoose' );

const Photo = new mongoose.Schema( {

	location: { type: String, required: true },
	isFeatured: { type: Boolean, default: false }

} );

module.exports = mongoose.model( 'Photo', Photo );
