// 常用的 promise 的静态方法

function ajax(url) {
    return new Promise(function (resolve, reject) {
        // foo()
        // throw new Error()
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url) // 请求方式
        xhr.responseType = 'json'
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}

// Promise.resolve('foo') // 会直接返回一个状态为 fulfilled 的 promise 对象
//     .then(function(value) {
//         console.log(value)
//     })
//
// new Promise(function(resolve, reject) {
//     resolve('foo')
// })

// 通过 Promise.resolve 去包装一个 Promise 对象，实际上得到的就是原本的 Promise
// const promise = ajax('./api/users.json');
// const promise2 = Promise.resolve(promise);
// console.log(promise === promise2) // true

// Promise.resolve({
//     then: function(onFulfilled, onRejected) {
//         onFulfilled('foo')
//     }
// })
// .then(function (value) {
//     console.log(value)
// })

Promise.reject('anything')
    .catch(function(error) {
        console.log(error)
    })