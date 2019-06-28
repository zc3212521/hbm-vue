<template>
  <div class="headerContainer" :class="{ flod }">
    <div :class="[flod ? 'topbar-left-flod': '']">
      <slot></slot>
    </div>
    <div :class="[flod ? 'topbar-right-flod': 'topbar-right']">
      <a-button
        type="primary"
        html-type="submit"
        @click="handleSearch"
      >
        查询
      </a-button>
      <a-button
        :style="{ margin: '0 8px' }"
        @click="handleReset"
      >
        重置
      </a-button>
      <a
        href="#"
        @click="switchFlod"
      >
        <template v-if="flod">
          展开 <a-icon type="down" />
        </template>
        <template v-else>
          收起 <a-icon type="up" />
        </template>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTopBar',
  data () {
    return {
      flod: true
    }
  },
  methods: {
    handleSearch (e) {
      e.preventDefault()
      this.$emit('handleSearch')
    },
    handleReset (e) {
      e.preventDefault()
      this.$emit('handleReset')
    },
    switchFlod () {
      this.flod = !this.flod
      this.$emit('toggleFlod', this.flod)
    }
  }
}
</script>

<style lang="less" scoped>
  .headerContainer {
    background-color: #fff;
    padding: 20px 24px;
    position: relative;
    transition: height.3s;
    margin-bottom: 16px;

    &.flod {
      height: 76px;
      overflow: hidden;
      .topbar-right-flod {
        position: absolute;
        right: 24px;
        top: 20px;
        height: 39px;
        line-height: 39px;
        vertical-align: bottom;
      }
      .topbar-left-flod {
        margin-right: 200px;
      }
    }
    .topbar-right {
      position: relative;
      height: 39px;
      line-height: 39px;
      /*margin-bottom: 10px;*/
      float: right;
    }
    .my-icon {
      &:hover {
        color: #1890ff;
      }

      cursor: pointer;
      font-size: 20px;
      color: #666;
    }
    &:after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
</style>
