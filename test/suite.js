describe('λ format', function() {
  var ensure = require('noire').ensure
  var sinon  = require('sinon')
  var _      = require('../spice')

  it('Should not replace escaped template variables.', function() {
    ensure(_('foo {\\:bar}')).same('foo {:bar}')
  })

  it('Should replace occurrences not in the mapping by "".', function() {
    ensure(_('foo {:bar}')).same('foo ')
    ensure(_('foo {:bar} {:baz}')).same('foo  ')
  })

  it('Should replace occurrences in the mapping by the value.', function() {
    ensure(_('foo {:bar}', { bar: 1 })).same('foo 1')
    ensure(_('foo {:bar} {:baz}', { bar: 1
                                  , baz: ['x'] })).same('foo 1 x')
  })

  it('Should compute function values by applying them to the key.', function() {
    var stub = sinon.stub().returnsArg(0)
    ensure(_('foo {:bar}', { bar: stub })).same('foo bar')
    ensure(stub).invoke('calledWith', 'bar').ok()
  })
})