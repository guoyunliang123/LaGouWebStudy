// Functor 函子 是一个特殊的容器，通过一个普通的对象来实现，该对象具有 map 方法，map 方法可以运行一个函数对值进行处理(变形关系)

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