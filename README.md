# downquark.work Javascript Prototypes

Creating a commonly used set of functions that also signals the official start of DownQuark’s commitment to Open Source.

## Usage
Using CommonJS for these to help differentiate between AMD/RequireJS modules commonly reused in projects. Any prototypes being used should be imported and instantiated a single time.
You will be able to specify which prototypes you wish to by importing the `Default` set of the module, or handpicking using the `include` method.
Currently, you can choose defaults, individuals, or add non-defaults

To import and init the defaults only:
- `const Prototypes = require('@downquark/utils-js-prototypes').Defaults()`
To select and initialize non-default methods:
```
const {konsole, date} = require('@downquark/utils-js-prototypes').include
date.Defaults() // <-- to include the modules defaults
konsole.include.consoleDev() // <-- specific OR non-default methods
```
Single line import and init examples for or non-default methods from 
```
const _ = require('@downquark/utils-js-prototypes').include.date.include.calendar()
const _2 = require('@downquark/utils-js-prototypes').include.date.Defaults()
```

This way of handling prototypes allows for easy scalability. We can create as many methods as we like without concern of package size or code bloat because we only import what is needed per project. e.g.:
` const multi-level-nested-prototype = require('@downquark/utils-js-prototypes').include.date.include.calendar.include.moonCycles.include.waning()`

TODO: Create prototypes of relevant snippets from [30 seconds of code](https://www.30secondsofcode.org/js/p/1).