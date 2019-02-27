import axios from 'axios'
import { baseUrl } from '@/baseConfig'

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

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  console.log('got ajax error', error)
  return Promise.reject(error)
})

export default axios
