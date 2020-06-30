const t = require('tap'),
      str = require('../../dist/string.js'),
      strng = 'To be, or not to be, that is the question.'

//force IE polyfills to be used
if(String.prototype.endsWith){delete String.prototype.endsWith}
if(String.prototype.padStart){delete String.prototype.padStart}

t.type(String.endsWith,'undefined', 'String method DNE')
t.type(String.padStart,'undefined', 'String method DNE')
str()
t.isNot(String.endsWith,'undefined', 'String method Exists')
t.isNot(String.padStart,'undefined', 'String method Exists')

t.test('String padStart Polyfill', t => {
  t.equals('abc'.padStart(10),'       abc','Spaces prepended by default')
  t.equals('abc'.padStart(10, "foo"),'foofoofabc','looped string prepended if specified')
  t.equals('abc'.padStart(6,"123465"),'123abc','Original String takes priority when overlap occurs')
  t.equals('abc'.padStart(1),'abc','Original string as-is when padding is less than original string character amount')

  t.end()
})

t.test('String endsWith Polyfill', t => {
  t.is(strng.endsWith('question.'), true, 'String ends with correct characters')
  t.is(strng.endsWith('to be'),false,'String does not end with incorrect characters')
  t.is(strng.endsWith('to be',19),true,'Incorrect characters become correct when limit string to a specific size')
  t.is(strng.endsWith('to be',13),false,'Incorrect characters remain incorrect when limit string to a difference specific size')

  t.end()
})