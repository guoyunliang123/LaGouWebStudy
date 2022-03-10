/*
* mayBe 函子
* mayBe 函子的作用就是可以对外部的空值情况做处理（控制副作用在允许的范围）
* */
class MayBe {
  static of(value) {
    return new MayBe(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
  }

  isNothing() {
    return this._value === null || this._value === undefined
  }
}

// let r = MayBe.of(undefined)
//   .map(x => x.toUpperCase())

// MayBe 函子存在的问题：无法判断是哪个环节参数变成了 null
let r = MayBe.of('Hello World')
  .map(x => x.toUpperCase())
  .map(x => null)
  .map(x => x.split(' '))

console.log(r);