<template>
  <a-layout id="components-layout-demo-top-side" >
    <a-layout-header class="header" style="padding: 0;background-color: #fff;">
      <logo />
      <a-menu
        :theme="theme"
        mode="horizontal"
        :selectedKeys="[currentRouteUrl]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item
          v-for="item in routeData"
          :key="item.name">
          <router-link :to="{ name: item.name }">{{ item.meta.title }}</router-link>
        </a-menu-item>
      </a-menu>
      <div class="global-header-right">
        <header-element />
      </div>
    </a-layout-header>
    <router-view style="min-height: calc(100% - 64px);"/>
  </a-layout>
</template>

<script>
import getUserRouter from '@/router/getRoutes'
import headerElement from '@/components/headerElement'
import logo from '@/components/headerLogo'
import { mapState } from 'vuex'
export default {
  name: 'layout-default',
  created () {
    getUserRouter().then(router => {
      this.routeData = router[0].children
    })
  },
  components: {
    headerElement,
    logo
  },
  data () {
    return {
      routeData: []
    }
  },
  computed: {
    currentRouteUrl: function () {
      return this.$route.path.split('/')[1]
    },
    ...mapState({
      theme: state => state.frontSetting.theme
    })
  }
}
</script>

<style lang="less" scoped>
#components-layout-demo-top-side {
  height: 100%;
}
</style>
