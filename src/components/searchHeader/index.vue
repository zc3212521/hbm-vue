<template>
  <span class="search-header-wrap">
    <a-icon type="search" @click="activeSearch" />
    <div class="header-search-input-wrap" :class="{active}">
      <a-input
        type="text"
        class="header-search-input"
        placeholder="请输入关键字"
        @change="onChange"
        @pressEnter="goSearch"
        ref="searchInput"
        :value="value"
      />
    </div>
  </span>
</template>

<script>
export default {
  name: 'searchHeader',
  data () {
    return {
      active: false,
      value: ''
    }
  },
  mounted () {
    document.addEventListener('click', (e) => {
      if (typeof e.target.className === 'string' && e.target.className.indexOf('header-search') === -1) {
        this.active = false
        this.value = ''
      }
    })
  },
  methods: {
    activeSearch () {
      this.active = !this.active
      this.$refs.searchInput.focus()
    },
    onChange (e) {
      this.value = e.target.value
    },
    goSearch () {
      this.$message.info('要搜索：' + this.value)
    }
  }
}
</script>

<style lang="less" scoped>
  .search-header-wrap {
    display: inline-block;
  }
  .header-search-input-wrap {
    display: inline-block;
    border-bottom: 1px solid #ccc;
    width: 0;
    background: transparent;
    border-radius: 0;
    transition: width .3s,margin-left .3s;
    line-height: 2;

    &.active {
      width: 210px;
      margin-left: 8px;
    }

    .header-search-input {
      height: 100%;
      border: 0;
      padding: 5px 0;
      box-shadow: none;
    }
  }
</style>
