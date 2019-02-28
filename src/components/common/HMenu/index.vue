<template>
  <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
    <h-sub-ment :menuData="menuData"></h-sub-ment>

    <!--<template v-for="(item, index) in menuData">-->
      <!--<template v-if="item.children && item.children.length > 0">-->
        <!--<a-sub-menu :key="index">-->
          <!--<span slot="title">-->
            <!--<a-icon :type="item.icon" />-->
            <!--<span>{{item.name}}</span>-->
          <!--</span>-->
          <!--<h-sub-ment-->
            <!--v-for="(item0, index0) in item.children"-->
            <!--:key="index0"-->
            <!--:menuData="item0">-->
          <!--</h-sub-ment>-->
        <!--</a-sub-menu>-->
      <!--</template>-->
      <!--<template v-else>-->
        <!--<a-menu-item :key="index">-->
          <!--<a-icon :type="item.icon" />-->
          <!--<span>{{item.name}}</span>-->
        <!--</a-menu-item>-->
      <!--</template>-->
    <!--</template>-->
  </a-menu>
</template>

<script>
// import HSubMenu from './HSubMenu'

export default {
  name: 'hMenu',
  components: {
    // HSubMenu
  },
  data () {
    return {
      menuData: [
        {
          name: 'page1',
          path: '/page1',
          icon: 'mail',
          children: [
            {
              name: 'sub1',
              path: '/home/sub1',
              icon: 'mail',
              children: [
                {
                  name: 'sub1-1',
                  path: '/home/sub1',
                  icon: 'mail'
                },
                {
                  name: 'sub1-2',
                  path: '/home/sub2',
                  icon: 'mail'
                }
              ]
            },
            {
              name: 'sub1',
              path: '/home/sub1',
              icon: 'mail'
            },
            {
              name: 'sub1',
              path: '/home/sub1',
              icon: 'mail'
            }
          ]
        },
        {
          name: 'page2',
          path: '/page2',
          icon: 'mail'
        },
        {
          name: 'page3',
          path: '/page3',
          icon: 'mail'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
