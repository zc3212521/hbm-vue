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
  name: 'userCenter',
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

</style>
