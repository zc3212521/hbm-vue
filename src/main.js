import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { log } from '@/utils'
import { baseURL } from '@/base/axios'

import './base/antd-vue-config.js'
import './base/icon'

log('%c 当前接口地址：' + baseURL, 'color: #1a6dd8')
log('%c 当前运行环境：%c' + process.env.NODE_ENV, 'color: #1a6dd8', 'color: red')

process.env.NODE_ENV === 'mock' && require('./mock/index.js')

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  Vue.config.performance = true
}

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
