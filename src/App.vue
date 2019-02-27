<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN' // eslint-disable-line

export default {
  name: 'app',
  data () {
    return {
      zh_CN
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
