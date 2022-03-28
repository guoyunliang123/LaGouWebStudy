// Promise 基本示例

const promise = new Promise(function (resolve, reject) {
  // 这里用于 "兑现" 承诺

  // resolve(100) // 承诺达成

  reject(new Error('promise rejected')) // 承诺失败
})

promise.then(function (value) {
  console.log(value)
}, function (error) {
  console.log(error)
})

console.log('end');