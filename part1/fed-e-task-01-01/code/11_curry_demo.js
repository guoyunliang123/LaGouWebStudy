// 柯里化案例
// ''.match(/\s+/g);
// ''.match(/\d+/g);

const _ = require('lodash');

const match = _.curry(function(reg, str) {
  return str.match(reg);
})

// 判断字符串中是否存在空格
const haveSpace = match(/\s+/g);
// console.log(haveSpace('hello world'));
// console.log(haveSpace('haha'));

// 判断字符串中是否存在数字
const haveNumber = match(/\d+/g);
// console.log(haveNumber('h1h2'));
// console.log(haveNumber('zs'));

// 过滤数组中有空白字符的元素
const filter = _.curry(function(func, array) {
  return array.filter(func);
})
console.log(filter(haveSpace, ['John Connor', 'John_Done']));

const findSpace = filter(haveSpace);
console.log(findSpace(['John Connor', 'John_Done']));

