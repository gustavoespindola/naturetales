/* eslint-disable */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var browserSync = require('browser-sync').create();

var webp = require("gulp-webp");

var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
 
var htmlmin = require('gulp-htmlmin');
 

var paths = {
	styles: {
		src: './src/scss/**/*.scss',
	},
	scripts: {
		src: './scr/js/*.js',
	},
};


// ========================================================

// process JS files and return the stream.

function js(){
	return gulp.src('./src/js/*.js')
	// .pipe(browserify())
	.pipe(browserSync.stream())
	.pipe(uglify())
	.pipe(gulp.dest('./js'))
	.pipe(browserSync.stream());
}


// ========================================================

function minifyhtml(){
	return gulp.src('./src/html/*.html')
		.pipe(browserSync.stream())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./'));
}

gulp.task('minifyhtml', function(){
	return gulp.src('./src/html/*.html')
		.pipe(browserSync.stream())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./'));
});

// ========================================================
gulp.task("webp", function() {
	return gulp.src("./src/img/**/*.{jpg,jpeg,png,svg}")
		.pipe(webp())
		.pipe(gulp.dest("./images"));
});

function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(
			autoprefixer({
				browsers: ['last 4 versions'],
				cascade: false,
			}),
		)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'))
		.pipe(minifyCSS())
		.pipe(browserSync.stream());
}

/*
 * task to minify the css files
 * SCSS files are converted to CSS and than minified by the following task
 */

function minifyCSS() {
	return gulp
		.src('css/style.css')
		.pipe(
			cleanCSS({ debug: true }, function(details) {
				console.log('=========================================');
				console.log(details.name + ': ' + details.stats.originalSize);
				console.log(details.name + ': ' + details.stats.minifiedSize);
				console.log('=========================================');
			}),
		)
		.pipe(
			rename({
				suffix: '.min',
			}),
		)
		.pipe(gulp.dest('css/'));
}

// Optimizing Images
function optimiseImages() {
	return (
		gulp
			.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
			// Caching images that ran through imagemin
			.pipe(
				imagemin({
					interlaced: true,
				}),
			)
			.pipe(gulp.dest('./images'))
	);
}

function watch() {

	browserSync.init({
		server: {
				baseDir: "./",
				index: "index.html"
		}
	});

	gulp.watch("./src/scss/**/*.scss", styles); //minifyCSS
	gulp.watch("./src/html/*.html", minifyhtml);
	gulp.watch("./src/js/*.js", js);
	// gulp.watch("./src/img/*", optimiseImages);

}


/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */

var build = gulp.series(gulp.parallel(styles));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */

// exports.styles = 	styles;
exports.watch 	= 	watch;
exports.build 	= 	build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = watch;
