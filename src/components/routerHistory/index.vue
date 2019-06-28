<template>
  <router-stack :list="list" />
</template>

<script>
import myMixin from './mixin'
import routerStack from '@/components/routerStack'
export default {
  name: 'routerHistory',
  mixins: [myMixin],
  components: {
    routerStack
  }
}
</script>

<style lang="less" scoped>

</style>
