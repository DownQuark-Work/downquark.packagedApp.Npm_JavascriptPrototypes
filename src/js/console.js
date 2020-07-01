module.exports = () => {
  const IN_DEVELOPMENT = { //defaults
        _global:true,
        _groupByDefault:true,
        base:true,
        contactPage:false,
      }
      
  console.devCount=0
  console.dev = (key, ...opts) =>
  {
    console.log('IN_DEVELOPMENT',IN_DEVELOPMENT)
    if(IN_DEVELOPMENT._global && IN_DEVELOPMENT[key])
    {
      if(typeof(opts[0]) !== String){ opts.unshift('') }
      const printTypes = ['assert','error','info','log','table','trace','warn'],
        printGroup = opts[0].includes('group-') ? !IN_DEVELOPMENT._groupByDefault : IN_DEVELOPMENT._groupByDefault,
        printType = printTypes.includes(opts[0].split('-').pop()) ? opts.shift().split('-').pop() : 'log',
        timers = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧']
      
      printGroup && console.groupCollapsed(`[${key.toUpperCase()}] ${opts[0].toUpperCase()} : ${timers[console.devCount++ % timers.length]} ${new Date().getTime()}`)
      opts.forEach(itm => {
        console.log('typeof(itm)',typeof(itm), itm.name, itm)
        if(itm === Object(itm))//spread objects & arrays
        { console[printType]({ ...itm }) }
        else if(typeof(itm) === 'function')
        { console[printType](String(typeof(itm)).toUpperCase(), `[${itm.name}] : `, itm) }
        else // handle primitives
        { console[printType](typeof(itm).toUpperCase(), ' : ', itm) }
      })
      console.groupCollapsed('stack') //allows to find file where console.dev originated
      console.trace()
      console.groupEnd()
      printGroup && console.groupEnd()
    }
  }
}