// Promise 方式的 AJAX

function ajax(url) {
    return new Promise(function (resolve, reject) {
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


// const promise = ajax('./api/users.json');
//
// // promise.then 会返回一个 promise 对象
// const promise2 = promise.then(
//     function onFulfilled(value) {
//         console.log('onFulfilled', value)
//     },
//     function onRejected(error) {
//         console.log('onRejected', error)
//     }
// )
//
// console.log(promise2)
// console.log(promise2 === promise); // false

// 每一个 then 方法，它实际上都是为上一个 then 返回的 promise 对象添加状态明确过后的对象
ajax('./api/users.json')
    .then(function(value) {
        console.log(1111)
        return ajax('./api/users.json') // 可以手动返回一个 promise 对象
    }) // => Promise
    .then(function(value) {
        console.log(2222)
        console.log(value)
    }) // => Promise
    .then(function(value) {
        console.log(3333)
    }) // => Promise
    .then(function(value) {
        console.log(4444)
        return 'foo'
    }) // => Promise
    .then(function(value) {
        console.log(5555)
        console.log(value)
    })

/*
* 总结
* 1、Promise 对象的 then 方法会返回一个全新的 Promise 对象
* 2、后面的 then 方法就是在为上一个 then 返回的 Promise 注册回调
* 3、前面 then 方法中回调函数的返回值会作为后面 then 方法回调的参数
* 4、如果回调中返回的 Promise，那后面的 then 方法的回调会等待它的结束
* */