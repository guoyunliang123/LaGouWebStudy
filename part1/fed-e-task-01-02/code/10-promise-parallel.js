// promise 并行执行

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

/**
 * Promise.all 可以将多个 Promise 合并成一个 Promise 统一去管理
 * Promise.all 方法会返回一个全新的 promise 对象
 * 参数是一个数组，数组中的每一个元素都是 Promise 对象
 * 返回结果为一个数组，数组中的每一项为每一个异步任务的结果
 * */
// const promise = Promise.all([
//     ajax('./api/users.json'),
//     ajax('./api/users1.json')
// ])

/**
 * 所有的 Promise 成功之后才会成功，如果有一个失败则这个 Promise 会以失败结束
 * 这是一种同步执行多个 Promise 的方式
 * */
// promise.then(function(values) {
//     console.log(values)
// }).catch(function(error) {
//     console.log(error)
// })

// ajax('./api/urls.json')
//     .then(value => {
//         const urls = Object.values(value);
//         const tasks = urls.map(url => ajax(url))
//         return Promise.all(tasks)
//     })
//     .then(values => {
//         console.log(values)
//     })

/**
 * Promise.race() 和 Promise.all()
 * 相同点：都可以将多个 Promise 合并成一个 Promise 统一去管理
 * 不同点：Promise.all() 是等待所有任务结束之后才结束，Promise.race() 只会等待第一个结束的任务
 * */

const request = ajax('./api/posts.json');
const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('timeout')), 500)
})

Promise.race([request, timeout])
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })