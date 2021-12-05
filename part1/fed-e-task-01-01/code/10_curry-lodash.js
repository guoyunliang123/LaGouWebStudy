// lodash 中的 curry 基本使用
const _ = require('lodash');

function getSum(a, b, c) {
  return a + b + c;
}

const curried = _.curry(getSum);

// console.log(curried(1, 2, 3), '全部参数');

// console.log(curried(1)(2, 3));
// console.log(curried(1)(2)(3));
// console.log(curried(1)(2, 3));

// let arr = [
//   {name: 'zhangsan', age: 20, num: 1},
//   {name: 'lisi', age: 30, num: 2},
//   {name: 'wangwu', age: 30, num: 3}
// ]
// let newArr = [
//   {sex: '女', yh: 'jj', num: 2},
//   {sex: '男', yh: 'zz', num: 3},
//   {sex: '男', yh: 'ss', num: 1},
// ]
// let c = arr.map((item, index) => {
//   return {...item, ...newArr[index]}
// })
// console.log(c)
// add = [
//   {name: 'zhangsan', age: 20, sex: '男', yh: 'ss'},
//   {name: 'lisi', age: 30, sex: '女', yh: 'jj'},
//   {name: 'wangwu', age: 30, sex: '男', yh: 'zz'}
// ]

// console.log(_.unionWith(arr, newArr))

// let fn = () => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < newArr.length; j++) {
//       if (i === j) {
//         Object.assign(arr[i], newArr[j]);
//       }
//     }
//   }
//   return arr;
// }
// console.log(fn())

// let arrList = [
//   {
//     name: 'zhangsan',
//     age: 30
//   },
//   {
//     name: 'lisi',
//     age: 40
//   }
// ]
// let a = arrList.reduce((sum, e) => sum + e.age, 0)
// console.log(a)