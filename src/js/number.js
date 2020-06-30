module.exports = () => {
  Number.prototype.msOffset = function(amt)
  { 
    const [mtch, d, s] = amt.match(/^(-?\d*)[^smhdwMy]*(s|m|h|d|w|M|y)/)
    if(isNaN(parseInt(d,10))){ throw new Error(`${d} can not be converted to an integer`) }
    if(!s){ throw new Error(`${s} is not a valid param. Please use this pattern /(s|m|h|d|w|M|y)/`) }
    
    let multAmt = 1, charArr = ['s','m','h','d'], multArr = [1000,60,60,24], multObj = {w:7,M:30,y:365}
    for(let i=0; i<charArr.length; i++)
    { multAmt *= multArr[i]; if(charArr[i] === s){ return this + parseInt(d,10) * multAmt} }
    return  this + parseInt(d,10) * multObj[s] * multAmt
  }
  /*
  //usage : new Date().getTimestamp().msOffset('12 m')
      // supports: (s)econds (m)inutes (h)ours (d)ays (w)eeks (M)onths [uses 30 days] (y)ears
      // any /\^(-?\d*)[^smhdwMy]*(s|m|h|d|w|M|y)/ pattern will work
        //'12d','12 d', '12 days', '-12 drunken sailors', '12 bobbing daffodils' = will all add (or subtract) 12 days worth of millis
  */
}