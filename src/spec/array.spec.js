const t = require('tap')
const arr = require('../js/array.js')

// shuffle dne
t.type(Array.prototype.shuffle,'undefined')
arr()
// shuffle added
t.type(Array.prototype.shuffle,'function')

t.test('Array Shuffle Prototype', t => {
  const arrBase = []
  let arrShuffleOne = [], arrShuffleTwo = []

  let a = 0
  while (a < 20) {
    a++
    arrBase.push(a)
    arrShuffleOne.push(a), arrShuffleTwo.push(a)
  }

  t.same(arrBase, arrShuffleOne, 'pre-shuffle arrays are equal')
  t.same(arrShuffleOne, arrShuffleTwo, 'pre-shuffle arrays are equal')

  arrShuffleOne.shuffle(), arrShuffleTwo.shuffle()
  t.notSame(arrBase, arrShuffleOne, 'post-shuffle arrays are !equal')
  t.notSame(arrShuffleOne, arrShuffleTwo, 'post-shuffle arrays are !equal')

  const arrShuffleThree = [...arrShuffleOne]
  t.same(arrShuffleOne, arrShuffleThree, 'cloned array is equal to source')
  arrShuffleOne.shuffle()
  t.notSame(arrShuffleOne, arrShuffleThree, 're-shuffled array has changed')
  t.notSame(arrBase, arrShuffleOne, 're-shuffled array DNE original array')
  t.end()
})