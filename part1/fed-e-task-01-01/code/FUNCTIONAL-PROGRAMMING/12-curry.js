// 模拟实现 lodash 中的 curry 方法

const curry = function(func) {
  return function curriedFn(...args) {
    // 判断形参和实参的个数
    if(args.length < func.length) {
      return function () {
        // argument 是一个伪数组, 将剩余参数和原有参数组合在一起
        return curriedFn(...args.concat(Array.from(arguments)));
      }
    }
    return func(...args);
  }
}

function getSum(a, b, c) {
  return a + b + c
}
const curried = curry(getSum);

console.log(curried(1, 2, 3));
console.log(curried(1)(2, 3));
console.log(curried(1)(2)(3));