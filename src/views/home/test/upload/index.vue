<template>
  <div class="upload-wrap">
    <h-uploader-img
      action="upload/image"
      :headers="null"
      :multiple="true"
      :showUploadList="true"
      @getUrls="getUrl"
    >
      <a-button>上传图片</a-button>
    </h-uploader-img>
    <p style="margin: 10px">上传图片：</p>
    <div v-for="(item, index) in list" :key="index">
      <img style="width: 200px;margin: 10px;" :src="item" alt="">
    </div>
  </div>

</template>

<script>
import HUploaderImg from '@/components/HUploaderImg'
export default {
  name: 'upload',
  components: {
    HUploaderImg
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
        this.list.push(info.file.response.url)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
    getUrl (urls) {
      this.list = urls
    }
  }
}
</script>

<style lang="less" scoped>
  .upload-wrap {
    padding: 20px 24px;
    background-color: #fff;
  }
</style>
