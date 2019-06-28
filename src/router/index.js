import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: {
      title: '登录页',
      icon: ''
    }
  }
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  if (window.vm) {
    window.vm.$store.dispatch('updateRouterStack', {
      name: to.name,
      title: to.meta.title,
      params: to.params
    })
  }
})

export default router
