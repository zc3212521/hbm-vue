<template>
  <div class="wrap">
    <h3>my infomation</h3>
    <p>name: {{name}}</p>
    <p>gitUrl: {{git_url}}</p>
    <img src="" alt="">
  </div>
</template>

<script>
import { getTestData } from '@/http/moduleA.js'

export default {
  name: 'myOwn',
  data () {
    return {
      name: '',
      git_url: ''
    }
  },
  mounted () {
    getTestData().then(res => {
      this.git_url = res.data.git_url
      this.name = res.data.name
    })
  }
}
</script>

<style lang="less" scoped>
  .wrap {
    padding: 10px;
  }
</style>
