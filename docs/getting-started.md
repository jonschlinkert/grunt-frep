_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install {%= name %} --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('{%= name %}');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

In your project's Gruntfile, load the plugin with `grunt.loadNpmTasks('{%= name %}');` outside of `grunt.initConfig()`:

```js
grunt.initConfig({
  {%= shortname %}: {
    options: {
      replacements: []
    },
    files: {}
  }
});
grunt.loadNpmTasks('{%= name %}');
grunt.registerTask('default', ['{%= shortname %}']);
```

If you are happy with the defaults, no other configuration is required.