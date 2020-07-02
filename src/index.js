// @flow // have to keep this annotation for TAP tests
// defaults
const array = require('../dist/array.js')
const math = require('../dist/math.js')
const number = require('../dist/math.js')
const string = require('../dist/string.js')
// explicit
const konsle = require('../dist/console.js')
const date = require('../dist/date.js')

const Proto = () =>
{ // defaults
  array()
  math()
  number()
  string()
}

module.pristine = true
module.prototypes = {array, math, number, string, konsole, date}
module.exports = () => { 
    //prevents multi-init of prototypes
  if(!module.pristine){return}
  module.pristine = false;
  Proto()
  // 
  }