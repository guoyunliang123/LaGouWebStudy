const PENDING = 'pending'; // 等待
const FULFILLED = 'fulFilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
    // 使用构造函数接收执行器, 并且执行器是立即执行
    constructor(executor) {
        executor(this.resolve, this.reject)
    }
    status = PENDING; // Promise 状态，默认为等待
    value = undefined; // 成功之后的值
    reason = undefined; // 失败的原因
    // 定义箭头函数目的`：就是为了让当前的 this 指向当前实例对象
    resolve = value => {
        if(this.status !== PENDING) return; // 如果状态不是等待，则组织程序向下执行
        this.status = FULFILLED; // 将状态更改为成功
        this.value = value; // 保存成功之后的值
    }
    reject = reason => {
        if(this.status !== PENDING) return; // 如果状态不是等待，则组织程序向下执行
        this.status = REJECTED; // 将状态更改为失败
        this.reason = reason; // 保存失败的原因
    }
    then (successCallback, failCallback) {
        // 判断状态
        if(this.status === FULFILLED) {
            successCallback(this.value)
        } else if(this.status === REJECTED) {
            failCallback(this.reason)
        }
    }
}

module.exports = MyPromise;