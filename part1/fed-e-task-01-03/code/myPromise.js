const PENDING = 'pending'; // 等待
const FULFILLED = 'fulFilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
    // 使用构造函数接收执行器, 并且执行器是立即执行
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }
    status = PENDING; // Promise 状态，默认为等待
    value = undefined; // 成功之后的值
    reason = undefined; // 失败的原因
    // 初始化数组：为了解决 promise 多次调用 then 方法
    successCallback = []; // 成功的回调
    failCallback = []; // 失败的回调
    // 定义箭头函数目的`：就是为了让当前的 this 指向当前实例对象
    resolve = value => {
        if(this.status !== PENDING) return; // 如果状态不是等待，则组织程序向下执行
        this.status = FULFILLED; // 将状态更改为成功
        this.value = value; // 保存成功之后的值
        // 判断成功回调是否存在，如果存在，调用
        // this.successCallback && this.successCallback(this.value);
        while (this.successCallback.length) this.successCallback.shift()();
    }
    reject = reason => {
        if(this.status !== PENDING) return; // 如果状态不是等待，则组织程序向下执行
        this.status = REJECTED; // 将状态更改为失败
        this.reason = reason; // 保存失败的原因
        // 判断失败回调是否存在，如果存在，调用
        // this.failCallback && this.failCallback(this.reason);
        while (this.failCallback.length) this.failCallback.shift()();
    }
    then (successCallback, failCallback) {
        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if(this.status === FULFILLED) {
                // 加定时器的原因：resolvePromise 方法里面是获取不到 promise2，所以将该处代码处理成异步
                setTimeout(() => {
                    try {
                        let x = successCallback(this.value);
                        /*
                        * 判断 x 的值是普通值还是 promise 对象
                        * 如果是普通值则直接调用 resolve
                        * 如果是 promise 对象，则需查看 promise 对象返回的结果
                        * 在根据 promise 对象返回的结果，决定调用 resolve，还是调用 reject
                        * */
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.status === REJECTED) {
                // 加定时器的原因：resolvePromise 方法里面是获取不到 promise2，所以将该处代码处理成异步
                setTimeout(() => {
                    try {
                        let x = failCallback(this.reason);
                        /*
                        * 判断 x 的值是普通值还是 promise 对象
                        * 如果是普通值则直接调用 resolve
                        * 如果是 promise 对象，则需查看 promise 对象返回的结果
                        * 在根据 promise 对象返回的结果，决定调用 resolve，还是调用 reject
                        * */
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else {
                // 等待状态 为了解决内部中的异步逻辑
                // 将成功回调和失败回调存储起来
                this.successCallback.push(() => {
                    // 加定时器的原因：resolvePromise 方法里面是获取不到 promise2，所以将该处代码处理成异步
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value);
                            /*
                            * 判断 x 的值是普通值还是 promise 对象
                            * 如果是普通值则直接调用 resolve
                            * 如果是 promise 对象，则需查看 promise 对象返回的结果
                            * 在根据 promise 对象返回的结果，决定调用 resolve，还是调用 reject
                            * */
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
                this.failCallback.push(() => {
                    // 加定时器的原因：resolvePromise 方法里面是获取不到 promise2，所以将该处代码处理成异步
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason);
                            /*
                            * 判断 x 的值是普通值还是 promise 对象
                            * 如果是普通值则直接调用 resolve
                            * 如果是 promise 对象，则需查看 promise 对象返回的结果
                            * 在根据 promise 对象返回的结果，决定调用 resolve，还是调用 reject
                            * */
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
            }
        });
        return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 为了判断在当前 promise 返回自己情况下报错
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if(x instanceof MyPromise) {
        // promise 对象
        // x.then(value => {resolve(value)}, reason => {reject(reason)})
        x.then(resolve, reject)
    } else {
        // 普通值
        resolve(x)
    }
}

module.exports = MyPromise;