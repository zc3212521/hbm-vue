import Vue from 'vue'
import Router from 'vue-router'

const LayoutDefault = () => import(/* webpackChunkName: "home" */ './pages/layoutDefault')
const Login = () => import(/* webpackChunkName: "about" */ './pages/login')
const Home = () => import(/* webpackChunkName: "main" */ './pages/layoutDefault/home')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layoutDefault',
      redirect: '/home',
      component: LayoutDefault,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
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
