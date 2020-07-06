  const consoleDev = () => 
  {
    console.IN_DEVELOPMENT = { //defaults
        _global:true,
        _groupByDefault:true,
        base:true,
        contactPage:false
      }
    console.devCount=0
    console.dev = (key, ...opts) =>
    {
      console.log('... opts',opts)
      if(console.IN_DEVELOPMENT._global && console.IN_DEVELOPMENT[key])
      {
        if(typeof(opts[0]) !== 'string'){ opts.unshift('') }
        // opts.unshift('')
        const printTypes = ['assert','error','info','log','table','trace','warn'],
          printGroup = opts[0].includes('group-') ? opts[0].includes('ungroup-') ? false : true : console.IN_DEVELOPMENT._groupByDefault,
          printType = printTypes.includes(opts[0].split('-').pop()) ? opts.shift().split('-').pop() : 'log',
          timers = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧']
        console.log('printGroup,printType',printGroup,printType)
        let groupInfo = `[${key.toUpperCase()}]${printGroup ? ' <'+printType.toUpperCase()+'>' : ''} : ${timers[console.devCount++ % timers.length]} ${new Date().getTime()}`
        console.log('groupInfo',groupInfo)
        printGroup && console.groupCollapsed(groupInfo)
        console.log('xx> opts',opts)
        opts.forEach(itm => {
          console.log('itm',itm)
          groupInfo += JSON.stringify(itm) // shallow clone, but should be good enough for loggins
          if(typeof(itm) === 'function')
          {
            printType === 'table'
              ? console.table({itm})
              : console[printType](String(typeof(itm)).toUpperCase(), `[${itm.name}] : `, itm) }
          else if(itm === Object(itm))//spread objects & arrays
          { console[printType]({ ...itm }) }
          else // handle primitives
          {
            printType === 'table'
              ? console.table({itm})
              : console[printType](typeof(itm)+''.toUpperCase(), ' : ', itm)
          }
        })
        console.groupCollapsed('stack') //allows to find file where console.dev originated
        console.trace()
        console.groupEnd()
        printGroup && console.groupEnd()
        console.log('groupInfo',groupInfo)
        return groupInfo // allows for logging
      }
      return false
    }
  }

const Proto = () =>
{ // defaults
  consoleDev()
  return true;
}

exports.Defaults = Proto
exports.include = {consoleDev}