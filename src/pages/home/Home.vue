<template>
  <div class="home">
    <img alt="Vue logo" src="~@img/logo.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="img"></div>
    <transition>
      <div>112233</div>
    </transition>
  </div>
</template>

<script>
import HelloWorld from '@/components/business/HelloWorld.vue'
import { getTestData } from '@/http/moduleA.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    console.log('index init')
    getTestData().then(res => console.log('data', res.data))
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
  .img {
    /*margin: 0 auto;*/
    width: 500px;
    height: 200px;
    background: url("~@img/logo.jpg");
    background-size: 500px;
  }
</style>
