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
  // t.test('d1',t => {return console.dev('base','hello',{'dq':13},fnc).then(x => console.log('x',x));}).then(z => console.log('z',z))
    // t.test('d1',t => {console.dev('base','hello',{'dq':13},fnc); t.end()}).then(d => console.log('ddddddd',d))
    // t.stdin('d1',t => {console.dev('base','hello',{'dq':13},fnc); t.end()}).then(d => console.log('ddddddd',d))
    // t.test('GO',t=>(console.dev('base',{},{},'bobbyz')).then(x=>console.log('xxxxx',x)))
    
    // console.log('process',process.stdin.on)
  // console.log('stdin',stdin)
  // t.stdout.on('data', function(data){
  //                     console.log('TTTT',data.toString());
  //             });
  // process.stdout.on('data', function(data){
  //                     console.log('xxx',data.toString());
  //             });
  t.doesNotThrow(function branchTest2(){console.dev('base','group-info',{'dq':13},fnc)},'successfully logs to console')
  t.doesNotThrow(function branchTest3(){console.dev('base','hello')},{},'successfully logs to console')
  t.doesNotThrow(function branchTest4(){console.dev('base',fnc)},{},'successfully logs to console')
  t.doesNotThrow(function branchTest5(){console.dev('base',{'dq':13})},{},'successfully logs to console')
t.doesNotThrow(function branchTest6(){console.dev('contactPage',null)},{},'successfully logs to console')
  t.end()
})
