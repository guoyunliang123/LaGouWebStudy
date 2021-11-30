// 记忆函数
const _ = require('lodash');

function getArea (r) {
  console.log(r); // 只输出了一次
  return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea);
// console.log(getAreaWithMemory(4)); // 这个函数只执行了一次，之后是从缓存里面直接读取打印出来
// console.log(getAreaWithMemory(4));
// console.log(getAreaWithMemory(4));

function memoize (f) {
  let cache = {}; // 用来缓存结果
  return function () {
    let key = JSON.stringify(arguments);
    cache[key] = cache[key] || f.apply(f, arguments);
    return cache[key];
  }
}

let getAreaWithMemory = memoize(getArea);
console.log(getAreaWithMemory(5));
console.log(getAreaWithMemory(5));
console.log(getAreaWithMemory(5));