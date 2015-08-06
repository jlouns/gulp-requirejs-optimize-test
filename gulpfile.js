'use strict';

var gulp = require('gulp');

// load plugins
var requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('default', function() {
	return gulp.src(['lib/one.js', 'lib/two.js'])
		.pipe(requirejsOptimize({
			optimize: 'none'
		}))
		.pipe(gulp.dest('dist'));
});
