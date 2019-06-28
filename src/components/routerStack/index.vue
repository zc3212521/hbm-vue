<template>
  <div class="router-stack-wrap">
    <span
      v-for="(item, i) in list"
      :key="i"
      @click="goRouter(item)"
      :class="{ active: item.name === $route.name }"
    >
      <span :style="{color: item.close ? '#000' : '#40a9ff'}">{{ item.title }}</span>
      <a-icon
        v-if="item.close"
        type="close"
        class="router-icon"
        @click.stop="filterRouter(item.name)"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'routerStack',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    goRouter (item) {
      this.$router.push({
        name: item.name,
        params: item.params
      })
    },
    filterRouter (name) {
      this.$store.dispatch('removeOneRouter', name)
    }
  }
}
</script>

<style lang="less" scoped>
  .router-stack-wrap {
    height: 40px;
    padding: 0 24px;
    background-color: #fff;

    & > span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      padding: 0 12px;
      background-color: #fff;
      cursor: default;

      &:hover, &.active {
        background-color: #f0f2f5;

        & .router-icon {
          color: #ff0000;
        }
      }
    }
    .router-icon {
      margin-left: 8px;
      font-size: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  }
</style>
