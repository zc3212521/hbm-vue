<template>
  <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
    <h-sub-menu :menuData="menuData"></h-sub-menu>
  </a-menu>
</template>

<script>
import HSubMenu from './HSubMenu'

export default {
  name: 'hMenu',
  components: {
    HSubMenu
  },
  data () {
    return {
      menuData: [
        {
          name: 'page1',
          path: '/page1',
          icon: 'mail',
          id: 1,
          children: [
            {
              name: 'sub1',
              path: '/home/sub1',
              icon: 'mail',
              id: 2,
              children: [
                {
                  name: 'sub1-1',
                  path: '/home/sub1',
                  icon: 'mail',
                  id: 3
                },
                {
                  name: 'sub1-2',
                  path: '/home/sub2',
                  icon: 'mail',
                  id: 4
                }
              ]
            },
            {
              name: 'sub2',
              path: '/home/sub1',
              icon: 'mail',
              id: 5
            },
            {
              name: 'sub3',
              path: '/home/sub1',
              icon: 'mail',
              id: 6
            }
          ]
        },
        {
          name: 'page2',
          path: '/page2',
          icon: 'mail',
          id: 7
        },
        {
          name: 'page3',
          path: '/page3',
          icon: 'mail',
          id: 8
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
