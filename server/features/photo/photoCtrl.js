const Jimp = require( 'jimp' ); // Image processor https://github.com/oliver-moran/jimp
const shortID = require( 'shortid' );

const Photo = require( './Photo.js' );
const Talent = require( './../talent/Talent.js' );
const AWS = require( 'aws-sdk' );
// const config = require( './../../config.js' );

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
		Jimp.read( buf, function( err, imageReadByJimp ) {
			const imageWidth = imageReadByJimp.bitmap.width;
			if( err ) {
				console.log( 'There was an error while trying to read the image for 1000width.' );
				console.log( '*****************************************************************' );
				console.log( err );
				res.status( 500 ).json( err );
			} else {
				imageReadByJimp
					.quality( 100 )
					.resize( 800, Jimp.AUTO )
					.getBase64( Jimp.AUTO, function( err, imgLarge ) {
						if( err ) {
							console.log( 'There was an error while trying to resize the image to 1000width.' );
							console.log( '*****************************************************************' );
							console.log( err );
							return res.status( 500 ).json( err );
						} else {
							const uniqueID = shortID.generate();
							const bufferLargeImg = new Buffer( imgLarge.replace(/^data:image\/\w+;base64,/, ""), 'base64' );
							const bucketName = 'pulp-photos/' + req.body.talent.name + '/' + req.body.imageName + '-' + uniqueID;
						  const params = {
					      Bucket: bucketName,
								Key: req.body.imageName + '-large.' + req.body.imageExtension,
								Body: bufferLargeImg,
								ContentType: 'image/' + req.body.imageExtension,
								ACL: 'public-read'
						  };

						  s3.upload(params, function ( err, s3DataForLargeImage ) {
						    if( err ) {
									console.log( 'There was an error while trying to upload 1000width Image to AWS.' );
									console.log( '*****************************************************************' );
									console.log( err );
									return res.status( 500 ).send( err );
								}
								else {
									imageReadByJimp.clone()
										.quality( 100 )
										.resize( 400, Jimp.AUTO )
										.getBase64( Jimp.AUTO, function( err, imgSmall ) {
											if( err ) {
												console.log( 'There was an error while trying to resize the image to 500width.' );
												console.log( '*****************************************************************' );
												console.log( err );
												return res.status( 500 ).send( err );
											} else {
												const bufferSmallImage = new Buffer( imgSmall.replace(/^data:image\/\w+;base64,/, ""), 'base64' );
											  const bucketName = 'pulp-photos/' + req.body.talent.name + '/' + req.body.imageName + '-' + uniqueID;
											  const params = {
										      Bucket: bucketName,
													Key: req.body.imageName + '-small.' + req.body.imageExtension,
													Body: bufferSmallImage,
													ContentType: 'image/' + req.body.imageExtension,
													ACL: 'public-read'
											  };

												s3.upload( params, function ( err, s3DataForSmallImage ) {
													if( err ) {
														console.log( 'There was an error while trying to upload 500width Image to AWS.' );
														console.log( '*****************************************************************' );
														console.log( err );
														return res.status( 500 ).send( err );
													}
													else {
														const amazonS3ObjToSave = {
															large_image: s3DataForLargeImage,
															small_image: s3DataForSmallImage
														};
														console.log( amazonS3ObjToSave );

														const photoObj = {
															amazonS3: amazonS3ObjToSave,
															talent: req.body.talent.id,
															title: req.body.imageName,
															originalFilename: req.body.originalFilename
														}
														Photo.create( photoObj, function( err, photoData ) {
															if ( err ) {
																console.log( 'There was an error while trying to create photo document.' );
																console.log( '*****************************************************************' );
																console.log( err );
																return res.status( 500 ).send( err );
															}
															else {
																Talent.findById( req.body.talent.id, function( err, talent ) {
																	if ( err ) {
																		console.log( 'There was an error while trying to find talent.' );
																		console.log( '*****************************************************************' );
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
											}
										} );
								}
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





/******************************************************************************\
	# Helper functions
\******************************************************************************/
