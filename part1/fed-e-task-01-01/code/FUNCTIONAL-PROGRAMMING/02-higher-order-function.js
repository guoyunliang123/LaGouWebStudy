// 高阶函数，函数作为返回值

// function mackFn() {
//   let msg = 'Hello function';
//   return function () {
//     console.log(msg);
//   }
// }
//
// const fn = mackFn();
// fn();
// mackFn()();

// once JQ中，once 的作用是给一个 DOM 元素去注册事件，这个事件只会执行一次。
//      lodash中，once 是对一个函数只执行一次。

// once
function once (fn) {
  let done = false;
  return function () {
    if(!done) {
      done = true;
      return fn.apply(this, arguments);
    }
  }
}

let pay = once(function(money) {
  console.log(`支付了 ${money} RMB`);
});

pay(5);
pay(5);
pay(5);
pay(5);
