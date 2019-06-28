import { deepClone } from '@/utils'
const mixin = {
  created () {
    this.list = this.resolveList(this.$store.state.routerStack)
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    routerStack () {
      return this.$store.state.routerStack
    }
  },
  watch: {
    routerStack: function (newV) {
      this.list = this.resolveList(newV)
    }
  },
  methods: {
    resolveList (originData) {
      let list = deepClone(originData)
      list.forEach(item => {
        item.close = true
      })
      list.unshift({
        name: 'layout',
        title: '首页',
        params: {},
        close: false
      })
      return list
    }
  }
}

export default mixin
