/**
 * Monad 函子是可以变扁的 Pointed 函子，IO(IO(x))
 * 一个函子如果具有 join 和 of 两个方法并遵守一些定律就是一个 Monad
 */

// IO 函子的问题
const fs = require('fs');
const fp = require('lodash/fp');

class IO {
  static of(value) {
    return new IO(function () {
      return value;
    })
  }

  constructor(fn) {
    this._value = fn;
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }

  join() {
    return this._value();
  }

  flotMap(fn) {
    return this.map(fn).join();
  }
}

let readFile = function (fileName) {
  return new IO(function () {
    return fs.readFileSync(fileName, 'utf-8');
  })
}

let print = function (x) {
  return new IO(function () {
    console.log(x);
    return x;
  })
}

let r = readFile('../package.json')
  // .map(x => x.toUpperCase())
  .map(fp.toUpper)
  .flotMap(print)
  .join()

console.log(r)