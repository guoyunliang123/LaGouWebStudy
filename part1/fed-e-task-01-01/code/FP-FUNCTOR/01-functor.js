// Functor 函子 是一个特殊的容器，通过一个普通的对象来实现，该对象具有 map 方法，map 方法可以运行一个函数对值进行处理(变形关系)

/*
* 函子总结
* 1. 函数式编程的运算不直接操作值，而是由函子完成
* 2. 函子就是一个实现了 map 契约的对象（所有的函子都有一个 map 方法）
* 3. 我们可以把函子想象成一个盒子，这个盒子里封装了一个值
* 4. 想要处理盒子中的值，我们需要给盒子的 map 方法传递一个处理值的函数（纯函数），由这个函数来对值进行处理
* 5. 最终 map 方法返回一个包含新值的盒子（函子）
* */

// class Container {
//   constructor(value) {
//     this._value = value; // 函子内部要将 value 这个值存储起来，只在内部维护，不对外公布
//   }
//
//   // map 方法，接收一个处理值的函数
//   map(fn) {
//     return new Container(fn(this._value)); // 返回一个新的函子
//   }
// }
//
// let r = new Container(5)
//   .map(x => x + 1)
//   .map(x => x * x)
// console.log(r); // Container { _value: 36 }


class Container {
  static of (value) {
    return new Container(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return Container.of(fn(this._value));
  }
}

let r = Container.of(5)
  .map(x => x + 1)
  .map(x => x * x)
console.log(r._value);

// 演示传入 null 或者 undefined 的问题
Container.of(null)
  .map(x => x.toUpperCase())