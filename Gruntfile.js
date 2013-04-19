/*
 * grunt-jetrunner
 * https://github.com/peteromano/grunt-jetrunner
 *
 * Copyright (c) 2013 Pete Romano
 * Licensed under the MIT license.
 */

'use strict';

/*
 * See https: //saucelabs.com/docs/platforms for all available SeleniumRC (not WebDriver) platforms
 */
var jetrunner = require('./config/jetrunner');

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jetrunner');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configuration to be run (and then tested).
    "jetrunner": {
        "local": [{
            "tests":    jetrunner.tests,
            "runner":   jetrunner.runner
        }],
        "remote": [{
            "tests":    jetrunner.tests,
            "runner":   jetrunner.runner,
            "client":   jetrunner.saucelabs
        }]
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jetrunner:local']);
  grunt.registerTask('staging', ['jetrunner:remote']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

