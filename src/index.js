// @flow // have to keep this annotation for TAP tests
// defaults
const array = require('../dist/array.js')
const math = require('../dist/math.js')
const number = require('../dist/math.js')
const string = require('../dist/string.js')
// explicit
const konsole = require('../dist/console.js')
const date = require('../dist/date.js')

const Proto = () =>
{ // defaults
  array()
  math()
  number()
  string()
    // can only initiate prototypes 1x
  delete exports.$
  return true;
}

exports.$ = Proto
exports._ = {array, math, number, string, konsole, date}