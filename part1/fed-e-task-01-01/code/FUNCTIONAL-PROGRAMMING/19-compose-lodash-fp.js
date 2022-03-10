// lodash 和 lodash/fp 模块中 map 的区别
const _ = require('lodash');

console.log(_.map(['23', '8', '10'], parseInt)); // [ 23, NaN, 2 ]
// parseInt 的第二个参数是把第一个参数转换为对应的进制数(2, 10, 16 进制等)
// parseInt('23', 0, ['23', '8', '10'])
// parseInt('8', 1, ['23', '8', '10'])
// parseInt('10', 2, ['23', '8', '10'])
// console.log(_.map(['23', '8', '10'], Number)); // [ 23, 8, 10 ]

const fp = require('lodash/fp');

console.log(fp.map(parseInt, ['23', '8', '10'])); // [23, 8, 10]
