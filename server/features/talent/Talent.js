const mongoose = require( 'mongoose' );

const Talent = new mongoose.Schema( {

	name: { type: String, trim: true },
	biography: { type: String, trim: true },
	instagram: { type: String, trim: true },
	facebook: { type: String, trim: true },
	department: [
		{
			type: String,
			required: true,
			trim: true,
			enum: [
				'HAIR',
				'MAKE UP',
				'STYLING',
				'SET DESIGN',
				'CASTING'
			]
		}
	],
	photos: [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }
	]

} )

module.exports = mongoose.model( 'Talent', Talent );
