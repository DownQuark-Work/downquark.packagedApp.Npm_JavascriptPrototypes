// A FILE FOR REFERENCE:

// const tap = require('tap')
// const fs = require('fs')

// tap.pass('tap overview')
// tap.pass('API: https://node-tap.org/docs/api/')
// tap.pass('Asserts: https://node-tap.org/docs/api/asserts/')

// //async
// tap.test('some async stuff', childTest => {
//   fs.readdir(__dirname, (er, files) => {
//     if (er) {
//       throw er // tap will handle this
//     }
//     // childTest.match(files.join(','), 'array.spec.js,console.spec.js,date.spec.js,math.spec.js,number.spec.js,string.spec.js,tap.spec.js')
//     childTest.match(files.join(','), /spec\.js/) // regex or full string ☝️
//     // console.log('childTest',childTest)
//     childTest.end()
//   })
// })

// tap.test('this waits until after', childTest => {
//   // no asserts?  no problem!
//   // the lack of throwing means "success"
//   childTest.end()
// })

// //async promises
// function doSomethingAsync() {
//   return new Promise(resolve => { setTimeout(() => { resolve({ ok: true, message: /dogs/ }); }, 2000); })
// }
// tap.test('dogs should be ok', async t => {
//   const result = await doSomethingAsync()
//   t.match(result, { ok: true, message: /dogs/ }, 'dogs are ok')
//   // Or you can use any assertion lib you like.  as long as this
//   // code doesn't throw an error, it's a pass!
// })

// // tap.todo('make this happen', x => true)
// // tap.skip('no way', z => false)
// // tap.fail('failed test')

// //subtests
// /* // using .end()
// t.test('add() can add two numbers', t => {
//   t.equal(myThing.add(1, 2), 3, '1 added to 2 is 3')
//   t.equal(myThing.add(2, -1), 1, '2 added to -1 is 1')
//   t.throws(() => myThing.add('dog', 'cat'), 'cannot add dogs and cats')
//   t.end()
// })
// */

// /* // using async functions, no t.end() necessary
// t.test('times() can multiply two numbers', async t => {
//   t.equal(myThing.times(2, 2), 4, '2 times 2 is 4')
//   t.equal(myThing.times(-1, 3), 3, '-1 times 3 is -3')
//   t.throws(() => myThing.times('best', 'worst'), 'can only times numbers')
// })
// */

// /* // using plan to specify amount of times subtest is run
//     // SEE ALSO: https://node-tap.org/docs/api/fixtures/
// t.test('reads symbolic links properly', t => {
//   // setup the environment
//   // this will automatically get torn down at the end
//   const dir = t.testdir({
//     file: 'some file contents',
//     link: t.fixture('symlink', 'file'),
//   })

//   // test both synchronously and asynchronously.
//   // in this case we know there are 2 subtests coming,
//   // but we could also have called t.end() at the bottom
//   t.plan(2)

//   t.test('sync', async t => {
//     t.equal(myModule.readSync(dir + '/link'), 'file')
//     t.equal(myModule.typeSync(dir + '/link'), 'SYMBOLIC LINK')
//   })

//   t.test('async', async t => {
//     t.equal(await myModule.read(dir + '/link'), 'file')
//     t.equal(await myModule.type(dir + '/link'), 'SYMBOLIC LINK')
//   })
// })
// */