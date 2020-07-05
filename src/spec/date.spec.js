const t = require('tap'),
      dte = require('../../dist/date.js').Defaults

t.type(Date.daysOfWeek,'undefined', 'Date method DNE')
t.type(Date.formatDate,'undefined', 'Date method DNE')
t.type(Date.getMonthsOfYear,'undefined', 'Date method DNE')
t.type(Date.getNamedMonth,'undefined', 'Date method DNE')
t.type(Date.getNamedDay,'undefined', 'Date method DNE')
t.type(Date.getEpochRange,'undefined', 'Date method DNE')
t.type(Date.getRandomDate,'undefined', 'Date method DNE')
t.type(Date.getFullCalendarDates,'undefined', 'Date method DNE')
dte()
t.isNot(Date.daysOfWeek,'undefined', 'Date method Exists')
t.isNot(Date.formatDate,'undefined', 'Date method Exists')
t.isNot(Date.getMonthsOfYear,'undefined', 'Date method Exists')
t.isNot(Date.getNamedMonth,'undefined', 'Date method Exists')
t.isNot(Date.getNamedDay,'undefined', 'Date method Exists')
t.isNot(Date.getEpochRange,'undefined', 'Date method Exists')
t.isNot(Date.getRandomDate,'undefined', 'Date method Exists')
t.isNot(Date.getFullCalendarDates,'undefined', 'Date method Exists')

t.test('Date retreivals', t =>{
  t.same(Date.daysOfWeek,['Sun','Mon','Tues','Wed','Thu','Fri','Sat'], 'Days of the week getter')
  t.throws(function(){Date.daysOfWeek=[]},{},'daysOfWeek property is readonly')
  t.same(new Date().getMonthsOfYear(true), ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"], 'Full Months of the year')
  t.same(new Date().getMonthsOfYear(), ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 'Months of the year')
  t.same(new Date().getNamedMonth(0,false),'Jan','get Abbrv month by name working')
  t.same(new Date().getNamedMonth(3,true),'April','get Fulllmonth by name working')
  t.same(new Date().getNamedDay(3,false),'Wed','get Abbrv day by name working')
  t.same(new Date().getNamedDay(1,true),'Monday','get Full day by name working')

  t.end()
})

t.test('Date properties', t => {
  const staticDate = new Date(1593577297589).getTime()
  t.is(new Date(staticDate).getTime(),1593577297589,'Starting with synchronized date')
  t.same(new Date(staticDate).DEV.formatDate(),'20200701', 'It Formats DEV date')
  t.same(new Date(staticDate).DIRECTORY.formatDate(),'2020-07-01', 'It Formats DIRECTORY date')
  t.same(new Date(staticDate).STANDARD.formatDate(),'07 / 01 / 2020', 'It Formats STANDARD date')
  t.same(new Date(staticDate).TITLE.formatDate(),'07.01 2020', 'It Formats TITLE date')
  t.same(new Date(440226000000).formatDate('ddyymm'),'148312','custom formatted date')
  t.same(new Date(440226000000).formatDate('dym'),'14198312','custom formatted date branch test')
  t.same(new Date(440226000000).formatDate('no'),'no','custom formatted date branch test')
  t.end()
})

t.test('calendars logistics', t=> {
  const staticDate = new Date(1213121312131).getTime(),
        staticFullCalendar = {"numbered" : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5],"epoch" : [1212292800000,1212379200000,1212465600000,1212552000000,1212638400000,1212724800000,1212811200000,1212897600000,1212984000000,1213070400000,1213156800000,1213243200000,1213329600000,1213416000000,1213502400000,1213588800000,1213675200000,1213761600000,1213848000000,1213934400000,1214020800000,1214107200000,1214193600000,1214280000000,1214366400000,1214452800000,1214539200000,1214625600000,1214712000000,1214798400000,1214884800000,1214971200000,1215057600000,1215144000000,1215230400000]}
  t.same(new Date(staticDate).getEpochRange('jan 2020','feb 2020'),[1577854800000, 1580533200000], 'date ranges validate')
  t.pass(new Date(staticDate).getRandomDate('15','20'),'returns random date - valid as long as no error')
  t.pass(new Date(staticDate).getRandomDate(),'returns without args random date - valid as long as no error')
  t.same(new Date().getFullCalendarDates(new Date(staticDate)),staticFullCalendar, 'Full calendar is rendering days and times')
  t.end()
})

t.test('calendar branch testing', t=>{
  t.doesNotThrow(function(){new Date().getFullCalendarDates(new Date(13121312131))},{}, 'Month Starts After 1st Calendar Day')
  t.doesNotThrow(function(){new Date().getFullCalendarDates(new Date(1588478400000))},{}, 'Month Has Extra Week Row')
  t.end()
})