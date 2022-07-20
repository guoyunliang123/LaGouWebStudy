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
    const users = yield ajax('./api/users.json')
    console.log(users)

    const posts = yield ajax('/api/posts.json')
    console.log(posts)
}

const g = main();

const result = g.next();

result.value.then(data => {
    const result2 = g.next(data)

    if(result2.done) return;

    result2.value.then(data => {
        const result3 = g.next(data)

        if(result3.done) return;

        result3.value.then(data => {
            g.next(data)
        })
        g.next(data)
    })
})