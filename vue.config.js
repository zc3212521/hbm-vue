const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isPro = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: './',
  devServer: {
    host: '0.0.0.0',
    overlay: {
      warnings: true,
      errors: true
    },
    // string | Object 代理设置
    proxy: {
      // 接口是 '/repos' 开头的才用代理
      '/repos': {
        target: 'https://api.github.com', // 目标地址
        changeOrigin: true // 是否改变源地址
        // pathRewrite: {'^/api': ''}
      }
    },
    hot: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@utils', resolve('src/utils'))
      .set('@com', resolve('src/components'))
      .set('@img', resolve('src/assets/images'))
      .set('@ser', resolve('src/services'))
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    if (isPro) {
      return {
        plugins: [
          new CompressionWebpackPlugin({
            // 使用 gzip 压缩
            algorithm: 'gzip',
            // 处理与此正则相匹配的所有文件
            test: new RegExp(
              '\\.(js|css)$'
            ),
            // 只处理大于此大小的文件
            threshold: 10240,
            // 最小压缩比达到 0.8 时才会被压缩
            minRatio: 0.8
          })
        ]
      }
    }
  }
}
