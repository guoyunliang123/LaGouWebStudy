// 纯函数和不纯的函数
// slice(不会改变原数组, 返回数组) / splice(会改变原有数组, 返回数组)

const arr = [1, 3, 5, 7, 9, 11];

// slice 纯函数  参数：1、起始位置  2、结束位置，不包含结束位置
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));

// splice 不纯函数  参数： 1、起始位置  2、截取的字长度
console.log(arr.splice(0, 3));
console.log(arr.splice(0, 3));
console.log(arr.splice(0, 3));

// 纯函数
function getSum (num1, num2) {
  return num1 + num2
}

console.log(getSum(1, 9));
console.log(getSum(1, 9));
console.log(getSum(1, 9));