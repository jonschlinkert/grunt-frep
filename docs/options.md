Transform strings with _an array or an object_ of replacement patterns. See [frep](https://github.com/helpers/frep) for more details.

### array of replacement patterns
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

### object of replacement patterns
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
