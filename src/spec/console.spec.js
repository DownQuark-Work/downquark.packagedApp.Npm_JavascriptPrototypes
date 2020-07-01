const t = require('tap'),
      con = require('../../dist/console.js')

// headless specs, all I can think of right now
t.type(console.devCount,'undefined', 'Console method DNE')
t.type(console.dev,'undefined', 'Console method DNE')
con()
t.isNot(console.devCount,'undefined', 'Console method Exists')
t.isNot(console.dev,'undefined', 'Console method Exists')

const fnc = () => true
t.test('console log types', t =>{
t.doesNotThrow(function branchTest1(){console.dev('base','hello',{'dq':13},fnc)},{},'successfully logs to console')
t.doesNotThrow(function branchTest2(){console.dev('base','group-info',{'dq':13},fnc)},{},'successfully logs to console')
t.doesNotThrow(function branchTest3(){console.dev('base','hello')},{},'successfully logs to console')
t.doesNotThrow(function branchTest4(){console.dev('base',fnc)},{},'successfully logs to console')
t.doesNotThrow(function branchTest5(){console.dev('base',{'dq':13})},{},'successfully logs to console')
t.doesNotThrow(function branchTest6(){console.dev('contactPage',null)},{},'successfully logs to console')
  t.end()
})
