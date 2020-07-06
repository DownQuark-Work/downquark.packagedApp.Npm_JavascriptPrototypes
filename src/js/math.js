const msInDay = () =>
{
  Object.defineProperty(Math, 'msInDay', {
    get: function () { return 24*60*60*1000 },
    set: function (y) { throw new Error('ERROR: msInDay Property is READONLY') }
  })
}

const Proto = () =>
{ // defaults
  msInDay()
    // can only initiate prototypes 1x
  exports && delete exports.Defaults
  return true;
}

exports.Defaults = Proto
exports.include = {msInDay}