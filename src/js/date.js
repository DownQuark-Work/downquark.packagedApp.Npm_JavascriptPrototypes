const stringFormats = () =>
{
  const setReadOnlyError = {set: function (y) { console.error('ERROR: This Property is READONLY') }}
  Object.defineProperty(Date.prototype, 'DEV',
    { get: function () { this.fmt = 'YYYYMMDD'; return this }, ...setReadOnlyError })
  Object.defineProperty(Date.prototype, 'DIRECTORY',
    { get: function () { this.fmt = 'YYYY-MM-DD'; return this }, ...setReadOnlyError })
  Object.defineProperty(Date.prototype, 'STANDARD',
    { get: function () { this.fmt = 'MM / DD / YYYY'; return this }, ...setReadOnlyError })
  Object.defineProperty(Date.prototype, 'TITLE',
    { get: function () { this.fmt = 'MM.DD YYYY'; return this }, ...setReadOnlyError })
  Date.prototype.formatDate = function(fm)
  {
    const dat = this,
          fmt = fm || this.fmt,
          amt = (s) => (fmt.match(new RegExp(s, 'gi')) || []).length
    const y = amt('y') === 2 ? String(dat.getUTCFullYear()).slice(-2) : dat.getUTCFullYear()+'',
          m = amt('m') === 2 ? String('0' + (dat.getUTCMonth() + 1)).slice(-2) : dat.getUTCMonth() + 1+'',
          d = amt('d') === 2 ? String('0' + (dat.getUTCDate())).slice(-2) : dat.getUTCDate()+''
    return fmt.replace(/([YMD]+)/gi, 
    (match, p1, offset, string) => p1.replace(/y+/gi, y).replace(/m+/gi, m).replace(/d+/gi, d))
    
  }
}

const makeReadable = () =>
{
  Object.defineProperty(Date, 'daysOfWeek', {
    get: function () { return ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'] },
    set: function (y) { throw new Error('ERROR: daysofWeek Property is READONLY') }
  })
  Date.prototype.getMonthsOfYear = (returnFullName) => returnFullName
                                                                ? ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"]
                                                                : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  Date.prototype.getNamedMonth = (indx, returnFullName) => returnFullName
                                                                ? ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"][indx]
                                                                : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][indx]
  Date.prototype.getNamedDay = (indx, returnFullName) => returnFullName
                                                                ? ['Sunday','Monday','Tuesday','Wedday','Thuday','Friday','Saturday'][indx]
                                                                : ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'][indx]
}

const ranged = () =>
{
  Date.prototype.getEpochRange = (startDate, endDate) => [new Date(startDate).getTime(), new Date(endDate).getTime()]
  Date.prototype.getRandomDate = (past,future) =>
  { //defaults to a 30 day range with `new Date()` as mid-point
    const currentTime = new Date().getTime(),
          dayInMS = 1000*60*60*24,
          offsetFuture = (future || 15)*dayInMS,
          offsetPast = (past || 15)*dayInMS,
          rangeEnd = currentTime+offsetFuture,
          rangeStart = currentTime-offsetPast,
          timestamp = Math.random()*rangeEnd-rangeStart
    return new Date(timestamp)
  }
}

const calendar = () =>
{
  Date.prototype.getFullCalendarDates = (dt) =>
  {
    const first = new Date(dt.getFullYear(), dt.getMonth(), 1),
          last = new Date(dt.getFullYear(), dt.getMonth() + 1, 0),
          startDay = new Date(first).getDay(),
          endDay = new Date(last).getDay(),
          startDayEpoch = new Date(first).getTime(),
          endDayEpoch = new Date(last).getTime(),
          daysInMonth = new Date(dt.getFullYear(), 
                                  dt.getMonth()+1,0).getDate(),
          daysLastMonth = new Date(dt.getFullYear(), 
                                  dt.getMonth(),0).getDate(),
          retDates = {
            numbered:[],
            epoch:[]
          },
          msInDay = 24*60*60*1000,
          totalIndexes = (startDay+daysInMonth > 5*7) ? 6*7 : 5*7
    for(let i=0; i<totalIndexes; i++)
    {
      if(i < startDay)
      {
        retDates.epoch.push(startDayEpoch-((startDay-i)*msInDay))
        retDates.numbered.push(daysLastMonth-(startDay-i)+1)
      }
      else if(i < daysInMonth+startDay)
      {
        retDates.epoch.push(startDayEpoch+((i-startDay)*msInDay))
        retDates.numbered.push(i-startDay+1)
      }
      else
      {
        retDates.epoch.push(startDayEpoch+((i-startDay)*msInDay))
        retDates.numbered.push(i-(daysInMonth+startDay)+1)
      }
    }
    return retDates
  }
}

const Proto = () =>
{ // defaults
  stringFormats()
  makeReadable()
  ranged()
  calendar()
    // can only initiate prototypes 1x
  delete exports.Defaults
  return true;
}

exports.Defaults = Proto
exports.include = {stringFormats, makeReadable, ranged, calendar}