const Photo = require( './Photo.js' );
const AWS = require( 'aws-sdk' );
const config = require( './../../config.js' );

AWS.config.update( {
  accessKeyId: config.amazonS3.accessKeyId,
	secretAccessKey: config.amazonS3.secretAccessKey,
	region: config.amazonS3.region
} );

const s3 = new AWS.S3();

module.exports = {

	postNewPhoto: function( req, res ) {
		const buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

	  // bucketName var below crates a "folder" for each user
	  var bucketName = 'pulp-lecture/' + req.body.userEmail;
	  var params = {
      Bucket: bucketName,
			Key: req.body.imageName,
			Body: buf,
			ContentType: 'image/' + req.body.imageExtension,
			ACL: 'public-read'
	  };

	  s3.upload(params, function (err, s3data) {
	    if (err) {
				return res.status(500).send(err);
			};
			console.log( s3data );
			Photo.create( { amazonS3: s3data }, function( error, photo ) {
				if ( error ) {
					return res.status( 500 ).send( error );
				}
				else {
					return res.status( 200 ).json( photo );
				}
			} );

	  });
	},

	getAllPhotos: function( req, res ) {
		Photo.find( {}, function( err, photos ) {
			if( err ) {
				return res.json( err );
			} else {
				return res.json( photos );
			}
		} );
	}

}
