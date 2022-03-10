// 柯里化演示
// function checkAge (age) {
//   let min = 18;
//   return age >= min;
// }

// 普通的纯函数
// function checkAge (min, age) {
//   return age >= min;
// }
//
// console.log(checkAge(18, 25));
// console.log(checkAge(18, 16));
// console.log(checkAge(22, 30));

// 函数的柯里化
// function checkAge (min) {
//   return function (age) {
//     return age >= min;
//   }
// }

let checkAge = min => (age => age >= min);

let checkAge18 = checkAge(18);
console.log(checkAge18(24));
console.log(checkAge18(15));
console.log(checkAge18(30));