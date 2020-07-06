const t = require('tap'),
      con = require('../../dist/console.js').Defaults

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
})
