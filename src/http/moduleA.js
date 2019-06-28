import http from '@/base/axios'
import $api from './api'

// 获取测试数据
export const getTestData = () => {
  return http.get($api.queryTestApi)
}
