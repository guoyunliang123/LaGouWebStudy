// async await

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
}


async function main() {
    try {
        const users = await ajax('./api/users.json')
        console.log(users)

        const posts = await ajax('/api/posts.json')
        console.log(posts)

        const urls = await ajax('/api/urls.json')
        console.log(urls)
    } catch (e) {
        console.log(e)
    }
}

// async 会返回一个 promise 对象
const promise = main();
promise.then(() => {
    console.log('all completed')
})

