const t = require('tap'),
      num = require('../../dist/number.js').Defaults

t.type(Number.msOffset,'undefined', 'Number method DNE')
num()
t.isNot(Number.msOffset,'undefined', 'Number method Exists')

//amtMatch
  t.throws(function(){parseInt(12).msOffset(null)},{},'msOffset property must have required parameters')
  t.doesNotThrow(function(){new Date(1313131313131).getTime().msOffset('1d')},{},'msOffset function completes if valid arguments')

t.test('Number returns as offset miliseconds', t => {
  const dateTime = 1313131313131  
  t.equals(new Date(dateTime).getTime(), dateTime, 'Ensure we are starting at correct interval')
  t.equals(new Date(dateTime).getTime().msOffset('12d'),1314168113131, 'correct time 12 days in advance')
  t.throws(function(){new Date(dateTime).getTime().msOffset('nomatch')},{},'msOffset property must have required parameters')
  t.equals(new Date(dateTime).getTime().msOffset('-13M'), 1279435313131, 'Correct time 13 months previous')
  t.equals(new Date(dateTime).getTime().msOffset('-13 Monkeys being happy'),new Date(dateTime).getTime().msOffset('-13 Mummified scones'), 'correct string parsing')

    t.end()
})
