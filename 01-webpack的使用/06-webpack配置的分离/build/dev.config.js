/*开发时配置*/
// 引入merge依赖---npm install webpack-merge --save-dev
const WebpackMerge = require('webpack-merge')
// 引入公共配置
const baseConfig = require('./base.config')

// 合并公共配置与开发时配置
module.exports = WebpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})