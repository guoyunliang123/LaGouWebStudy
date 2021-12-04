// 模拟常用高阶函数：map、every、some

// map
const map = (array, fn) => {
  const results = [];
  for (let value of array) {
    results.push(fn(value))
  }
  return results;
}

// 测试
// let arr = [1, 3, 5, 8, 10];
// arr = map(arr, v => v * v)
// console.log(arr)


// every
const every = (array, fn) => {
  let result = true;
  for (let value of array) {
    result = fn(value);
    if (!result) {
      break
    }
  }
  return result;
}

// 测试
// let arr = [9, 12, 16];
// let r = every(arr, v => v > 10);
// console.log(r);


// some
const some = (array, fn) => {
  let result = false;
  for (let value of array) {
    result = fn(value);
    if (result) {
      break;
    }
  }
  return result;
}

// 测试
// let arr = [1, 5, 7, 11];
// let r = some(arr, v => v > 10);
// console.log(r);


// sort
const sort = (array, fn) => {
  for (let i = 0; i < array.length; i++) {

  }
}

let arr = [10, 7, 9, 8];
