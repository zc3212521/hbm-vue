const baseConfig = {
  baseURL: {
    dev: '/my-test', // 测试环境baseUrl
    prod: 'http://192.168.2.14:8676/hsc-pomp-bff', // 测试服务器环境baseUrl
    yapi: 'http://yapi.hongguaninfo.com/mock/22' // yapi上mock接口地址
  },
  iconUrl: {
    scriptUrl: '//at.alicdn.com/t/font_1043493_lhmqu1zycjq.js' // 在 iconfont.cn 上生成
  },
  login: {
    captcha: true // 是否开启验证码验证
  },
  queryWhiteList: [] // 不需要token验证的请求白名单
}
export default baseConfig
// module.exports = baseConfig
