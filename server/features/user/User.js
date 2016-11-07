const mongoose = require( 'mongoose' );

const User = new mongoose.Schema( {

	isAdmin: { type: Boolean, default: false },
	facebook: {
		id: { type: String, required: true },
		name: { type: String, required: true }
	}

} );

module.exports = mongoose.model( 'User', User );
