declare class Array<T> extends BaseArray<T> {
  //must change Array to BaseArray Here: flow-typed/stubs/flow/flowlib_52074eb/core.js
  //declare class BaseArray<T> extends $ReadOnlyArray<T> {
  last: number,
  len: number,
  shuffle: () => Array<T>,
  unique: (callbackfn: (value: T, index: number, array: Array<T>) => mixed, thisArg?: mixed) => Array<T>;
}