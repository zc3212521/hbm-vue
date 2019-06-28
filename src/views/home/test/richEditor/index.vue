<template>
  <div class="editor-wrap">
    <h-rich-editor
      upAction="upload/image"
    />
  </div>
</template>

<script>
import HRichEditor from '@/components/HRichEditor'
export default {
  name: 'richEditor',
  components: {
    HRichEditor
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
