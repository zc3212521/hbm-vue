<template>
  <div>
    <p>{{ accept === "" ? "" : "仅限上传 " + accept + " 的文件类型,"}} {{multiple ? '' : '不'}}支持多文件上传。</p>
    <a-upload
      name="file"
      :accept="accept"
      :directory="directory"
      :multiple="multiple"
      :headers="headers"
      :action="action"
      :fileList="fileList"
      @change="handleChange"
      :showUploadList="showUploadList"
      :remove="removeFile"
      listType="picture"
    >
      <slot></slot>
    </a-upload>
  </div>
</template>

<script>
// import { deepClone } from '@/utils'
export default {
  name: 'index',
  props: {
    action: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: true
    },
    limitType: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String
    },
    directory: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Object,
      default: null
    },
    showUploadList: {
      default: function () {
        return { showPreviewIcon: false, showRemoveIcon: true }
      }
    }
  },
  data () {
    return {
      removeFile: function (file) {
        console.log('remove file', file)
      },
      fileList: []
    }
  },
  created () {
    this.fileList = []
    if (this.limitType && this.type.length === 0) {
      console.error('请添加允许上传文件的后缀配置项！')
    }
  },
  methods: {
    handleChange (info) {
      this.fileList = info.fileList
      this.$emit('reciveImg', info.fileList)
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
