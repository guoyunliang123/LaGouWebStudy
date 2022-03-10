// 高阶函数，函数作为参数

// forEach
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i])
  }
}

// 测试
// let arr = [1, 2, 5, 8, 90];
// forEach(arr, function (item) {
//   console.log(item);
// })

// filter
function filter(array, fn) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      results.push(array[i])
    }
  }
  return results;
}

// let filArr = [1, 2, 5, 7, 9];
// let newArr = filter(filArr, function(item) {
//   return item % 2 === 0
// })
// console.log(newArr);

const value = {number: 10};
const multiply = (x = {...value}) => {
  console.log(x.number *= 2)
}
multiply();
multiply();
multiply(value);
multiply(value);