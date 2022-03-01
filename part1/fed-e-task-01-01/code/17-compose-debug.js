// 函数组合 调试
// NEVER SAY DIE  --> never-say-die


const _ = require('lodash');

const split = _.curry((sep, str) => _.split(str, sep));

// _.toLower()
const map = _.curry((fn, array) => _.map(array, fn));

const join = _.curry((sep, array) => _.join(array, sep));

// 调试函数 缺点：无法判断是在哪个位置打印的结果
const log = v => {
  console.log(v);
  return v;
}

const trace = _.curry((tag, v) => {
  console.log(tag, v);
  return v;
})

// const f = _.flowRight(join('_'), _.toLower, log, split(' ')); // 调试时在对应的函数前面添加 log
const f = _.flowRight(join('_'), trace('map'), map(_.toLower), trace('split'), split(' '));

console.log(f('NEVER SAY DIE'));