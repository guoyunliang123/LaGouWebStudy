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

ajax('./api/users.json').then(function (res) {
  console.log(res)
}, function (error) {
  console.log(error)
})