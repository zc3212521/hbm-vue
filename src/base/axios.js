import axios from 'axios'
import { baseUrl } from '@/baseConfig'
// import store from '@/store'
import { getToken } from '@utils/auth'

let baseURL
if (process.env.NODE_ENV === 'production') {
  baseURL = baseUrl.prod
} else {
  baseURL = baseUrl.dev
}

export { baseURL }

axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = false
axios.defaults.headers['Content-Type'] = 'application/json'

axios.interceptors.request.use(function (response) {
  // Do something with response data
  response.headers['HG-Token'] = getToken()
  return response
}, function (error) {
  // Do something with response error
  console.log('got ajax error', error)
  return Promise.reject(error)
})

// respone拦截器
axios.interceptors.response.use(
  response => response,
  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error)// for debug
    this.$message.info('wrong')
    return Promise.reject(error)
  })

export default axios
