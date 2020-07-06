const msOffset = () => {
  Number.prototype.msOffset = function(amt)
  { 
    const amtMatch = amt.match(/^(-?\d*)[^smhdwMy]*(s|m|h|d|w|M|y)/)
    
    if(!amtMatch)
    { throw new Error(`invalid usage. Please ensure the argument matches this pattern /(s|m|h|d|w|M|y)/`) }
    
    const [mtch, d, s] = amtMatch
    if(isNaN(parseInt(d,10))){ throw new Error(`${d} can not be converted to an integer`) }
      // below is verified by line 7
    // if(!s){ throw new Error(`${s} is not a valid param. Please use this pattern /(s|m|h|d|w|M|y)/`) }
    
    let multAmt = 1, charArr = ['s','m','h','d'], multArr = [1000,60,60,24], multObj = {w:7,M:30,y:365}
    for(let i=0; i<charArr.length; i++)
    { multAmt *= multArr[i]; if(charArr[i] === s){ return this + parseInt(d,10) * multAmt} }
    return  this + parseInt(d,10) * multObj[s] * multAmt
  }
}

const Proto = () =>
{ // defaults
  msOffset()
  return true;
}

exports.Defaults = Proto
exports.include = {msOffset}