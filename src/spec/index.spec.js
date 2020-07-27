const t = require('tap'),
    Prototypes = require('../index.js')

// remove prototypes for base testing
if(String.prototype.endsWith){delete String.prototype.endsWith}
if(String.prototype.padStart){delete String.prototype.padStart}

t.test('Prototypes DNE when initted', t => {
  t.type(Array.last,'undefined', 'Array last prototype DNE')
  t.type(console.devCount,'undefined', 'Console method DNE')
  t.type(Date.daysOfWeek,'undefined', 'Date method DNE')
  t.type(Math.msInDay,'undefined', 'Math method DNE')
  t.type(Number.msOffset,'undefined', 'Number method DNE')
  t.type(String.endsWith,'undefined', 'String method DNE')
  t.end()
})

t.test('Imported prototype and polyfill functions specified', t => {
  t.type(Prototypes.Defaults,'function', 'Default prototype function exists')
  t.type(Prototypes.include,'object', 'Default prototype object of functions exist')
  t.type(Prototypes.Polyfills,'function', 'Default Polyfills function exists')
  t.type(Prototypes.polyfill,'object', 'Default polyfills object of functions exist')
  t.end()
})

t.test('Can import default prototypes', t => {
  Prototypes.Defaults()
  t.isNot(Array.prototype.last,'undefined', 'Array last prototype Exists')
  t.isNot(Math.msInDay,'undefined', 'Math method Exists')
  t.isNot(Number.msOffset,'undefined', 'Number method Exists')
  t.isNot(String.endsWith,'undefined', 'String method Exists')

  t.type(console.devCount,'undefined', 'Console method DNE')
  t.type(Date.daysOfWeek,'undefined', 'Date method DNE')
  t.end();
})

t.test('Can import specific prototypes', t => {
  const {konsole, date} = Prototypes.include
  konsole.include.consoleDev(); date.Defaults()

  t.isNot(console.devCount,'undefined', 'Console method DNE')
  t.isNot(Date.daysOfWeek,'undefined', 'Date method DNE')

  t.end()
})

t.test('Include Nested Single protocol', t => {
  t.type(Date.getFullCalendarDates,'undefined', 'Non default, nested Date Calendar method DNE')
  Prototypes.include.date.include.calendar()
  t.isNot(Date.getFullCalendarDates,'undefined', 'Non default, nested Date Calendar method Exists')
  t.end()
})