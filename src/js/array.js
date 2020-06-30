// @flow // figure out how tap will not need the annotation
module.exports = () => {
  if (!Array.prototype.last && !Array.prototype.len) // Needed if using hmr
  {
    Object.defineProperty(Array.prototype, 'last', {
      get: function () { return this[this.length - 1] },
      set: function (y) { throw new Error('ERROR: last Property is READONLY') }
    })
    Object.defineProperty(Array.prototype, 'len', {
      get: function () { return this.length - 1 },
      set: function (y) { throw new Error('ERROR: len Property is READONLY') }
    })
  }

  Array.prototype.shuffle = function()
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

Array.prototype.unique = function<T>():Array<T>
  { return this.filter((itm, indx, arr) => { return arr.indexOf(itm) === indx}); }
}