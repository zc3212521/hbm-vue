import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './pages/home/Home.vue')
const Login = () => import(/* webpackChunkName: "about" */ './pages/login/Login.vue')
const Main = () => import(/* webpackChunkName: "main" */ './pages/home/main/Main.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layoutDefault',
      component: Home,
      children: [
        {
          path: 'main',
          name: 'main',
          component: Main
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: true
      }
    }
  ]
})
