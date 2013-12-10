/*
 * grunt-frep
 * https://github.com/jonschlinkert/grunt-frep
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function(grunt) {

  var path = require('path');
  var frep = require('frep');
  var _ = require('lodash');


  grunt.registerMultiTask('frep', 'A find and replace task. Replace strings with RegExp or string replacement patterns.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      replacements: []
    });

    // Iterate over all src-dest file pairs.
    this.files.forEach(function(fp) {
      var files = grunt.file.expand({nonull: true}, fp.src);

      // Concat specified files + footer.
      var src = files.map(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return '';
        }
        var content = grunt.file.read(filepath);
        var replacements = options.replacements;

        // Read source files and execute replacement patterns
        if(grunt.util.kindOf(replacements) === 'array' || grunt.util.kindOf(replacements) === 'string') {
          // if string (e.g. '<%= foo.bar.replacements'), coerce to array
          replacements = Array.isArray(replacements) ? replacements : [replacements];
          // If given replacement patterns are an array, use `frep.strWithArr`
          return frep.strWithArr(content, _.flatten(replacements));
        } else if(grunt.util.kindOf(replacements) === 'object') {
          // If given replacement patterns are an object, use `frep.strWithObj`
          return frep.strWithObj(content, replacements);
        } else {
          grunt.log.warn('Replacement patterns must be formatted as an array or object. See github.com/helpers/frep for more info.');
        }
      }).join('');

      // Write the destination file.
      grunt.file.write(fp.dest, src);

      // Print a success message.
      grunt.log.ok('File '.yellow + '"' + fp.dest + '" transformed.');
    });
  });

};