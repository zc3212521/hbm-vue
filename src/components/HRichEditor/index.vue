<template>
  <div class="editor-wrap">
    <div id="editor">
    </div>
    <h-uploader-img
      :action="upAction"
      :headers="null"
      :multiple="true"
      :showUploadList="true"
      @getUrls="getUrl"
    >
      <a-button style="display: none" id="img-upload-btn">上传图片</a-button>
    </h-uploader-img>
  </div>
</template>

<script>
import HUploaderImg from '@/components/HUploaderImg'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
export default {
  name: 'richEditor',
  components: {
    HUploaderImg
  },
  props: {
    upAction: {
      required: true
    }
  },
  data () {
    return {
      quill: null,
      imgUrls: []
    }
  },
  mounted () {
    this.initImgModule()
    this.initQuill()
    var toolbar = this.quill.getModule('toolbar')
    toolbar.addHandler('image', this.showImageUI)
  },
  methods: {
    initQuill () {
      let toolbarOptions = [
        [ 'bold', 'italic', 'underline', 'strike' ], // 切换按钮
        [ 'blockquote', 'code-block' ],

        [ { 'header': [1, 2, 3, false] } ],

        [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
        [ { 'indent': '-1' }, { 'indent': '+1' } ], // 减少缩进/缩进
        [ { 'script': 'sub' }, { 'script': 'super' } ], // 上标/下标
        [ { 'direction': 'rtl' } ], // 文本下划线

        [ { 'color': [] }, { 'background': [] } ], // 主题默认下拉，使用主题提供的值
        [ { 'font': [] } ],
        [ { 'align': [] } ],
        ['image', 'code-block'],

        // [ 'formula' ],

        [ 'clean' ] // 清除格式
      ]

      let options = {
        // debug: 'info',
        placeholder: '开始书写...',
        theme: 'snow',
        format: {
          Inline: 'Bold'
        },
        modules: {
          toolbar: toolbarOptions
        }
      }

      this.quill = new Quill('#editor', options)
    },
    initImgModule () {
      let BlockEmbed = Quill.import('blots/block/embed')
      class ImageBlot extends BlockEmbed {
        static create (value) {
          let node = super.create()
          node.setAttribute('alt', value.alt)
          node.setAttribute('src', value.url)
          node.setAttribute('width', value.width)
          node.setAttribute('style', value.style)
          return node
        }

        static value (node) {
          return {
            alt: node.getAttribute('alt'),
            url: node.getAttribute('src'),
            width: node.getAttribute('width'),
            style: node.getAttribute('style')
          }
        }
      }
      ImageBlot.blotName = 'image'
      ImageBlot.tagName = 'img'
      Quill.register(ImageBlot)
    },
    showImageUI () {
      document.getElementById('img-upload-btn').click()
    },
    getUrl (urls) {
      for (let i = 0; i < urls.length; i++) {
        let range = this.quill.getSelection(true)
        this.quill.insertText(range.index, '\n', Quill.sources.USER)
        this.quill.insertEmbed(range.index + 1, 'image', {
          alt: '',
          url: urls[i],
          width: '80%',
          style: 'margin: 0 auto;display: inherit'
        }, Quill.sources.USER)
        this.quill.setSelection(range.index + 2, Quill.sources.SILENT)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .editor-wrap {
    padding: 20px 24px;
    background-color: #fff;
  }
  #custom-button {
    color: red;
  }
  #editor {
    height: 500px;
  }
</style>
