<template>
  <div class="home-wrap">
    <template v-if="layoutMode === 'default'">
      <layout-default />
    </template>

    <template v-else-if="layoutMode === 'side'">
      <layout-side />
    </template>

    <template v-else>
      <layout-top />
    </template>

    <front-setting />
  </div>
</template>

<script>
import layoutSide from './layout-side'
import layoutDefault from './layout-default'
import layoutTop from './layout-top'
import { mapState } from 'vuex'
import frontSetting from '@/components/frontSetting'
export default {
  name: 'home',
  components: {
    layoutSide,
    layoutDefault,
    layoutTop,
    frontSetting
  },
  data () {
    return {
      visible: false
    }
  },
  computed: mapState({
    layoutMode: state => state.layoutMode
  }),
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    changeLayout (type) {
      this.$store.dispatch('updateLayoutMode', type)
    }
  }
}
</script>

<style lang="less" scoped>
  .home-wrap .ant-layout {
    min-height: 100%;
  }
  .home-wrap {
    height: 100%;
    overflow-y: scroll;
    position: relative;
    .header {
      background-color: #fff;
      .header-search {
        padding: 0 12px;
        height: 64px;
        line-height: 64px;
        vertical-align: middle;
        overflow: hidden;
      }
    }
  }

</style>
<style>
  .global-header-right {
    position: absolute;
    height: 64px;
    display: inline-block;
    line-height: 64px;
    top: 0;
    right: 0;
    color: #fff;
  }
</style>
