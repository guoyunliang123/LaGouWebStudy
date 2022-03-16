/**
 * task 处理异步任务
 */
const fs = require('fs');
const {task} = require('folktale/concurrency/task');
const {split, find} = require('lodash/fp')

function readFile(fileName) {
  return task(resolver => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if(err) resolver.reject(err);

      resolver.resolve(data);
    })
  })
}

readFile('../package.json')
  .map(split('\n'))
  .map(find(x => x.includes('version')))
  .run() // 执行
  .listen({
    // 失败回调
    onRejected: err => {
      console.log(err)
    },
    // 成功回调
    onResolved: value => {
      console.log(value)
    }
  })
