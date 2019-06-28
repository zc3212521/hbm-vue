<template>
  <div>
    <template v-if="layoutMode === 'default'">
      <h-menu>
        <router-view />
      </h-menu>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import HMenu from '@/components/HMenu'
export default {
  name: 'test',
  components: {
    HMenu
  },
  data () {
    return {
      layoutMode: localStorage.getItem('layoutMode') || 'defalut'
    }
  }
}
</script>

<style lang="less" scoped>
  .page-wrap{
    padding: 24px;
    background-color: #fff;
  }
</style>
