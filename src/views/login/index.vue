<template>
  <div class="login-wrap">
    <div id="particles-js"></div>
    <div class="company-logo">
      <img src="~@/assets/images/login_logo.png" alt="">
    </div>
    <div class="login-card">
      <p class="title">鸿冠业务管理系统</p>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入用户名' }] }
        ]"
            placeholder="请输入用户名"
            size="large"
          >
            <img
              slot="prefix"
              src="~@/assets/images/login_yonghuming_icon.png"
              style="width: 24px;"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] }
        ]"
            type="password"
            size="large"
            placeholder="请输入密码"
          >
            <img
              slot="prefix"
              src="~@/assets/images/login_mima_icon.png"
              style="width: 24px;"
            />
          </a-input>
        </a-form-item>
        <a-form-item v-if="showCaptcha">
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入验证码' }] }
        ]"
            type="password"
            size="large"
            placeholder="验证码"
            style="width: 212px;margin-right: 9px;"
          >
            <img
              slot="prefix"
              src="~@/assets/images/login_yanzhengma_icon.png"
              style="width: 24px;"
            />
          </a-input>
          <img class="captcha-img">
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
          >
            记住我
          </a-checkbox>
          <a
            class="login-form-forgot"
            href=""
          >
            忘记密码
          </a>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            size="large"
          >
            登&nbsp;&nbsp;&nbsp;录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import baseConfig from '@/baseConfig'
import particlesJS from 'particlesJS'
import particlesOpt from './particles-app'
// import { getLogin } from '@/http/common'
import {
  // encryptionPW,
  // rememberPW,
  getRemembePW
  // deleteRememberPW
} from '@/utils/auth'
export default {
  name: 'login',
  data () {
    return {
      showCaptcha: baseConfig.login.captcha
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  mounted () {
    particlesJS('particles-js', particlesOpt) // 背景动画

    let loginData = getRemembePW()
    if (loginData !== undefined) {
      this.form.setFieldsValue({
        'username': loginData.username,
        'password': loginData.password
      })
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$router.push('/')
          // let params = {
          //   username: values.username,
          //   password: encryptionPW(values.password),
          //   captcha: values.valid
          // }
          // console.log(params)
          // getLogin(params).then((res) => {
          //   if (res.status === 200) {
          //     let data = res.data.data
          //     sessionStorage.setItem('username', data.tenantName)
          //     sessionStorage.setItem('token', data.sessionId)
          //     // 记住密码功能
          //     if (values.remember) {
          //       rememberPW(values)
          //     } else {
          //       deleteRememberPW()
          //     }
          //     this.$store.dispatch('generateUserPermission').then(() => {
          //       this.$router.addRoutes(this.$store.state.permission.addRouters)
          //       this.$router.push({
          //         path: '/'
          //       })
          //     })
          //     this.$store.dispatch('generateUserInfo')
          //   }
          // }).catch(error => {
          //   if (error.response) {
          //     let errMsg = error.response.data.data
          //     if (typeof errMsg === 'string') {
          //       this.$message.config({ maxCount: 1 })
          //       this.$message.error(errMsg)
          //     } else {
          //       this.$message.config({ maxCount: 1 })
          //       this.$message.error('服务器异常，请联系开发人员。')
          //     }
          //   } else {
          //     this.$message.config({ maxCount: 1 })
          //     this.$message.error('服务器异常，请联系开发人员。')
          //   }
          // })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-wrap {
    position: relative;
    height: 100%;
    width: 100%;
    min-width: 1200px;
    min-height: 600px;
    background: url(~@/assets/images/login_bg.png) 100% 100%;
    background-size: cover;
    #particles-js {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
    .title {
      font-size:32px;
      padding: 55px 0 54px;
      margin: 0;
      text-align: center;
      font-weight:400;
      color:rgba(24,145,255,1);
    }
  }
  .company-logo {
    position: absolute;
    top: 44px;
    left: 44px;
    img {
      width: 201px;
      height: 65px;
    }
  }
  .login-card {
    width:480px;
    height:545px;
    background:rgba(255,255,255,1);
    box-shadow:0 4px 6px 0 rgba(0,41,79,0.1);
    border-radius:8px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
  }
  #components-form-demo-normal-login {
    width: 312px;
    margin: 0 auto;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
    margin-top: 58px;
  }
  .captcha-img {
    width: 90px;
    height: 38px;
    vertical-align: top;
  }
</style>
<style lang="less">
  .login-wrap {
    .ant-input-affix-wrapper .ant-input:not(:first-child) {
      padding-left: 45px;
    }
    .ant-form-item-control {
      line-height: 21px;
    }
    .ant-form-item {
      /*margin-bottom: 16px;*/
    }
  }
</style>
