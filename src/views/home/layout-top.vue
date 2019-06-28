<template>
  <a-layout id="components-layout-top">
    <a-layout-header :class="{'light-theme': theme !== 'dark'}">
      <logo />
      <z-side-menu
        :userRouter="userRouter"
        mode="horizontal"
      />
      <div class="global-header-right">
        <header-element />
      </div>
    </a-layout-header>
    <a-layout-content style="padding-right: 50px;padding-left: 50px;">
      <div class="view-history" v-if="showHistoryStack === '1'">
        <router-history />
      </div>
      <div :style="{margin: layoutMode=== 'top'? '20px 0' : '20px 24px'}">
        <router-view />
      </div>
    </a-layout-content>
    <layout-footer />
  </a-layout>
</template>

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
  computed: mapState({
    layoutMode: state => state.layoutMode,
    theme: state => state.frontSetting.theme,
    showHistoryStack: state => state.frontSetting.showHistoryStack
  })
}
</script>

<style lang="less" scoped>
  .view-history {
    margin-top: 5px;
  }
  .light-theme {
    color: rgba(255, 255, 255, 0.65);
    background: #fff;
  }
</style>
