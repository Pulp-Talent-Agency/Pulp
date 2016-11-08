const mongoose = require( 'mongoose' );

const Photo = new mongoose.Schema( {

	amazonS3: {
		ETag: { type: String, required: true },
		Location: { type: String, required: true },
		key: { type: String, required: true },
		Key: { type: String, required: true },
		Bucket: { type: String, required: true }
	},
	isFeatured: { type: Boolean, default: false }

} );

module.exports = mongoose.model( 'Photo', Photo );
