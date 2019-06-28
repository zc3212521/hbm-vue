<template>
  <div class="h-content-wrap">
    <h-top-bar
      @handleSearch="handleSubmit"
      @handleReset="handleReset"
      @toggleFlod="toggleFlod"
    >
      <a-form>
        <a-row :gutter="24">
          <a-col
            :span="flod ? '11' : '8'" >
            <a-form-item
              label="用户名"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }">
              <a-input  placeholder="请输入用户名"/>
            </a-form-item>
          </a-col>
          <a-col
            :span="flod ? '11' : '8'" >
            <a-form-item
              label="登录名"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }">
              <a-input  placeholder="请输入登录名"/>
            </a-form-item>
          </a-col>
          <a-col
            :span="flod ? '11' : '8'" >
            <a-form-item
              label="角色类型"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }">
              <a-input  placeholder="请输入角色类型"/>
            </a-form-item>
          </a-col>
          <a-col
            :span="flod ? '11' : '8'" >
            <a-form-item
              label="部门"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }">
              <a-input  placeholder="请输入部门名称"/>
            </a-form-item>
          </a-col>
          <a-col
            :span="flod ? '11' : '8'" >
            <a-form-item
              label="职位"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }">
              <a-input  placeholder="请输入职位名称"/>
            </a-form-item>
          </a-col>
          <a-col
            :span="flod ? '11' : '8'" >
            <a-form-item
              label="手机号"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }">
              <a-input  placeholder="请输入手机号名称"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </h-top-bar>
    <div class="content-bottom-section">
      <div>
        <a-button type="primary" style="margin-right: 20px;">新建</a-button>
        <a-button type="primary">导入</a-button>
      </div>
      <a-divider style="margin: 16px 0;"/>
      <a-table :columns="columns" :dataSource="data">
        <a slot="action" href="javascript:;">Delete</a>
        <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.description}}</p>
      </a-table>
    </div>
  </div>
</template>

<script>
import HTopBar from '@/components/HTopBar'
export default {
  name: 'userManagement',
  components: {
    HTopBar
  },
  data () {
    return {
      flod: true,
      data: [
        { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
        { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
        { key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }
      ],
      columns: [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Action', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } }
      ]
    }
  },
  methods: {
    handleSubmit () {
      this.$message.info('提交。。。')
    },
    toggleFlod (flod) {
      this.flod = flod
    },
    handleReset () {
      this.$message.info('重置。。。')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
