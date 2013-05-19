Spice [![Build Status](https://travis-ci.org/killdream/spice.png)](https://travis-ci.org/killdream/spice) ![Dependencies Status](https://david-dm.org/killdream/spice.png)
=====

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

Grab it from NPM:

    $ npm install spice
    # Then require it as usual
    node> var spice = require('spice')


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

[![browser support](https://ci.testling.com/killdream/spice.png)](http://ci.testling.com/killdream/spice)


## Testing

For Node, just:

    $ npm test
    

## Licence

MIT/X11. Just do whatever you want to.

    $ less LICENCE
