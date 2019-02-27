# vue-base

## 命令

### 依赖安装
```
npm install
```

### 编译开发环境代码，开启热替换服务器
```
npm start
```

### 编译正式环境代码
```
npm run build
```

### 运行接口mock
```
npm run mock
```

### 运行代码自动修复
```
npm run lint
```

### 运行单元测试
```
npm run test
```

## 目录结构

```
src
├─assets  // 资源文件
│  ├─font
│  ├─images
│  ├─js
│  └─style
├─components // 共用组件
│  ├─business
│  └─common
├─http // 请求相关
├─mock // mock后端数据
├─pages
│  ├─about
│  │  └─components
│  └─home
├─store // 状态管理
│  └─modules
└─utils // 工具类
```

## 开发规范

### 准备工作
1. 在/src/baseConfig.js中添加正式线上baseUrl
2. 需要代理的接口参考/vue.config.js中的参考示例

### 规范
1. 接口地址必须配置在/src/http/api.js中
2. 页面中调用后台接口的方法需定义在/src/http/中，参考示例moduleA.js。 页面中调用moduleA.js定义的方法，用then()方法处理成功回调
3. 提交代码禁止取消githook功能
4. 在代码量较多、用户点击不是很频繁的模块的显示隐藏使用v-if指令，反之使用v-show指令。
5. 路由定义需指定name,路由跳转应使用 name 而不是 path。
6. v-for循环必须添加key值
7. 组件的拆分尽可能细化，最大程度做到可复用。
