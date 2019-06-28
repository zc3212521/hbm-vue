<template>
  <div class="header-element-wrap" :style="{margin: layoutMode === 'top' ? '0 50px' : '0 24px'}" :class="{dark: theme === 'dark' && layoutMode !== 'side'}">
    <search-header class="header-search" />
    <a-tooltip placement="bottom">
      <template slot="title">
        <span>文档说明</span>
      </template>
      <span>
        <a-icon type="question-circle" />
      </span>
    </a-tooltip>
    <h-avatar />
  </div>
</template>

<script>
import searchHeader from '@/components/searchHeader'
import HAvatar from '@/components/HAvatar'
import { mapState } from 'vuex'
export default {
  name: 'header-element',
  components: {
    searchHeader,
    HAvatar
  },
  data () {
    return {
    }
  },
  methods: {
    changeLayout (type) {
      this.$store.dispatch('updateLayoutMode', type)
    }
  },
  computed: mapState({
    theme: state => state.frontSetting.theme,
    layoutMode: state => state.layoutMode
  })
}
</script>

<style lang="less" scoped>
  .header-element-wrap {
    color: #001529;

    & > span {
      display: inline-block;
      padding: 0 12px;
      cursor: pointer;
      height: 64px;
      line-height: 64px;
      vertical-align: middle;
      overflow: hidden;
      font-size: 16px;
    }
    &.dark {
      color: #fff;
    }
  }
</style>
