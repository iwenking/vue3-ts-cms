// 按需引入ElementPlus组件
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// 自动导入Icon图标
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://codercba.com:5000',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [
          // 这个是组件自动导入
          ElementPlusResolver()
        ]
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
            prefix: 'icon',
            // 指定collection，即指定为elementplus图标集ep
            enabledCollections: ['ep']
          }),
          // 这个是组件自动导入
          ElementPlusResolver()
        ]
      }),
      // Icons图标自动下载
      Icons({
        autoInstall: true
      })
    ]
  }
}
