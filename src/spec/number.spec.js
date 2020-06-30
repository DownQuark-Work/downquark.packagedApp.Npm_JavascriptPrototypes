const t = require('tap'),
      num = require('../js/number.js')
      // str = require('../../dist/number.js'),

t.type(Number.msOffset,'undefined', 'Number method DNE')
num()
t.isNot(Number.msOffset,'undefined', 'Number method Exists')