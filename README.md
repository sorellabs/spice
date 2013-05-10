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


## Platform support

ES3 and beyond!

[![browser support](http://ci.testling.com/killdream/spice.png)](http://ci.testling.com/killdream/spice)


## Testing

The test cases uses [Mocha][], [Noire][] and [Sinon][]. Just grab
everything from NPM and run the test-cases by issuing `mocha` from the
command line:

    $ npm install         # If you haven't grabbed devDeps yet
    $ npm run-script test
    
[Mocha]: http://visionmedia.github.com/mocha/
[Noire]: http://github.com/killdream/noire
[Sinon]: http://sinonjs.org/


## Licence

MIT/X11. Just do whatever you want to.

    $ less LICENCE
