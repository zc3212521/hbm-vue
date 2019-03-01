<template>
  <span>
    <template v-for="item in menuData">
      <a-sub-menu v-if="item.children && item.children.length" :key="item.id">
          <span slot="title">
            <span>{{item.name}}</span>
          </span>
        <h-sub-menu :menuData="item.children"></h-sub-menu>
      </a-sub-menu>
      <a-menu-item :key="item.id" v-else>
        <span>{{item.name}}</span>
      </a-menu-item>
    </template>
  </span>
</template>

<script>
export default {
  name: 'HSubMenu',
  props: {
    menuData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
