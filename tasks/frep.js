/*
 * grunt-frep
 * https://github.com/erickrdch/grunt-frep
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var frep = require('frep');

module.exports = function(grunt) {

  grunt.registerMultiTask('frep', 'A find and replace task. Replace strings with RegExp or string replacement patterns.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      replacements: []
    });

    // Iterate over all src-dest file pairs.
    this.files.forEach(function(fp) {

      // The source files to search. The "nonull" option is used
      // to retain invalid files/patterns so they can be warned about.
      var files = grunt.file.expand({nonull: true}, fp.src);

      // Concat specified files + footer.
      var src = files.map(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return '';
        }

        // Read source files and execute replacement patterns
        if(grunt.util.kindOf(options.replacements) === 'array') {
          // If given replacement patterns are an array, use `frep.strWithArr`
          return frep.strWithArr(grunt.file.read(filepath), options.replacements);
        } else if(grunt.util.kindOf(options.replacements) === 'object') {
          // If given replacement patterns are an object, use `frep.strWithObj`
          return frep.strWithObj(grunt.file.read(filepath), options.replacements);
        } else {
          grunt.log.warn('Replacement patterns must be formatted as an array or object. See github.com/helpers/frep for more info.');
        }

      }).join('');

      // Write the destination file.
      grunt.file.write(fp.dest, src);

      // Print a success message.
      grunt.log.ok('File '.yellow + '"' + fp.dest + '" transform.');
    });
  });

};