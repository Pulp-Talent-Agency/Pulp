const Jimp = require( 'jimp' ); // Image processor https://github.com/oliver-moran/jimp

const Photo = require( './Photo.js' );
const Talent = require( './../talent/Talent.js' );
const AWS = require( 'aws-sdk' );
const config = require( './../../config.js' );

const accessKeyId = process.env.AMAZON_ACCESSID || config.amazonS3.accessKeyId;
const secretAccessKey = process.env.AMAZON_SECRETKEY || config.amazonS3.secretAccessKey;
const region = process.env.AMAZON_REGION || config.amazonS3.region;

AWS.config.update( {
  accessKeyId: accessKeyId,
	secretAccessKey: secretAccessKey,
	region: region
} );

const s3 = new AWS.S3();





module.exports = {

	postNewPhoto: function( req, res ) {
		const buf = new Buffer( req.body.imageBody.replace( /^data:image\/\w+;base64,/, '' ), 'base64' );

	  // bucketName var below crates a "folder" for each user
	  const bucketName = 'pulp-photos/' + req.body.talent.name;
	  const params = {
      Bucket: bucketName,
			Key: req.body.talent.name + '-' + req.body.imageName + '.' + req.body.imageExtension,
			Body: buf,
			ContentType: 'image/' + req.body.imageExtension,
			ACL: 'public-read'
	  };

	  s3.upload(params, function ( err, s3DataForFullSizeImg ) {
	    if( err ) {
				console.log( err );
				return res.status( 500 ).send( err );
			}
			else {
				Jimp.read( s3DataForFullSizeImg.Location, function( err, img ) {
					if( err ) {
						console.log( err );
						return res.status( 500 ).send( err );
					}
					else {
						img.quality( 100 )
							.resize( 500, Jimp.AUTO );
						img.getBase64( Jimp.AUTO, function( err, img ) {

							const buf = new Buffer( img.replace(/^data:image\/\w+;base64,/, ""), 'base64' );

						  // bucketName var below crates a "folder" for each user
						  const bucketName = 'pulp-photos/' + req.body.talent.name + '/300w';
						  const params = {
					      Bucket: bucketName,
								Key: '500w-' + req.body.imageName,
								Body: buf,
								ContentType: 'image/' + req.body.imageExtension,
								ACL: 'public-read'
						  };

							s3.upload(params, function (err, s3DataFor500width) {
								if( err ) {
									console.log( err );
									return res.status( 500 ).send( err );
								}
								else {
									const amazonS3ObjToSave =  {
										full_size: s3DataForFullSizeImg,
										small500width: s3DataFor500width
									};

									const photoObj = {
										amazonS3: amazonS3ObjToSave,
										talent: req.body.talent.id,
										title: req.body.imageName,
										originalFilename: req.body.originalFilename
									}
									Photo.create( photoObj, function( err, photoData ) {
										if ( err ) {
											console.log( err );
											return res.status( 500 ).send( err );
										}
										else {
											Talent.findById( req.body.talent.id, function( err, talent ) {
												if ( err ) {
													console.log( err );
													return res.status( 500 ).send( err );
												}
												else {
													talent.photos.push( photoData._id );
													talent.save();
													return res.status( 200 ).json( talent );
												}
											} );
										}
									} );
								}
							} );
						} );
					}
				} );
			}
		} );
	},

	getAllPhotos: function( req, res ) {
		Photo.find( {}, function( err, photos ) {
			if( err ) {
				console.log( err );
				return res.status( 500 ).json( err );
			} else {
				return res.status( 200 ).json( photos );
			}
		} );
	},

	getAllFeaturedPhotos: function( req, res ) {
		Photo.find( { isFeatured: true } )
			.populate( 'talent' )
			.exec( function( err, photos ) {
				if( err ) {
					console.log( err );
					return res.status( 500 ).json( err );
				} else {
					return res.status( 200 ).json( photos );
				}
			} );
	},

	getAllTalentPhotos: function( req, res ) {
		Photo.find( { talent: req.params.talentId }, function( err, talent ) {
			if( err ) {
				console.log( err );
				return res.status( 500 ).json( err );
			} else {
				return res.status( 200 ).json( photos );
			}
		} );
	}

}
