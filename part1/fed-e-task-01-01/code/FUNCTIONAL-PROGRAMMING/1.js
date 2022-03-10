// function filter(array, fn) {
//   let results = [];
//   for (let i = 0; i < array.length; i++) {
//     if (fn(array[i])) {
//       results.push(array[i])
//     }
//   }
//   return results;
// }
//
// let arr = [1, 10, 39, 33, 2, 8, 88];
// let r = filter(arr, function (item) {
//   return item % 2 === 0;
// })
// console.log(r)

// once 让函数只执行一次
// function once (fn) {
//   let done = false;
//   return function(){
//     if(!done) {
//       done = true;
//       return fn.apply(this, arguments);
//     }
//   }
// }
//
// let pay = once(function (money) {
//   console.log(`支付: ${money} RMB`);
// })
//
// pay(100);
// pay(200);
// pay(300);
// pay(400);
// pay(500);

// 纯函数 / 不是纯函数
// slice / splice

let array = [1, 2, 3, 4, 56, 7, 99];

// 三次输出相同的结果
console.log(array.slice(0, 6));
console.log(array.slice(0, 6));
console.log(array.slice(0, 6));

// 每次输出的结果都不一样  因为 splice 会改变原有数组
console.log(array.splice(0, 4));
console.log(array.splice(0, 4));
console.log(array.splice(0, 4));
