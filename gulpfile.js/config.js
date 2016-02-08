/**
 * Configuration settings for use in other tasks.
 *
 * @type {Object}
 */

var dest = './dist';
var src = './assets';

module.exports = {

  browserify: {
    entries: src + '/js/main.js',
    dest: dest + '/js',
    debug: false,
    cache: {},
    packageCache: {},
  },

  sass: {
    src: src + '/sass/**/*.scss',
    dest: dest + '/css',
    watch: src + '/sass/**',
  }

};
