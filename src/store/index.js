import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
// import userInfo from './modules/userInfo'
import frontSetting from './modules/frontSetting'
import { getGlobalDict } from '@/http/common'
import { deepClone } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dicts: [],
    routerStack: [],
    routerStackLength: parseInt(localStorage.getItem('routerStackLength')) || 5,
    layoutMode: localStorage.getItem('layoutMode') || 'default'
  },
  modules: {
    permission,
    frontSetting
    // userInfo
  },
  mutations: {
    setLayoutMode (state, mode) {
      state.layoutMode = mode
    },
    setDict (state, options) {
      let originOptions = deepClone(state.dicts)
      options.forEach((item, i) => {
        let shouldCover = false
        originOptions.forEach((it, n) => {
          if (Object.keys(item)[0] === Object.keys(it)[0]) {
            shouldCover = true
            originOptions[n] = item
          }
        })
        if (!shouldCover) {
          originOptions.push(item)
        }
      })
      state.dicts = originOptions
    },
    setRouterStack (state, route) {
      let ifInStack = false
      state.routerStack.forEach((item) => {
        if (item.name === route.name) {
          ifInStack = true
        }
      })
      if (ifInStack) return
      if (state.routerStack.length >= state.routerStackLength) {
        state.routerStack.shift()
      }
      state.routerStack.push(route)
    },
    removeRouterStack (state, routeName) {
      let routerStack = deepClone(state.routerStack)
      let i = routerStack.findIndex((value) => {
        return value.name === routeName
      })
      routerStack.splice(i, 1)
      state.routerStack = routerStack
    },
    clearRouterStack (state) {
      state.routerStack = []
    },
    setRouterStackLength (state, num) {
      state.routerStackLength = num
    }
  },
  actions: {
    generateDict ({ commit }, types) {
      if (!(types instanceof Array)) {
        console.error('字典项更新参数错误')
        return
      }
      return new Promise(resolve => {
        getGlobalDict({
          type: types
        }).then(res => {
          if (res.data.code === 10000) {
            let options = res.data.data
            commit('setDict', options)
            resolve()
          }
        })
      })
    },
    updateRouterStack ({ commit }, route) {
      commit('setRouterStack', route)
    },
    removeOneRouter ({ commit }, routeName) {
      commit('removeRouterStack', routeName)
    },
    setClearRouterStack ({ commit }) {
      commit('clearRouterStack')
    },
    updateLayoutMode ({ commit }, mode) {
      localStorage.setItem('layoutMode', mode)
      commit('setLayoutMode', mode)
    },
    updateRouterStackLength ({ commit }, num) {
      localStorage.setItem('routerStackLength', num)
      commit('setRouterStackLength', num)
    }
  },
  getters: {
    // 获取指定字典项
    getDicts: (state) => (types) => {
      if (!(types instanceof Array)) {
        console.error('字典项获取参数错误')
        return
      }
      let result = []
      types.forEach((item, i) => {
        state.dicts.forEach((it, n) => {
          if (Object.keys(it)[0] === item) {
            result.push(state.dicts[n])
          }
        })
      })
      return result
    },
    getRouterStack: (state) => {
      return state.routerStack
    },
    getLayoutMode: (state) => {
      return state.layoutMode
    }
  }
})
