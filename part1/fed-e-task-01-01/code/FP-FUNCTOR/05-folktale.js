/**
 * Task 异步执行
 * 1. 异步任务的实现过于复杂，我们使用 folktale 中的 task 演示
 * 2. folktale 一个标准的函数式变成库
 *    - 和 lodash、ramda 不同的是，他没有提供很多功能函数
 *    - 只是提供了一些函数式处理的操作，例如：compose、curry 等，一些函子 Task、Either、MayBe 等
 */
const {compose, curry} = require('folktale/core/lambda');
const {toUpper, first} = require('lodash/fp');

let f = curry(2, (x, y) => {
  return x + y
})

console.log(f(1, 2));
console.log(f(1)(2));

let l = compose(toUpper, first);

console.log(l(['one', 'two']))