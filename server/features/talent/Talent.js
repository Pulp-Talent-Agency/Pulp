const mongoose = require( 'mongoose' );

const Talent = new mongoose.Schema( {

	name: { type: String, trim: true },
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
	]

} )

module.exports = mongoose.model( 'Talent', Talent );
