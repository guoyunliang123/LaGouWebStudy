// 微任务 VS 宏任务

// 微任务：直接在当前任务结束之后立即执行   Promise 的回调就是作为微任务来执行的，MutationObserve
// 宏任务：                            setTimeout 是宏任务 自动添加到回调队列末尾来等待执行

console.log('global start');

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise.resolve()
    .then(() => {
        console.log('promise')
    })
    .then(() => {
        console.log('promise 2')
    })
    .then(() => {
        console.log('promise 3')
    })

console.log('global end')