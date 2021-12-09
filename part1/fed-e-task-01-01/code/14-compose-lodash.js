// lodash 中的函数组合方法 _.flowRight()

const _ = require('lodash');

const reverse = array => array.reverse();
const first = array => array[0];
const toUpper = str => str.toUpperCase();

const f = _.flowRight(toUpper, first, reverse);

console.log(f(['one', 'two', 'three']))

