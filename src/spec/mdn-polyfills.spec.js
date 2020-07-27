const t = require('tap'),
      mdn = require('../../dist/mdn-polyfills.js')

t.test('Imported polyfill functions specified', t => {
  t.type(mdn.Defaults,'function', 'Default polyfill function exists')
  t.type(mdn.include,'object', 'Default prototype function exists')
  t.end()
})