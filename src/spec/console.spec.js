const t = require('tap'),
      con = require('../../dist/console.js')

// headless specs, all I can think of right now
t.type(console.devCount,'undefined', 'Console method DNE')
t.type(console.dev,'undefined', 'Console method DNE')
con()
t.isNot(console.devCount,'undefined', 'Console method Exists')
t.isNot(console.dev,'undefined', 'Console method Exists')