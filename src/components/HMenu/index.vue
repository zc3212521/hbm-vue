<template>
  <a-layout style="min-height: 100%;">
    <a-layout-sider width="200" style="background: #fff">
      <side-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <div class="view-history" v-if="showHistoryStack === '1'">
          <router-history />
        </div>
        <div class="layout-content">
          <slot></slot>
        </div>
      </a-layout-content>
      <layout-footer />
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/sideMenu'
import routerHistory from '@/components/routerHistory'
import layoutFooter from '@/components/layoutFooter'
import { mapState } from 'vuex'

export default {
  name: 'HMenu',
  components: {
    SideMenu,
    routerHistory,
    layoutFooter
  },
  computed: mapState({
    showHistoryStack: state => state.frontSetting.showHistoryStack
  })
}
</script>

<style lang="less">
  .layout-content {
    margin: 20px 24px;
  }
  .view-history {
    margin-top: 5px;
  }
</style>
