const t = require('tap')
const arr = require('../../dist/array.js').Defaults

// prototypes dne
t.type(Array.prototype.last,'undefined', 'Array last prototype DNE')
t.type(Array.prototype.len,'undefined', 'Array len prototype DNE')
t.type(Array.prototype.shuffle,'undefined', 'Array shuffle prototype DNE')
t.type(Array.prototype.unique,'undefined', 'Array unique prototype DNE')

// init prototypes
arr()

t.isNot(Array.prototype.last,'undefined', 'Array last prototype Exists')
t.isNot(Array.prototype.len,'undefined', 'Array len prototype Exists')

const arrBase = []
let a = 0
while (a < 20) {
  a++
  arrBase.push(a)
}

t.test('Array Last Prototype', t => {
  t.equals(arrBase.last, arrBase[19], 'Array last getter returns last index of array')
  t.throws(function(){arrBase.last = 2},{},'last property is read only')
  t.equals(arrBase.last, 20, 'Array last getter is same after thrown set error')

  t.end()
})

t.test('Array Len Prototype', t => {
  t.equals(arrBase.len, 19, 'Array len getter returns len index of array')
  t.throws(function(){arrBase.len = 12},{},'len property is read only')
  t.equals(arrBase.len, 19, 'Array len getter is same after thrown set error')
  t.end()
})

t.same(arrBase[arrBase.len], arrBase.last, 'len and last return correct count and data')

t.test('Array Shuffle Prototype', t => {
  t.type(Array.prototype.shuffle,'function', 'Array shuffle prototype Exists')
  
  
  let arrShuffleOne = [...arrBase], arrShuffleTwo = [...arrBase]

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

t.test('Array Unique Prototype', t => {
  t.type(Array.prototype.unique,'function', 'Array unique prototype Exists')
  let arrNonUnique = [...arrBase]
  arrNonUnique.push(arrBase.last,arrBase.last)
  t.equals(arrNonUnique.length, arrBase.length+2, '2 new indexes added to non-unique array')
  t.same(arrNonUnique[arrNonUnique.len],arrNonUnique[arrNonUnique.len-1], 'last 2 indexes are identical')
  t.same(arrNonUnique[arrNonUnique.len-2],arrNonUnique[arrNonUnique.len-1], 'last 3 indexes are identical')
  
  let arrUnique = arrNonUnique.unique()
  t.equals(arrUnique.length, arrBase.length, 'removed 2 indexes from unique array')
  t.equals(arrUnique.last, arrBase.last, 'unique array has same last value as base array')
  t.notSame(arrUnique[arrUnique.len],arrUnique[arrUnique.len-1], 'last 2 indexes are no longer identical')

  t.end()
})