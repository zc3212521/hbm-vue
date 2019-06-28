<template>
  <div>
    <span @click="visible = !visible">
      <slot />
    </span>
    <a-modal
      title="上传图片"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template slot="footer">
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" type="primary" :disabled="ifDisabled" @click="handleOk">
          确定
        </a-button>
      </template>
      <upload-files
        :action="action"
        :headers="headers"
        :multiple="multiple"
        :showUploadList="showUploadList"
        accept="image/*"
        @reciveImg="cbRevice"
        ref="uploadChild"
      >
        <a-button>
          <a-icon type="upload" /> 选择图片
        </a-button>
      </upload-files>
    </a-modal>
  </div>
</template>

<script>
import uploadFiles from '../uploadFiles'
export default {
  name: 'HUploader',
  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default: null
    },
    multiple: {
      type: Boolean,
      default: true
    },
    showUploadList: {
      default: function () {
        return { showPreviewIcon: false, showRemoveIcon: true }
      }
    },
    type: {
      type: Array
    },
    limitType: {
      type: Boolean,
      default: false
    }
  },
  components: {
    uploadFiles
  },
  data () {
    return {
      visible: false,
      urls: [],
      fileList: [],
      ifDisabled: true
    }
  },
  created () {
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk () {
      let urls = this.fileList.map(item => {
        if (item.status === 'done') {
          return item.response.url
        }
      })
      this.$emit('getUrls', urls)
      this.$refs.uploadChild.fileList = []
      this.visible = false
      this.ifDisabled = true
    },
    handleCancel () {
      this.visible = false
    },
    handleChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
    cbRevice (list) {
      this.fileList = list
      if (list.some(item => item.status === 'done')) this.ifDisabled = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>
