// @flow // have to keep this annotation for TAP tests
// defaults
const array = require('../dist/array.js').Defaults
const math = require('../dist/math.js').Defaults
const number = require('../dist/number.js').Defaults
const string = require('../dist/string.js').Defaults
// explicit
const konsole = require('../dist/console.js').Defaults
const date = require('../dist/date.js').Defaults

const Proto = () =>
{ // defaults
  array()
  math()
  number()
  string()
    // can only initiate prototypes 1x
  delete exports.Defaults
  return true;
}

exports.Defaults = Proto
exports.include = {array, math, number, string, konsole, date}