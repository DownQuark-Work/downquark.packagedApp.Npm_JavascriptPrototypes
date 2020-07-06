
const last = () => {
  Object.defineProperty(Array.prototype, 'last', {
      get: function ():number { return this[this.length - 1] },
      set: function (y) { throw new Error('ERROR: last Property is READONLY') }
    })
}
const len = () => {
  Object.defineProperty(Array.prototype, 'len', {
    get: function ():number { return this.length - 1 },
    set: function (y) { throw new Error('ERROR: len Property is READONLY') }
  })
}
const shuffle = () => {
  Array.prototype.shuffle = function<T>():Array<T>
  {
    let i = 0,
        j = 0,
        temp = null

    for (i = this.length - 1; i > 0; i -= 1)
    {
      j = Math.floor(Math.random() * (i + 1))
      temp = this[i]
      this[i] = this[j]
      this[j] = temp
    }
    return this
  }
}

const unique = () => {
Array.prototype.unique = function<T>():Array<T>
  { return this.filter((itm, indx, arr) => { return arr.indexOf(itm) === indx}); }
}

const Proto = () =>
{ // defaults
  last()
  len()
  shuffle()
  unique()
  return true;
}

exports.Defaults = Proto
exports.include = {last, len, shuffle, unique}