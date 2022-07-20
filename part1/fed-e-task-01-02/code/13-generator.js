// 生成器函数

function * foo() {
    console.log('start')

    // const res = yield 'foo'
    // console.log(res)

    try {
        const res = yield 'foo'
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

/**
 * 调用生成器函数并不会立即执行，而是得到一个生成器对象
 * 知道手动调用这个生成器对象的 next() 方法，这个函数的函数体才会开始执行
 * 其次在函数内部可以使用 yield 关键词向外去返回一个值
 * 我们可以在 next 方法的返回对象当中拿到这个值
 * 在返回的对象中还存在一个 done 属性，用来表示这个生成器是否已经全部执行完成
 * yield 关键词并不会像 return 语句一样立即去结束函数的执行，他只是暂停生成器函数的执行，知道外界下一次调用生成器对象的 next 方法时，他就会继续从 yield 这个位置向下执行
 * 另外，当调用生成器对象 next 方法时如果传入了一个参数，传入的参数将作为 yield 的返回值
 * */
const generator = foo()

const result = generator.next();
console.log(result)

// generator.next('bar')

generator.throw(new Error('Generator error'))