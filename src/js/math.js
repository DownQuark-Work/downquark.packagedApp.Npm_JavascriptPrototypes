module.exports = () = {
  Object.defineProperty(Math, 'msInDay', {
      get: function () { return 24*60*60*1000 },
      set: function (y) { console.error('ERROR: msInDay is READONLY') }
    })
}