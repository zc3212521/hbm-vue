<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN' // eslint-disable-line
import getUserRouter from '@/router/getRoutes'
export default {
  name: 'app',
  data () {
    return {
      zh_CN
    }
  },
  created () {
    getUserRouter().then(routes => {
      this.$router.addRoutes(routes)
    })
  }
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    min-width: 1200px;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: blue;
      }
    }
  }
  .content-bottom-section {
    background-color: #fff;
    padding: 20px 24px;
    height: 100%;
  }
  .h-content-wrap {
    min-height: 600px;
  }
</style>
