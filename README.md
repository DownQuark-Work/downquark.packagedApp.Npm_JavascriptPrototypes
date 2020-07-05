# downquark.work Javascript Prototypes

Creating a commonly used set of functions that also signals the official start of DownQuark’s commitment to Open Source.

## Usage
Using CommonJS for these to help differentiate between AMD/RequireJS modules commonly reused in projects. Any prototypes being used should be imported and instantiated a single time.
You will be able to specify which prototypes you wish to by importing the `Default` set of the module, or handpicking using the `include` method.
Currently, you can choose defaults, individuals, or add non-defaults
- `import proto from '@downquark/utils-js-prototypes' //all defaults`
- `import proto, {nonDefaults} from '@downquark/utils-js-prototypes' // all defaults and non-defaults`
- `import proto, {dateCalendar} from '@downquark/utils-js-prototypes' // all defaults and specified non-default only`
- `import {arrayLen,reverseStr,dateCalendar} from '@downquark/utils-js-prototypes' //specified prototypes only`
- `import {dateCalendar} from '@downquark/utils-js-prototypes' //specified prototypes only (no defaults would be imported)`