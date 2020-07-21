// @flow // have to keep this annotation for TAP tests
// defaults
const array = require('../dist/array.js')
const math = require('../dist/math.js')
const number = require('../dist/number.js')
const string = require('../dist/string.js')
// explicit
const konsole = require('../dist/console.js')
const date = require('../dist/date.js')
// polyfills
const polyfills = require('../dist/mdn-polyfills.js')


const Proto = () =>
{ // defaults
  array.Defaults()
  math.Defaults()
  number.Defaults()
  string.Defaults()
    // can only initiate prototypes 1x
  exports && delete exports.Defaults
  return true
}

exports.Defaults = Proto
exports.include = {array, math, number, string, konsole, date}
exports.Polyfills = polyfills.Defaults
exports.polyfill = polyfills.include
