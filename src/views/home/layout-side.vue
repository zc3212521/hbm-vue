<template>
  <a-layout id="components-layout-side">
    <a-layout-sider width="200" :style="{backgroundColor: theme === 'dark' ? '#001529' : '#fff'}">
      <logo />
      <div style="clear: both;"></div>
      <z-side-menu :userRouter="userRouter" style="padding-top: 15px;"></z-side-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" >
        <div class="global-header-right">
          <header-element @changeLayoutCB="changeLayout"/>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="view-history" v-if="showHistoryStack === '1'">
          <router-history />
        </div>
        <div class="layout-content">
          <router-view />
        </div>
      </a-layout-content>
      <layout-footer />
    </a-layout>
  </a-layout>
</template>~

<script>
import headerElement from '@/components/headerElement'
import logo from '@/components/headerLogo'
import ZSideMenu from '@/components/ZSideMent'
import getUserRouter from '@/router/getRoutes'
import routerHistory from '@/components/routerHistory'
import layoutFooter from '@/components/layoutFooter'
import { mapState } from 'vuex'

export default {
  name: 'layout-side.vue',
  components: {
    logo,
    ZSideMenu,
    headerElement,
    routerHistory,
    layoutFooter
  },
  data () {
    return {
      userRouter: [],
      layout: 'side'
    }
  },
  created () {
    getUserRouter().then(router => {
      this.userRouter = router[0].children
    })
  },
  methods: {
    changeLayout (type) {
      this.layout = type
    }
  },
  computed: mapState({
    theme: state => state.frontSetting.theme,
    showHistoryStack: state => state.frontSetting.showHistoryStack
  })
}
</script>

<style lang="less" scoped>
  .layout-content {
    margin: 20px 24px;
  }
  .view-history {
    margin-top: 5px;
  }
</style>
