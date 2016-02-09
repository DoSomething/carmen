/**
 * Task: scripts
 */

'use strict';

var gulp       = require('gulp');
var util       = require('gulp-util');
var rename     = require('gulp-rename');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var babelify   = require('babelify');
var watchify   = require('watchify');
var config     = require('../config').browserify;

function buildScript(file, watch) {

  config['transform'] = [babelify.configure({ presets: ["stage-0", "react"] })];

  var bundler = watch ? watchify(browserify(config)) : browserify(config);

  // var bundler = watch ? watchify(browserify(config).transform(babelify)) : browserify(config).transform(babelify);

  function bundle() {
    util.log('Bundling the scripts...');

    var stream = bundler.bundle();

    return stream
      .pipe(source(file))
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest(config.dest))
  }

  return bundle();
}


gulp.task('scripts', function() {
  return buildScript('main.js', false);
});
