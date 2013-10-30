# grunt-frep [![NPM version](https://badge.fury.io/js/grunt-frep.png)](http://badge.fury.io/js/grunt-frep) 

> A find and replace task. Replace strings with an array or object of RegExp or string replacement patterns.

This plugin uses [frep](https://github.com/helpers/frep).

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-frep --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-frep');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

In your project's Gruntfile, load the plugin with `grunt.loadNpmTasks('grunt-frep');` outside of `grunt.initConfig()`:

```js
grunt.initConfig({
  frep: {
    options: {
      replacements: []
    },
    files: {}
  }
});
grunt.loadNpmTasks('grunt-frep');
grunt.registerTask('default', ['frep']);
```

If you are happy with the defaults, no other configuration is required.


## The "frep" task
### Overview
In your project's Gruntfile, add a section named `frep` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  frep: {
    options: {
      // Task-specific options go here.
      replacements: []
    },
    foo: {
      // Target-specific options go here.
      options: {},
      // Target-specific file lists go here
      files: {}
    }
  }
})
```


### Options
Transform strings with _an array or an object_ of replacement patterns. See [frep](https://github.com/helpers/frep) for more details.

#### array of replacement patterns
Transform a string with an array of replacement patterns

* `String`: The string to modify with the given replacement patterns.
* `Array`: Array of objects, each containing a `pattern` property (which can be a _string or a RegExp_), and a `replacement` property (which can be a _string or a function_ to be called for each match).

Given that `foo.md` contains the string `ABCDEFGHIJKLMNOPQRSTUVWXYZ`, we define following replacement patterns:

```js
options: {
  replacements: [
    {
      pattern: /(A|B|C)/g,
      replacement: '###'
    },
    {
      pattern: /(X|Y|Z)/g,
      replacement: '$$$'
    }
  ],
  src: ['foo.md'],
  dest: 'dest/'
}
// A new string is returned with some or all matches
// replaced by the given replacement patterns:
//
// => #########DEFGHIJKLMNOPQRSTUVW$$$$$$$$$
```

#### object of replacement patterns
Transform a string with an object of replacement patterns

* `String`: The string to modify with the given replacement patterns.
* `Object`: Object of replacement patterns, where each key is a string or a RegExp `pattern`, and each value is the `replacement` string or function to be called for each match.

Given that `bar.md` contains the string `ABC`, and we define following replacement patterns:

```js
options: {
  replacements: {
    'A': 'AAA',
    'B': 'BBB',
    'C': 'CCC'
  },
  src: ['bar.md'],
  dest: 'dest/'
}
// A new string is returned with some or all matches
// replaced by the given replacement patterns:
//
// => AAABBBCCC
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].

## Author
**Jon Schlinkert**

+ [github.com/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Tuesday, October 29, 2013._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html
