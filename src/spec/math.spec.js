const t = require('tap'),
      mth = require('../../dist/math.js')

t.type(Math.msInDay,'undefined', 'Math method DNE')
mth()
t.isNot(Math.msInDay,'undefined', 'Math method Exists')

t.test('msInDay property', t => {
  t.equal(Math.msInDay,86400000, 'Ms in Day math is correct')
  t.throws(function(){Math.msInDay=13},{},'Milliseconds in Day is read one')
  
  t.end()
})
