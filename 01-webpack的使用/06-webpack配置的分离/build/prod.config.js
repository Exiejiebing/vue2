/*生产时配置文件*/

// 引入merge依赖---npm install webpack-merge --save-dev
const WebpackMerge = require('webpack-merge')
// 引入公共配置
const baseConfig = require('./base.config')
// 压缩js。连同注释也压缩去掉，webpack版权申明可以不写，开发阶段不需要使用
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

// 合并公共配置与生产时配置
module.exports = WebpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})
