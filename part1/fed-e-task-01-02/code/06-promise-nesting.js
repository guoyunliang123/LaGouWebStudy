// Promise 方式的 AJAX

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

// 嵌套使用是 promise 最常见的误区
ajax('./api/users.json').then(function (urls) {
  ajax(urls.users).then(function (users) {

  })
}, function (error) {
  console.log(error)
})