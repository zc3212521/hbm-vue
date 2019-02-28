<template>
  <span v-if="menuData.length">
    <a-menu-item v-for="(item, index) in menuData" :key="index">
      <template v-if="item.children && item.children.length">
        <a-sub-menu>
          <a-icon :type="item.icon" />
          <span>{{item.name}}</span>
          <h-sub-menu :menuData="item.children"></h-sub-menu>
        </a-sub-menu>
      </template>
      <template v-else>
        <a-icon :type="item.icon" />
        <span>{{item.name}}</span>
      </template>
    </a-menu-item>
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
