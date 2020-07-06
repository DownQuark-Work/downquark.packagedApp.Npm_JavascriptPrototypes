const t = require('tap'),
      con = require('../../dist/console.js').Defaults

// headless specs, all I can think of right now
t.type(console.devCount,'undefined', 'Console method DNE')
t.type(console.dev,'undefined', 'Console method DNE')
con()
t.isNot(console.devCount,'undefined', 'Console method Exists')
t.isNot(console.dev,'undefined', 'Console method Exists')

/*
// console.dev('base', 'group-table', [1, 3, 'mom', 'bob'], 1, 3, 'mom', 'bob')
  // console.dev('base', 'ungroup-table', [1, 3, 'mom', 'bob'], 1, 3, 'mom', 'bob') // if _groupByDefault is true
  // console.dev('base', 'table', [1, 3, 'mom', 'bob'], 1, 3, 'mom', 'bob')
  
*/
function fnc(){ return 'true' }
  t.test('console log types', t =>{
    t.is(console.dev('base','group-info',13,'hello',{'dq':13},fnc).replace(/\d{13}/,'').trim(),'[BASE] <INFO> : 🕐 13"hello"{"dq":13}undefined', 'success BASE')
    t.is(console.dev('base',{branchTEST:'UNSHIFT ME'},13,'hello',{'dq':13},fnc).replace(/\d{13}/,'').trim(),'[BASE] <LOG> : 🕑 ""{"branchTEST":"UNSHIFT ME"}13"hello"{"dq":13}undefined', 'successUnshift')
    t.is(console.dev('base','group-warn',13,'hello string',{'dq':13},fnc).replace(/\d{13}/,'').trim(),'[BASE] <WARN> : 🕒 13"hello string"{"dq":13}undefined')
    t.is(console.dev('base','ungroup-error',13,'hello string',{'dq':13},fnc).replace(/\d{13}/,'').trim(),'[BASE] : 🕓 13"hello string"{"dq":13}undefined')
    t.is(console.dev('base','group-error',13,'hello string',{'dq':13},fnc).replace(/\d{13}/,'').trim(),'[BASE] <ERROR> : 🕔 13"hello string"{"dq":13}undefined')
    t.is(console.dev('base','group-table',{branchTEST:'UNSHIFT ME'},13,'hello',{'dq':13},fnc).replace(/\d{13}/,'').trim(),'[BASE] <TABLE> : 🕕 {"branchTEST":"UNSHIFT ME"}13"hello"{"dq":13}undefined', 'successUnshift')
    t.is(console.dev('base','ungroup-table',{branchTEST:'UNSHIFT ME'},13,'hello',{'dq':13},fnc).replace(/\d{13}/,'').trim(),'[BASE] : 🕖 {"branchTEST":"UNSHIFT ME"}13"hello"{"dq":13}undefined', 'successUnshift')


    

    console.IN_DEVELOPMENT._global = false
    t.is(console.dev('base','group-info','hello',{false:'string','dq':13},fnc),false,'success BASE')
    t.end()
  // t.doesNotThrow(function branchTest1(){console.dev('base','hello',{'dq':13},fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest2(){console.dev('base','group-info',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest3(){console.dev('base','ungroup-table',{'dq':13},fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest4(){console.dev('base',fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest5(){console.dev('base',{'dq':13})},{},'successfully logs to console')
  // t.throws(function branchTest6(){console.dev('base',null)},{},'null throws type error')
  
  // t.doesNotThrow(function branchTest1x(){console.dev('contactPage','hello',{'dq':13},fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest2x(){console.dev('contactPage','group-info',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest3x(){console.dev('contactPage','hello')},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest4x(){console.dev('contactPage',fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest5x(){console.dev('contactPage',{'dq':13})},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest6x(){console.dev('contactPage',null)},{},'null is allowed here')

  // console.IN_DEVELOPMENT._groupByDefault = false

  // t.doesNotThrow(function branchTest1z(){console.dev('base',{branchTEST:'UNSHIFT ME'},'hello',{'dq':13},fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('base','group-info',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest3z(){console.dev('base','hello')},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest4z(){console.dev('base',fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest5z(){console.dev('base',{'dq':13})},{},'successfully logs to console')
  // t.throws(function branchTest6(){console.dev('base',null)},{},'null throws type error')

  // t.doesNotThrow(function branchTest1xz(){console.dev('base','assert','hello',{'dq':13},fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest2xz(){console.dev('base','-error',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2xz(){console.dev('base','-info',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2xz(){console.dev('base','-log',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2xz(){console.dev('base','table',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2xz(){console.dev('base','trace',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2xz(){console.dev('base','warn',{'dq':13},fnc)},'successfully logs to console')

  // t.doesNotThrow(function branchTest1zxz(){console.dev('base','ungroup-assert','hello',{'dq':13},fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest2zxz(){console.dev('base','ungroup-error',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2zxz(){console.dev('base','ungroup-info',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2zxz(){console.dev('base','ungroup-log',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2zxz(){console.dev('base','ungroup-table',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2zxz(){console.dev('base','ungroup-trace',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2zxz(){console.dev('base','ungroup-warn',{'dq':13},fnc)},'successfully logs to console')

  // //'assert','error','info','log','table','trace','warn'

  // console.IN_DEVELOPMENT._global = false

  // t.doesNotThrow(function branchTest1w(){console.dev('contactPage','hello',{'dq':13},fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest2w(){console.dev('contactPage',7,'group-info',7,{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest3w(){console.dev('contactPage','hello')},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest4w(){console.dev('contactPage',fnc)},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest5w(){console.dev('contactPage',{'dq':13})},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest5w(){console.dev('contactPage',true,{'dq':13})},{},'successfully logs to console')
  // t.doesNotThrow(function branchTest6w(){console.dev('contactPage',null)},{},'null is allowed here')

  // t.throws(function branchTest1z(){console.dev('base','group-assert',false,'hello',{'dq':13},fnc)},{},'throws with false boolean as first option')
  // t.doesNotThrow(function branchTest2z(){console.dev('base','group-error',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('nokey','group-info',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('none','group-log',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('base','group-table',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('base','group-trace',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('base','group-warn',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('base','group-fail',{'dq':13},fnc)},'successfully logs to console')
  // t.doesNotThrow(function branchTest2z(){console.dev('base','group-xmen',{'dq':13},fnc)},'successfully logs to console')

  // t.end()
})
