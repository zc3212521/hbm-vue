# vue-base

## 命令

### 项目启动
1. [node安装10.0.0+](https://nodejs.org/zh-cn/)

2. [yarn安装](https://yarn.bootcss.com/docs/install/#windows-stable)

3. 更换yarn源(可选操作项，如可翻墙，无需此步骤)
```
yarn config set registry 'https://registry.npm.taobao.org'
```

4. 安装依赖，项目目录下执行
```
yarn
```

5. 启动项目
```
npm start
```

5.浏览器访问：  http://localhost:8080 

### 辅助工具安装

1. chrome安装插件 vue,vue performance


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
### 项目结构
```
|   .browserslistrc
|   .editorconfig
|   .env.mock
|   .env.yapi
|   .eslintrc.js
|   .gitignore
|   babel.config.js
|   package.json
|   postcss.config.js
|   README.md
|   vue.config.js // 框架相关配置
|   
+---public // 静态资源目录
|       favicon.ico
|       index.html
|       particles.min.js
|       
+---src
|   |   App.vue
|   |   baseConfig.js
|   |   main.js
|   |   
|   +---assets // 图片，字体，音视频文件目录
|   |   
|   +---base // 基础配置，功能目录
|   |       
|   +---components // 公用组件目录
|   |           
|   +---http // http模块
|   |       api.js
|   |       common.js
|   |       
|   +---mock // mock逻辑目录
|   |       
|   +---router // 路由目录
|   |       getRoutes.js
|   |       index.js
|   |       
|   +---store // vuex
|   |   |   
|   |   \---modules
|   |           permission.js
|   |           userInfo.js
|   |           
|   +---utils // 工具函数
|   |       
|   \---views // 视图
|       +---home

|       |                   
|       \---login
|               index.vue
|               particles-app.js
|               
\---tests // 单元测试
```
