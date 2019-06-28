<template>
  <div class="http-wrap">
    <div class="header">
      <a-button
        type="primary"
        @click="getData"
      >
        get请求
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="postData"
      >
        post请求
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="putData"
      >
        put请求
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="patchData"
      >
        patch请求
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="deleteData"
      >
        delete请求
      </a-button>
    </div>
    <div>
      <p style="margin-top: 20px;">请求结果：</p>
      <pre>{{JSON.stringify(resData)}}</pre>
    </div>
    <div>
      <a-button
        type="primary"
        @click="addUser"
      >
        添加用户
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="queryUserById"
      >
        查询用户
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="queryList"
      >
        查询用户列表
      </a-button>
      <!--<a-divider type="vertical" />-->
      <!--<a-button-->
        <!--type="primary"-->
        <!--@click="queryUser"-->
      <!--&gt;-->
        <!--查询用户分页-->
      <!--</a-button>-->
      <!--<a-divider type="vertical" />-->
      <!--<a-button-->
        <!--type="primary"-->
        <!--@click="deleteUser"-->
      <!--&gt;-->
        <!--删除用户-->
      <!--</a-button>-->
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="lockUser"
      >
        锁定用户
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        @click="updateUser"
      >
        更新用户
      </a-button>
    </div>
  </div>
</template>

<script>
import { getTest, postTest, putTest, deleteTest, patchTest, addUserTest, getUserByIdTest, getAllUserTest, updateUser, lockUserTest } from '@/http/test'
export default {
  name: 'test1',
  data () {
    return {
      resData: '暂无请求'
    }
  },
  methods: {
    getData () {
      const params = {
        id: '1'
      }
      getTest(params).then(res => {
        console.log(res)
        this.resData = res.data
      })
    },
    postData () {
      const params = {
        name: {
          first: 'zhang'
        }
      }
      postTest(params).then(res => {
        console.log(res)
        this.resData = res.data
      })
    },
    putData () {
      const params = {
        name: {
          last: 'san'
        }
      }
      putTest(params).then(res => {
        console.log(res)
        this.resData = res.data
      })
    },
    deleteData () {
      const params = {
        id: '2'
      }
      deleteTest(params).then(res => {
        console.log(res)
        this.resData = res.data
      })
    },
    patchData () {
      const params = {
        name: {
          method: 'patch'
        }
      }
      patchTest(params).then(res => {
        console.log(res)
        this.resData = res.data
      })
    },
    // test
    addUser () {
      const params = {
        // account: 'zhangsan',
        password: 'testPassWord',
        userName: '张三',
        userType: 1
      }
      addUserTest(params).then(res => {
        console.log('add:', res.data)
      })
    },
    queryUserById () {
      const urlParams = {
        userId: 1,
        userName: 'zhangsan'
      }
      getUserByIdTest({}, urlParams).then(res => {
        console.log('get by id: ', res.data)
      })
    },
    queryList () {
      getAllUserTest().then(res => {
        console.log('all user: ', res.data)
      })
    },
    lockUser () {
      lockUserTest({
        userId: 1
      }).then(res => {
        console.log('lock user: ', res.data)
      })
    },
    updateUser () {
      const urlParams = {
        userId: 2
      }
      const params = {
        name: 'zhangsan',
        email: 'zhangsan@xxx.com'
      }
      updateUser(params, urlParams).then(res => {
        console.log('update user: ', res.data)
        // 代码逻辑
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .http-wrap {
    padding: 24px;
    background-color: #fff;
  }
</style>
