var brofist = require('brofist')
var tap = require('brofist-tap')
var specs = [require('./specs')]

brofist.run(specs, tap())