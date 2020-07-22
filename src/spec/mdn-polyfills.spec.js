const t = require('tap'),
      Polyfills = require('../js/mdn-polyfills.js').Defaults

if(Array.prototype.fill){delete Array.prototype.fill}
if(Array.prototype.filter){delete Array.prototype.filter}
if(Array.prototype.find){delete Array.prototype.find}

t.test('Polyfills DNE when initted', t => {
  t.type(Array.fill,'undefined', 'Array fill polyfll DNE')
  t.type(Array.filter,'undefined', 'Array fill polyfll DNE')
  t.type(Array.find,'undefined', 'Array fill polyfll DNE')
  t.end()
})

t.test('Imported polyfills specified', t => {
  t.type(Polyfills.Defaults,'function', 'Default prototype function exists')
  t.type(Polyfills.include,'object', 'Default prototype function exists')
  t.end()
})

t.test('Can import specific polyfills', t => {
  const {fill, filter} = Polyfills.include
  fill(); filter()

  t.isNot(Array.fill,'undefined', 'Array fill Exists')
  t.isNot(Array.filter,'undefined', 'Array filter Exists')

  t.end()
})

t.test('Can enable all polyfills', t => {
  Polyfills.Defaults()
  t.isNot(Array.find,'undefined', 'Non default, nested Date Calendar method Exists')
  t.end()
})