import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import { mutations } from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [1]
  },
  modules: {
    moduleA, // 引入 A 模块
    moduleB // 引入 B 模块
  },
  actions, // 根级别的 action
  mutations, // 根级别的 mutations

  // 根级别的 getters
  getters: {
    getGroups (state) {
      return state.groups
    }
  }
})
