Spice
=====

[![Build Status](https://secure.travis-ci.org/robotlolita/spice.png?branch=master)](https://travis-ci.org/robotlolita/spice)
[![NPM version](https://badge.fury.io/js/spice.png)](http://badge.fury.io/js/spice)
[![Dependencies Status](https://david-dm.org/robotlolita/spice.png)](https://david-dm.org/robotlolita/spice)
[![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges)


No-frills string interpolation library.

```js
var spice = require('spice')
spice('Hello, {:subject}!', { subject: 'world' })
// => (string) "Hello, world!"
```

Or, alternatively, mess with the `String#prototype`:

```js
var spice = require('spice')
String.prototype.format = function(mappings) {
  return spice(this, mappings)
}

'Hello, {:subject}!'.format({
  subject: 'world'
})
// => (string) "Hello, world!"
```


## Installing

The easiest way is to grab it from NPM (use [browserify][] if you're on a
Browser):

    $ npm install spice
    # Then require it as usual
    node> var spice = require('spice')
    
If you **really** want to suffer with old and terrible module/no-module
formats, you can run `make bundle` yourself:

    $ git clone git://github.com/robotlolita/spice
    $ cd spice
    $ npm install
    $ make bundle
    # And incldue `dist/spice.umd.js` on your AMD/script tag/whatever.


[browserify]: https://github.com/substack/node-browserify

## API

### `format(string, mappings)`

Performs string interpolation, given a template string as basis, and a
substitution map.

```hs
template-value: string | (string -> string)
format: string, { string -> template-value } -> string
```

If a mapping is not given, we assume it to be an empty object, in which case
the template variables are just stripped away.

A template variable is a special construct in the form:

    <template-variable> ::= "{:" (any but "}") "}"
    
For example, to provide a "Hello, world!" template, that adjusts to a given
name, one could write:

```js
format("Hello, {:subject}!", { subject: "world" })
// => "Hello, world!"
```

A template variable can be escaped by placing a backslash between the
open-curly braces and the colon, such that the construct would be output
verbatim:

```js
format("Hello, {\\:subject}!", { subject: "world" })
// => "Hello, {:subject}!"
```


## Platform support

ES3 and beyond!

[![browser support](https://ci.testling.com/robotlolita/spice.png)](http://ci.testling.com/robotlolita/spice)


## Testing

For Node, just:

    $ npm test
    
    
For the browser:

    $ npm install -g brofist-browser
    $ make test
    $ brofist-browser serve test/specs
    # Then point your browsers to the URL on yer console.
    

## Licence

MIT/X11. Just do whatever you want to.

    $ less LICENCE
