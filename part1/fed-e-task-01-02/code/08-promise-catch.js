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

// ajax('./api/users.json').then(
//     function onFulfilled(value) {
//         console.log('onFulfilled', value)
//     },
//     function onRejected(error) {
//         console.log('onRejected', error)
//     }
// )

// ajax('./api/users11.json')
//     .then(function onFulfilled(value) {
//         console.log('onFulfilled', value)
//     })
//     .catch(undefined, function onRejected(error) {
//         console.log('onRejected', error)
//     })

// 捕获不到异常
// ajax('./api/users.json')
//     .then(function onFulfilled(value) {
//         console.log('onFulfilled', value)
//         return ajax('./error-url')
//     }, function onRejected(error) {
//         console.log('onRejected', error)
//     })
// 可以捕获到异常
ajax('./api/users.json')
    .then(function onFulfilled(value) {
        console.log('onFulfilled', value)
        return ajax('./error-url')
    })
    .catch(function onRejected(error) {
        console.log('onRejected', error)
    })