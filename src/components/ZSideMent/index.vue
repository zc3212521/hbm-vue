<template>
  <a-menu
    :theme="theme"
    :mode="mode"
    :selectedKeys="selectedKey"
    :openKeys="openKey"
    @openChange="toggleOpenKey"
    v-if="selectedKey !== ''"
    :style="{ height: 'calc(100% - 64)px', borderRight: 0, paddingTop: '10px' }"
  >
    <template v-for="item in userRouter">
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
        <template
          v-for="it in item.children"
        >
          <a-menu-item
            v-if="!it.children || it.children.length === 0"
            :key="it.name"
          >
            <router-link :to="{ name: it.name }">
              <span>{{ it.meta.title }}</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu
            v-else
            :key="it.name"
          >
            <span slot="title">{{ it.meta.title }}</span>
            <a-menu-item
              v-for="subit in it.children"
              :key="subit.name"
            >
              <router-link :to="{ name: subit.name }">
                <span>{{ subit.meta.title }}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script>
import { deepClone } from '@/utils'
import { mapState } from 'vuex'
export default {
  name: 'z-index-menu',
  props: {
    userRouter: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      default: 'inline'
    }
  },
  data () {
    return {
      routeData: [],
      selectedKey: [],
      openKey: []
    }
  },
  created () {
    let allRouter = deepClone(this.userRouter)
    allRouter.forEach(item => {
      if (item.name === this.currentBaseRoute) {
        let currentMenuArr = this.$route.path.split('/').slice(1)
        this.selectedKey = currentMenuArr
        this.openKey = currentMenuArr
      }
    })
  },
  computed: {
    currentBaseRoute () {
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
