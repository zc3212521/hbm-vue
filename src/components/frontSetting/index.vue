<template>
  <div>
    <div class="components-setting-drawer-btn" v-if="!visible">
      <a-icon @click="showDrawer" type="setting" />
    </div>
    <a-drawer
      title="设置"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <div class="components-setting-drawer-index-handle">
        <a-icon v-if="!visible" @click="showDrawer" type="setting" />
        <a-icon v-else @click="onClose" type="close" />
      </div>
      <div class="layout-setting">
        <a-form>
          <a-form-item
            label="布局设置"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 20 }"
          >
            <a-radio-group @change="changeMode" :value="mode" style="margin-left: 20px;">
              <a-radio value="default" :style="radioStyle" >默认布局</a-radio>
              <a-radio value="side" :style="radioStyle">左侧导航布局</a-radio>
              <a-radio value="top" :style="radioStyle">顶部导航布局</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-form>
        <a-divider />
        <a-form>
          <a-form-item
            label="主题设置"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 20 }"
          >
            <a-radio-group @change="changeTheme" :value="theme" style="margin-left: 20px;">
              <a-radio value="light" :style="radioStyle" >
                <a-tag>Light</a-tag>
              </a-radio>
              <a-radio value="dark" :style="radioStyle">
                <a-tag color="#001529">Dark</a-tag>
              </a-radio>
            </a-radio-group>
          </a-form-item>
        </a-form>
        <a-divider />
        <a-form>
          <p style="color: rgba(0, 0, 0, 0.85)">浏览历史组件</p>
          <a-form-item
            label="显示/隐藏"
            :label-col="{ span: 12 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-switch :checked="showHistoryStack === '1'" @change="ifShowHistoryStack">
              <a-icon type="check" slot="checkedChildren"/>
              <a-icon type="close" slot="unCheckedChildren"/>
            </a-switch>
          </a-form-item>
          <a-form-item
            label="保存数量"
            :label-col="{ span: 12 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input-number style="width: 60px;" :min="1" :max="10" :value="routerStackLength" @change="changeHistoryStackNum" />
          </a-form-item>
        </a-form>
      </div>

    </a-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'frontSetting',
  data () {
    return {
      visible: false,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  computed: mapState({
    mode: state => state.layoutMode,
    theme: state => state.frontSetting.theme,
    showHistoryStack: state => state.frontSetting.showHistoryStack,
    routerStackLength: state => state.routerStackLength
  }),
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    changeMode (e) {
      this.$store.dispatch('updateLayoutMode', e.target.value)
    },
    changeTheme (e) {
      this.$store.dispatch('updateTheme', e.target.value)
    },
    ifShowHistoryStack (checked) {
      checked ? this.$store.dispatch('updateShowHistoryStack', '1') : this.$store.dispatch('updateShowHistoryStack', '0')
    },
    changeHistoryStackNum (num) {
      this.$store.dispatch('updateRouterStackLength', num)
      this.$store.dispatch('setClearRouterStack')
    }
  }
}
</script>

<style lang="less" scoped>
  .components-setting-drawer-index-handle {
    position: absolute;
    left: -48px;
    bottom: 20px;
    top: 240px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    font-size: 16px;
    text-align: center;
    background: #1890ff;
    border-radius: 4px 0 0 4px;
    cursor: pointer;
    pointer-events: auto;

    i {
      width: 48px;
      height: 48px;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .components-setting-drawer-btn {
    position: fixed;
    right: 0;
    bottom: 20px;
    top: 240px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    font-size: 16px;
    text-align: center;
    background: #1890ff;
    border-radius: 4px 0 0 4px;
    cursor: pointer;
    pointer-events: auto;
    i {
      width: 48px;
      height: 48px;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
  }
</style>
