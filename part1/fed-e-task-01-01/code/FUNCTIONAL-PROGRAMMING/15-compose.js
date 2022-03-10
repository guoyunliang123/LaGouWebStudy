// 模拟 lodash 中的 floatRight

// function compose(...args) {
//   return function (value) {
//     // reduce 第二个参数是第一次循环时的默认值
//     return args.reverse().reduce(function(arr, fn) {
//       return fn(arr)
//     }, value)
//   }
// }

const reverse = array => array.reverse();
const first = array => array[0];
const toUpper = str => str.toUpperCase();



const compose = (...args) => value => args.reverse().reduce((arr, fn) => fn(arr), value);

const f = compose(toUpper, first, reverse);

console.log(f(['one', 'two', 'three']));
