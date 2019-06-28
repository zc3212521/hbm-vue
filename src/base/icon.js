import { Icon } from 'ant-design-vue'
import Vue from 'vue'
import baseConfig from '../baseConfig'

const iconUrl = baseConfig.iconUrl

const MyIcon = Icon.createFromIconfontCN(iconUrl)
Vue.component('my-icon', MyIcon)
