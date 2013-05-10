var spec = require('brofist')()
var chai = require('chai')
var expect = chai.expect

var _ = require('../../')

module.exports =
spec('λ format', function(it) {

  it('Should not replace escaped template variables.', function() {
    expect(_('foo {\\:bar}')).to.equal('foo {:bar}')
  })

  it('Should replace occurrences not in the mapping by "".', function() {
    expect(_('foo {:bar}')).to.equal('foo ')
    expect(_('foo {:bar} {:baz}')).to.equal('foo  ')
  })

  it('Should replace occurrences in the mapping by the value.', function() {
    expect(_('foo {:bar}', {bar:1})).to.equal('foo 1')
    expect(_('foo {:bar} {:baz}', { bar: 1
                                  , baz: ['x'] })).to.equal('foo 1 x')
  })

  it('Should compute function values by applying them to the key.', function() {
    function id(a){ return a }
    expect(_('foo {:bar}', {bar:id})).to.equal('foo bar')
  })
})