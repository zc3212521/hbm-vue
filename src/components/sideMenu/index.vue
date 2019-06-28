<template>
  <a-menu
    :theme="theme"
    mode="inline"
    :selectedKeys="selectedKey"
    :openKeys="openKey"
    @openChange="toggleOpenKey"
    v-if="selectedKey !== ''"
    :style="{ height: '100%', borderRight: 0, paddingTop: '15px' }"
  >
    <template v-for="item in routeData">
      <a-menu-item
        v-if="!item.children || item.children.length === 0"
        :key="item.name"
      >
        <router-link :to="{ name: item.name }">
          <a-icon type="pie-chart" />
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu
        v-else
        :key="item.name"
      >
        <span slot="title"><a-icon type="user" />{{ item.meta.title }}</span>
        <a-menu-item
          v-for="it in item.children"
          :key="it.name">
          <router-link :to="{ name: it.name }">
            <span>{{ it.meta.title }}</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
import getUserRouter from '@/router/getRoutes'
// import { deepClone } from '@/utils'
import { mapState } from 'vuex'

export default {
  name: 'sideMenu',
  data () {
    return {
      routeData: [],
      currentMenuArr: this.$route.path.split('/').slice(1),
      openKey: [],
      selectedKey: ''
    }
  },
  mounted () {
    getUserRouter().then(router => {
      let allRoute = router[0].children
      allRoute.forEach(item => {
        if (item.name === this.currentRoute) {
          let currentMenuArr = this.$route.path.split('/').slice(1)
          this.routeData = item.children || []
          // if (currentMenuArr.length === 3) { // 三级路由
          //   this.openKey = [currentMenuArr[1]]
          //   this.selectedKey = currentMenuArr[2]
          // }
          // if (currentMenuArr.length === 2) { // 二级路由
          //   this.openKey = []
          //   this.selectedKey = currentMenuArr[1]
          // }
          this.selectedKey = currentMenuArr
          this.openKey = currentMenuArr
        }
      })
    })
  },
  computed: {
    currentRoute () {
      return this.$route.path.split('/')[1]
    },
    routerName () {
      return this.$route.name
    },
    ...mapState({
      theme: state => state.frontSetting.theme
    })
  },
  watch: {
    routerName: function (newV) {
      let currentMenuArr = this.$route.path.split('/').slice(1)
      // let openKey = deepClone(this.openKey)
      // if (currentMenuArr.length === 3 && openKey.indexOf(currentMenuArr[1]) === -1) {
      //   openKey.push(currentMenuArr[1])
      // }
      // this.openKey = openKey
      // this.selectedKey = newV
      this.selectedKey = currentMenuArr
      this.openKey = currentMenuArr
    }
  },
  methods: {
    toggleOpenKey (key) {
      this.openKey = key
    }
  }
}
</script>

<style lang="less" scoped>

</style>
