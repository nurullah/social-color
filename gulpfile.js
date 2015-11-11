var gulp 	    = require('gulp'),
	sass 	    = require('gulp-sass'),
	minifyCss 	= require('gulp-minify-css'),
	autoprefix 	= require('gulp-autoprefixer'),
	rename 	    = require('gulp-rename'),
	watch 	    = require('gulp-watch');

// files
var ScssFiles = [
    'sass/build.scss'
];

// task
gulp.task('sass', function() {
	return gulp.src(ScssFiles)
            .pipe(sass({ style: 'compressed' }))
            .pipe(autoprefix('last 15 version'))
            .pipe(rename('social-colors.css'))
            .pipe(gulp.dest('dist'))
            .pipe(minifyCss())
            .pipe(rename('social-colors.min.css'))
            .pipe(gulp.dest('dist'));
});

// watch
gulp.task('watch', function() {
	gulp.watch(ScssFiles, ['sass']);
});

// default
gulp.task('default', ['sass', 'watch']);
