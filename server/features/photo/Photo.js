const mongoose = require( 'mongoose' );

const Photo = new mongoose.Schema( {

	title: { type: String, trim: true },
	talent: { type: mongoose.Schema.Types.ObjectId, ref: 'Talent' },
	fullsize: { type: String, required: true, trim: true },
	thumbnail: { type: String, required: true, trim: true }

} )

module.exports = mongoose.model( 'Photo', Photo );
