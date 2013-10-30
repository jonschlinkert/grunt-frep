'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.frep = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  canterbury: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/canterbury-tales.md');
    var expected = grunt.file.read('test/expected/canterbury-tales.md');
    test.equal(actual, expected, 'Should translate modern english to middle english, using an array of replacement patterns.');

    test.done();
  },
  abc: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/abc');
    var expected = grunt.file.read('test/expected/abc');
    test.equal(actual, expected, 'Should translate a simple string using an object of replacement patterns.');

    test.done();
  }
};