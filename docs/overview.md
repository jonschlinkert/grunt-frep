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