const frontSetting = {
  state: {
    theme: localStorage.getItem('theme') || 'light',
    showHistoryStack: localStorage.getItem('showHistoryStack') || '1'
  },
  mutations: {
    setTheme (state, theme) {
      state.theme = theme
    },
    setShowHistoryStack (state, type) { // type : '1' 显示， ‘0’ 不显示
      state.showHistoryStack = type
    }
  },
  actions: {
    updateTheme ({ commit }, theme) {
      localStorage.setItem('theme', theme)
      commit('setTheme', theme)
    },
    updateShowHistoryStack ({ commit }, type) {
      localStorage.setItem('showHistoryStack', type)
      commit('setShowHistoryStack', type)
    }
  }
}

export default frontSetting
