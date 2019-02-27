import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

process.env.NODE_ENV === 'mock' && require('./mock/index.js')

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  Vue.config.performance = true
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
