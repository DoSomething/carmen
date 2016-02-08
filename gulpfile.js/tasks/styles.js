/**
 * Task: styles
 */

'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename  = require('gulp-rename');
var config  = require('../config').sass;

gulp.task('styles', function() {
  return gulp.src(config.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest(config.dest));
});
