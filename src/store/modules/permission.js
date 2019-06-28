import { routes } from '@/router'
import getUserRouter from '@/router/getRoutes'
// import { getUserAuth } from '@/http/common'
// import { filterTopRouterAuth } from '@/utils'

const permission = {
  state: {
    routers: routes,
    routeReady: false,
    addRouters: [],
    userPermission: []
  },
  mutations: {
    setRoutes (state, routers) {
      state.addRouters = routers
      state.routers = routes.concat(routers)
    },
    setRouterStatus (state, ifReady) {
      state.routeReady = ifReady
    },
    setUserPermission (state, permisssion) {
      state.userPermission = permisssion
    },
    setClearPermission (state) {
      state.routeReady = false
      state.addRouters = []
      state.userPermission = []
    }
  },
  actions: {
    generateUserPermission ({ commit }) {
      getUserRouter(permission).then(router => {
        // console.log('get router', router)
        commit('setRoutes', router)
        commit('setRouterStatus', true)
        // resolve()
      })
      // return new Promise(resolve => {
      //   getUserAuth().then(res => {
      //     if (res.data.code === 10000) {
      //       let resData = res.data.data
      //       // console.log('get userauth', resData)
      //       const permission = filterTopRouterAuth(resData)
      //       commit('setUserPermission', permission)
      //       getMyRouter(permission).then(router => {
      //         // console.log('get router', router)
      //         commit('setRoutes', router)
      //         commit('setRouterStatus', true)
      //         resolve()
      //       })
      //     }
      //   })
      // })
    },
    clearPermisssion ({ commit }) {
      commit('setClearPermission')
    }
  },
  getters: {
    getRoutes (state) {
      return state.routers
    },
    getRouteStatus (state) {
      return state.routeReady
    },
    getAddRoute (state) {
      return state.addRouters
    },
    getUserPermission (state) {
      return state.userPermission
    }
  }
}

export default permission
