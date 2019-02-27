import 'whatwg-fetch'

// HTTP 工具类
export default class Http {
  static async request (method, url, data) {
    const param = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (method === 'GET') {
      url += this.formatQuery(data)
    } else {
      param['body'] = JSON.stringify(data)
    }

    // Tips.loading(); // 可调用 loading 组件

    return fetch(url, param).then(response => this.isSuccess(response))
      .then(response => {
        return response.json()
      })
  }

  // 判断请求是否成功
  static isSuccess (res) {
    if (res.status >= 200 && res.status < 300) {
      return res
    } else {
      this.requestException(res)
    }
  }

  // 处理异常
  static requestException (res) {
    const error = new Error(res.statusText)

    error.response = res

    throw error
  }

  // url处理
  static formatQuery (query) {
    let params = []

    if (query) {
      for (let item in query) {
        let vals = query[item]
        if (vals !== undefined) {
          params.push(item + '=' + query[item])
        }
      }
    }
    return params.length ? '?' + params.join('&') : ''
  }

  // 处理 get 请求
  static get (url, data) {
    return this.request('GET', url, data)
  }

  // 处理 put 请求
  static put (url, data) {
    return this.request('PUT', url, data)
  }

  // 处理 post 请求
  static post (url, data) {
    return this.request('POST', url, data)
  }

  // 处理 patch 请求
  static patch (url, data) {
    return this.request('PATCH', url, data)
  }

  // 处理 delete 请求
  static delete (url, data) {
    return this.request('DELETE', url, data)
  }
}
