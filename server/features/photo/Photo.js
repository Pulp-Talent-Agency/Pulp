const mongoose = require( 'mongoose' );

const Photo = new mongoose.Schema( {

	amazonS3: {
		large_image: {
			ETag: { type: String, required: true },
			Location: { type: String, required: true },
			key: { type: String, required: true },
			Key: { type: String, required: true },
			Bucket: { type: String, required: true }
		},
		small_image: {
			ETag: { type: String, required: true },
			Location: { type: String, required: true },
			key: { type: String, required: true },
			Key: { type: String, required: true },
			Bucket: { type: String, required: true }
		}
	},
	isFeatured: { type: Boolean, default: false },
	talent: { type: mongoose.Schema.Types.ObjectId, ref: 'Talent', required: true },
	title: { type: String, required: true },
	originalFilename: { type: String, required: true }

} );

module.exports = mongoose.model( 'Photo', Photo );
