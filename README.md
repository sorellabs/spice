Spice
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


Installing
----------

Just grab it from NPM for the easy-modo install:

    $ npm install spice
    # Then require it as usual
    node> var spice = require('spice')


Testing
-------

The test cases uses [Mocha][], [Noire][] and [Sinon][]. Just grab everything
from NPM and run the test-cases by issuing `mocha` from the command line:

    $ npm install         # If you haven't grabbed devDeps yet
    $ npm run-script test
    
[Mocha]: http://visionmedia.github.com/mocha/
[Noire]: http://github.com/killdream/noire
[Sinon]: http://sinonjs.org/


Licence
-------

Spice is licensed under the delicious and permissive [MIT][] licence. You can
happily copy, share, modify, sell or whatever — refer to the actual licence
text for `less` information:

    $ less LICENCE
    
[MIT]: https://github.com/killdream/spice/raw/master/LICENCE
