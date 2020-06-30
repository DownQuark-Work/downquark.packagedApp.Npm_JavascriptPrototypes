declare class Array<T> extends BaseArray<T> {
  //must change Array to BaseArray Here: /private/tmp/flow/flowlib_3e7adff1/core.js
  last: number,
  len: number,
  shuffle: () => Array<T>,
  unique: (callbackfn: (value: T, index: number, array: Array<T>) => mixed, thisArg?: mixed) => Array<T>;
}