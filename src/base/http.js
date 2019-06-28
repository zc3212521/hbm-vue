import ajax from './axios'

String.prototype.renderUrl = function (context) { // eslint-disable-line
  return this.replace(/{(.*?)}/g, (match, key) => context[key.trim()])
}

class Http {
  static get (url, params, urlParams) {
    url = this._formatUrl(url, urlParams)
    return ajax.get(url, { params })
  }

  static post (url, params, urlParams) {
    this._formatParams(params)
    url = this._formatUrl(url, urlParams)
    return ajax.post(url, params)
  }

  static put (url, params, urlParams) {
    this._formatParams(params)
    url = this._formatUrl(url, urlParams)
    return ajax.put(url, params)
  }

  static delete (url, params, urlParams) {
    url = this._formatUrl(url, urlParams)
    return ajax.delete(url, { params })
  }

  static patch (url, params, urlParams) {
    this._formatParams(params)
    url = this._formatUrl(url, urlParams)
    return ajax.patch(url, params)
  }

  /**
   * 替换url中的{name}, 为所传参数{name: 'zhangsan '} 中的 zhangsan
   * @param url eg: '/test/{userId}/somestr/{userName}/over'
   * @param urlParams eg: {userId: 1, userName: 'zhangsan'}
   * @returns {*} eg: '/test/1/somestr/zhangsan/over'
   * @private
   */
  static _formatUrl (url, urlParams) {
    if (urlParams) {
      Object.keys(urlParams).forEach(key => {
        if (url.indexOf(key) < 0) {
          console.error(`请求地址中不存在参数：${key}`)
        }
      })
      return url.renderUrl(urlParams)
    }
    return url
  }

  /**
   * 删除参数中空数组或者空对象的参数
   * @param params
   * @private
   */
  static _formatParams (params) {
    if (params instanceof Object) {
      Object.keys(params).forEach(item => {
        if (item instanceof Object) {
          if (item instanceof Array) {
            if (item.length === 0) {
              delete params[item]
            }
          } else {
            if (Object.keys(item).length === 0) {
              delete params[item]
            }
          }
        }
      })
    }
  }
}

export default Http
