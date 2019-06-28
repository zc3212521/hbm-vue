<template>
  <div class="logo-wrap">
    <div @click="goHome">HBM</div>
  </div>
</template>

<script>
export default {
  name: 'logo',
  methods: {
    goHome () {
      this.$router.push({
        name: 'layout'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .logo-wrap {
    width: 200px;
    height: 64px;
    padding: 16px 0;
    float: left;
    overflow: hidden;
    margin-right: 16px;
    background-color: #1890ff;

    div {
      width: 152px;
      margin-left: 24px;
      line-height: 31px;
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      color: #fff;
      background-color: rgba(217, 217, 217, 0.2);
      cursor: pointer;
    }
    &::after {
      content: ' ';
      clear: both;
    }
  }
</style>
