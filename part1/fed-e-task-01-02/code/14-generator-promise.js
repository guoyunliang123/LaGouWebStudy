// Generator 配合 Promise 的异步方案

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

function * main() {
    try {
        const users = yield ajax('./api/users.json')
        console.log(users)

        const posts = yield ajax('/api/posts.json')
        console.log(posts)

        const urls = yield ajax('/api/urls111.json')
        console.log(urls)
    } catch (e) {
        console.log(e)
    }
}

// const g = main();

// 递归执行 Generator 函数
// function handleResult(result) {
//     if(result.done) return // 生成器函数结束
//     result.value.then(data =>{
//         handleResult(g.next(data))
//     }, error => {
//         g.throw(error)
//     })
// }
//
// handleResult(g.next())

// 生成器函数
function co(generator) {
    const g = generator();

    function handleResult(result) {
        if(result.done) return // 生成器函数结束
        result.value.then(data =>{
            handleResult(g.next(data))
        }, error => {
            g.throw(error)
        })
    }

    handleResult(g.next())
}

co(main);

// const result = g.next();
//
// result.value.then(data => {
//     const result2 = g.next(data)
//
//     if(result2.done) return;
//
//     result2.value.then(data => {
//         const result3 = g.next(data)
//
//         if(result3.done) return;
//
//         result3.value.then(data => {
//             g.next(data)
//         })
//         g.next(data)
//     })
// })