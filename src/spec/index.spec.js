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

t.test('Imported prototype functions specified', t => {
  t.type(Prototypes.Defaults,'function', 'Default prototype function exists')
  t.type(Prototypes.include,'object', 'Default prototype function exists')
    for(let k in Prototypes.include)
    { t.type(Prototypes.include[k],'function', 'Included index on object is function') }
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
  t.end()
})

t.test('Can import specific prototypes', t => {
  const {konsole, date} = Prototypes.include
  konsole(); date()

  t.isNot(console.devCount,'undefined', 'Console method DNE')
  t.isNot(Date.daysOfWeek,'undefined', 'Date method DNE')
  
  t.end()
})

// console.log('Prototypes',Prototypes.include, Prototypes.Defaults, typeof(Prototypes.Defaults))
// console.log('Prototypes.Defaults()',Prototypes.Defaults())
// console.log('Prototypes.include',Prototypes.include)
// const {array, string} = Prototypes.include
// console.log('array, string',array, string)
// array(), array()