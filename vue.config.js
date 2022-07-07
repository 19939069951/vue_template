/*
 * @Description: vue.config.js配置文件
 * @Author: ligy
 * @Date: 2022-07-07 16:29:17
 * @LastEditTime: 2022-07-07 18:22:16
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api':{
        target: process.env.VUE_APP_BASE_URL,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
