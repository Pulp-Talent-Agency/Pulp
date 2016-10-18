/*------------------------------------*\
  #DEPENDENCIES
\*------------------------------------*/

var gulp = require( 'gulp' );
var watch = require( 'gulp-watch' );
var concat = require( 'gulp-concat' );
var annotate = require( 'gulp-ng-annotate' );
var uglify = require( 'gulp-uglify' );
var sass = require( 'gulp-sass' );
var babel = require( 'gulp-babel' );
var postcss = require( 'gulp-postcss' );
var sourcemaps  = require( 'gulp-sourcemaps' );
var autoprefixer = require( 'autoprefixer' );
var nodemon = require( 'gulp-nodemon' );
var path = require('path');





/*------------------------------------*\
  #FILE PATHS
\*------------------------------------*/

var paths = {
  jsSource: [
		'./src/index.js',
		'./src/**/*.js'
	],
  sassSource: [
		'./src/all.scss'
	],
	htmlSource: [
		'./src/index.html',
		'src/**/*.html'
	],
	assets: {
		fonts: [
			'./src/fonts/Engravers/Regular/7d5c1a61a53b1bf1d7893da5309ad1c1.eot',
			'./src/fonts/Engravers/Regular/7d5c1a61a53b1bf1d7893da5309ad1c1.woff2',
			'./src/fonts/Engravers/Regular/7d5c1a61a53b1bf1d7893da5309ad1c1.woff',
			'./src/fonts/Engravers/Regular/7d5c1a61a53b1bf1d7893da5309ad1c1.ttf',
			'./src/fonts/Engravers/Regular/7d5c1a61a53b1bf1d7893da5309ad1c1.svg',
			'./src/fonts/Engravers/Bold/c1366ca2e69f54f37349d7c538f17e82.eot',
			'./src/fonts/Engravers/Bold/c1366ca2e69f54f37349d7c538f17e82.woff2',
			'./src/fonts/Engravers/Bold/c1366ca2e69f54f37349d7c538f17e82.woff',
			'./src/fonts/Engravers/Bold/c1366ca2e69f54f37349d7c538f17e82.ttf',
			'./src/fonts/Engravers/Bold/c1366ca2e69f54f37349d7c538f17e82.svg'
		]
	}
};





/*------------------------------------*\
  #TASKS
\*------------------------------------*/

gulp.task( 'js', function() {
  return gulp.src( paths.jsSource )
  .pipe( sourcemaps.init() )
  .pipe( babel() ) //Uncomment if using ES6
  .pipe( concat( 'bundle.js' ) )
	.pipe( annotate() )
  // .pipe( uglify() ) //Uncomment when code is production ready
	.pipe( sourcemaps.write( '.' ) )
  .pipe( gulp.dest( './public' ) );
} );

gulp.task( 'start', function () {
  nodemon( {
    script: './server/server.js',
	  ext: 'js html scss',
	  env: { 'NODE_ENV': 'src' },
  	ignore: [ 'public/*.*' ],
  	tasks: function( files ) {
      const tasks = [];
      files.forEach(function( file ) {
        if ( path.extname( file ) === '.js' && !tasks.includes( '.js' ) ) {
          tasks.push( 'js' )
        }
        if ( path.extname( file ) === '.scss' && !tasks.includes( '.scss' ) ) {
          tasks.push( 'sass' )
        }
      } )
      return tasks;
    }
  } )
} );

gulp.task( 'sass', function () {
  return gulp.src( paths.sassSource )
		.pipe( sourcemaps.init() )
	  .pipe( sass() )
    .pipe( concat( 'bundle.css' ) )
    .pipe( postcss( [ autoprefixer( { browsers: [ 'last 2 versions' ] } ) ] ) )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( './public' ) );
} );

gulp.task( 'html', function() {
	return gulp.src( paths.htmlSource )
		.pipe( gulp.dest( './public' ) );
} );

gulp.task( 'move', function() {
	return gulp.src( paths.assets.fonts )
		.pipe( gulp.dest( './public/assets/fonts' ) );
} );

gulp.task( 'watch', function () {
	gulp.watch( paths.htmlSource, [ 'html' ] );
} );





/*------------------------------------*\
  #RUN DEFAULT TASKS
\*------------------------------------*/

gulp.task( 'default', [ 'js', 'sass', 'html', 'move', 'watch', 'start' ] );
