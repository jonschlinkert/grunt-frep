/*
 * grunt-frep
 * https://github.com/jonschlinkert/grunt-frep
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Replacement patterns for tests.
    translation: require('./test/translations'),

    jshint: {
      all: ['Gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp/**/*'],
    },

    // Configuration to be run (and then tested).
    frep: {
      canterbury: {
        options: {
          replacements: '<%= translation.patterns %>'
        },
        files: {
          'tmp/canterbury-tales.md': ['test/fixtures/canterbury-tales.md']
        }
      },
      foo: {
        options: {
          replacements: {
            'A': 'AAA',
            'B': 'BBB',
            'C': 'CCC'
          }
        },
        files: {
          'tmp/abc': ['test/fixtures/abc']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-readme');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'frep', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'readme']);

};
