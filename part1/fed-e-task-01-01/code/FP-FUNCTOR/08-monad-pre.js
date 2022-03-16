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

let cat = fp.flowRight(print, readFile);

// let r = cat('../package.json'); // 当前 cat IO(IO(x))
// 问题：IO 函子嵌套，使得代码不美观
let r = cat('../package.json')._value()._value();

console.log(r)